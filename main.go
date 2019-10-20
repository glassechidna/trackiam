package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"github.com/fatih/camelcase"
	"github.com/pkg/errors"
	"io/ioutil"
	"net/http"
	"sort"
	"strings"
	"text/template"
)

type iamDocument struct {
	ServiceMap map[string]serviceDocument `json:"serviceMap"`
}

type serviceDocument struct {
	StringPrefix string   `json:"StringPrefix"`
	Actions      []string `json:"Actions"`
}

func policiesJs() ([]byte, error) {
	url := "https://awspolicygen.s3.amazonaws.com/js/policies.js"
	resp, err := http.Get(url)
	if err != nil {
		return nil, errors.WithStack(err)
	}

	bytes, err := ioutil.ReadAll(resp.Body)
	return bytes, errors.WithStack(err)
}

func docFromJson(input []byte) (*iamDocument, error) {
	index := bytes.IndexAny(input, "{")
	input = input[index:]

	doc := iamDocument{}
	err := json.Unmarshal(input, &doc)
	return &doc, errors.WithStack(err)
}

func serviceToYaml(service serviceDocument) ([]byte, error) {
	tmpl, err := template.New("").Parse(`
Actions:
{{- range .Actions }}
  - Name: {{ $.StringPrefix }}:{{ . }}
{{- end }}
	`)
	if err != nil {
		die(err)
	}

	buf := &bytes.Buffer{}
	err = tmpl.Execute(buf, service)
	if err != nil {
		return nil, errors.WithStack(err)
	}

	str := buf.String()
	str = strings.TrimSpace(str) + "\n"
	return []byte(str), nil
}

func flattenServices(input map[string]serviceDocument) map[string]serviceDocument {
	output := map[string]serviceDocument{}

	for _, in := range input {
		doc := serviceDocument{
			StringPrefix: in.StringPrefix,
			Actions:      output[in.StringPrefix].Actions,
		}

		doc.Actions = append(doc.Actions, in.Actions...)
		sort.Strings(doc.Actions)
		output[in.StringPrefix] = doc
	}

	return output
}

type stat struct {
	Prefix string
	Count  int
}

type byCount []stat

func (s byCount) Len() int {
	return len(s)
}
func (s byCount) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}
func (s byCount) Less(i, j int) bool {
	return s[i].Count < s[j].Count
}

func prefixStats(input map[string]serviceDocument) ([]stat, []stat, int) {
	servicesCalc := map[string]int{}
	actionsCalc := map[string]int{}
	actionCount := 0

	for _, doc := range input {
		for _, action := range doc.Actions {
			actionCount++
			servicesCalc[doc.StringPrefix] += 1

			words := camelcase.Split(action)
			first := words[0]
			if first == "Batch" {
				first = words[0] + words[1]
			}
			actionsCalc[first] += 1
		}
	}

	actionsSlice := []stat{}
	for prefix, count := range actionsCalc {
		actionsSlice = append(actionsSlice, stat{Prefix: prefix, Count: count})
	}

	servicesSlice := []stat{}
	for prefix, count := range servicesCalc {
		servicesSlice = append(servicesSlice, stat{Prefix: prefix, Count: count})
	}

	sort.Sort(sort.Reverse(byCount(actionsSlice)))
	sort.Sort(sort.Reverse(byCount(servicesSlice)))
	return servicesSlice, actionsSlice, actionCount
}

func printStats(input map[string]serviceDocument) ([]byte, error) {
	tmpl, err := template.New("").Parse(`# AWS IAM by the numbers

* Unique services: {{ .ServiceCount }}
* Unique actions: {{ .ActionCount }}

Busiest services:

| Service | Count |
| ------ | ----- |
{{- range .BusyServices }}
| {{ .Prefix }} | {{ .Count }} |
{{- end }}

Most common action prefixes:

| Prefix | Count |
| ------ | ----- |
{{- range .Prefixes }}
| {{ .Prefix }} | {{ .Count }} |
{{- end }}
`)
	if err != nil {
		return nil, errors.WithStack(err)
	}

	busyServices, prefixes, actionCount := prefixStats(input)
	prefixes = prefixes[:10]
	busyServices = busyServices[:10]

	buf := &bytes.Buffer{}
	err = tmpl.Execute(buf, map[string]interface{}{
		"ServiceCount": len(input),
		"ActionCount":  actionCount,
		"Prefixes":     prefixes,
		"BusyServices": busyServices,
	})
	if err != nil {
		return nil, errors.WithStack(err)
	}

	return buf.Bytes(), nil
}

func main() {
	byt, err := policiesJs()
	if err != nil {
		die(err)
	}

	doc, err := docFromJson(byt)
	if err != nil {
		die(err)
	}

	flattened := flattenServices(doc.ServiceMap)

	for name, service := range flattened {
		yml, err := serviceToYaml(service)
		if err != nil {
			die(err)
		}

		err = ioutil.WriteFile(fmt.Sprintf("services/%s.yml", name), yml, 0644)
		if err != nil {
			die(errors.WithStack(err))
		}
	}

	stats, err := printStats(flattened)
	if err != nil {
		die(errors.WithStack(err))
	}

	err = ioutil.WriteFile("README.md", stats, 0644)
	if err != nil {
		die(errors.WithStack(err))
	}
}

func die(err error) {
	panic(fmt.Sprintf("%+v", err))
}
