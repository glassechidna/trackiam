package generator

import (
	"bytes"
	"encoding/json"
	"github.com/pkg/errors"
	"io/ioutil"
	"net/http"
)

type policiesDoc struct {
	ServiceMap map[string]serviceDocument `json:"serviceMap"`
}

type serviceDocument struct {
	StringPrefix string   `json:"StringPrefix"`
	Actions      []string `json:"Actions"`
}

func policiesJs() ([]byte, error) {
	url := "https://awspolicygen.s3.dualstack.us-east-1.amazonaws.com/js/policies.js"
	resp, err := http.Get(url)
	if err != nil {
		return nil, errors.WithStack(err)
	}

	bytes, err := ioutil.ReadAll(resp.Body)
	return bytes, errors.WithStack(err)
}

func docFromJson(input []byte) (*policiesDoc, error) {
	index := bytes.IndexAny(input, "{")
	input = input[index:]

	doc := policiesDoc{}
	err := json.Unmarshal(input, &doc)
	return &doc, errors.WithStack(err)
}

func policiesDocToActions(doc *policiesDoc) actions {
	a := actions{}

	for _, service := range doc.ServiceMap {
		for _, name := range service.Actions {
			if a.get(service.StringPrefix, name) == nil {
				a = append(a, &action{
					IamPrefix: service.StringPrefix,
					Name:      name,
					HasAction: true,
				})
			}
		}
	}

	return a
}
