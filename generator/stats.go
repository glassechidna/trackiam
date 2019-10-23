package generator

import (
	"bytes"
	"fmt"
	"github.com/fatih/camelcase"
	"github.com/pkg/errors"
	"sort"
	"text/template"
)

func printStats(acts actions) ([]byte, error) {
	tmpl, err := template.New("").Parse(`# AWS IAM by the numbers

* Unique services: {{ .ServiceCount }}
* Unique actions: {{ .ActionCount }}

The following table summarises the AWS APIs. 

* The first column is the name of the API as far as IAM policies are concerned. 
* The second column is IAM actions that exactly match the names of invokable 
  APIs exposed by AWS.
* The third column is invokable APIs that don't have a corresponding IAM action.
* The fourth column is IAM actions that don't have a corresponding invokable API.

| Service | Action/API pairs | APIs without actions | Actions without APIs |
| ------ | ----- | ----- | ----- |
{{- range .Services }}
| [{{ $.Backtick }}{{ .IamPrefix }}{{ $.Backtick }}](services/{{ .IamPrefix }}.yml) | {{ .ActionApiPairs }} | {{ .ActionlessApis }} | {{ .ApilessActions }} |
{{- end }}

Most common action prefixes:

| Prefix | Count |
| ------ | ----- |
{{- range .Prefixes }}
| {{ $.Backtick }}{{ .Prefix }}{{ $.Backtick }} | {{ .Count }} |
{{- end }}

Thank you to [alanakirby/aktion](https://github.com/alanakirby/aktion) for originally 
having this idea and being gracious about me shamelessly ripping it off.
`)
	if err != nil {
		return nil, errors.WithStack(err)
	}

	byIamPrefix := acts.groupBy(func(act *action) string {
		return act.IamPrefix
	})

	stats := []serviceStats{}

	for iamPrefix, actz := range byIamPrefix {
		bySupport := actz.groupBy(func(act *action) string {
			return fmt.Sprintf("%v%v", act.HasApi, act.HasAction)
		})

		hasApiAndAction := bySupport["truetrue"]
		hasActionWithoutApi := bySupport["falsetrue"]
		hasApiWithoutAction := bySupport["truefalse"]

		stats = append(stats, serviceStats{
			IamPrefix:      iamPrefix,
			ActionApiPairs: len(hasApiAndAction),
			ActionlessApis: len(hasApiWithoutAction),
			ApilessActions: len(hasActionWithoutApi),
		})
	}

	sort.Sort(sort.Reverse(serviceStatsByCount(stats)))

	byFirstWord := acts.groupBy(func(act *action) string {
		words := camelcase.Split(act.Name)
		return words[0]
	})

	wordStats := []stat{}
	for word, acts := range byFirstWord {
		wordStats = append(wordStats, stat{Prefix: word, Count: len(acts)})
	}
	sort.Sort(sort.Reverse(statsByCount(wordStats)))
	wordStats = wordStats[:10]

	buf := &bytes.Buffer{}
	err = tmpl.Execute(buf, map[string]interface{}{
		"ServiceCount": len(stats),
		"ActionCount":  len(acts),
		"Prefixes":     wordStats,
		"Services":     stats,
		"Backtick":     "`",
	})
	if err != nil {
		return nil, errors.WithStack(err)
	}

	return buf.Bytes(), nil
}

type stat struct {
	Prefix string
	Count  int
}

type statsByCount []stat

func (s statsByCount) Len() int {
	return len(s)
}
func (s statsByCount) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}
func (s statsByCount) Less(i, j int) bool {
	if s[i].Count != s[j].Count {
		return s[i].Count < s[j].Count
	} else {
		return s[i].Prefix < s[j].Prefix
	}
}

type serviceStats struct {
	IamPrefix      string
	ActionApiPairs int
	ActionlessApis int
	ApilessActions int
}

type serviceStatsByCount []serviceStats

func (s serviceStatsByCount) Len() int {
	return len(s)
}
func (s serviceStatsByCount) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}
func (s serviceStatsByCount) Less(i, j int) bool {
	if s[i].ActionApiPairs != s[j].ActionApiPairs {
		return s[i].ActionApiPairs < s[j].ActionApiPairs
	} else if s[i].ActionlessApis != s[j].ActionlessApis {
		return s[i].ActionlessApis < s[j].ActionlessApis
	} else if s[i].ApilessActions != s[j].ApilessActions {
		return s[i].ApilessActions < s[j].ApilessActions
	} else {
		return s[i].IamPrefix < s[j].IamPrefix
	}
}
