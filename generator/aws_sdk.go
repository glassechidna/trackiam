package generator

import (
	"archive/zip"
	"bytes"
	"encoding/json"
	"fmt"
	"github.com/pkg/errors"
	"io/ioutil"
	"net/http"
	"regexp"
)

func apiDocs() ([]*apiDoc, error) {
	output := []*apiDoc{}

	resp, err := http.Get("https://github.com/aws/aws-sdk-go/archive/main.zip")
	if err != nil {
		return nil, errors.WithStack(err)
	}

	zipBody, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, errors.WithStack(err)
	}

	zr, err := zip.NewReader(bytes.NewReader(zipBody), int64(len(zipBody)))
	if err != nil {
		return nil, errors.WithStack(err)
	}

	apiRegex := regexp.MustCompile(`.*models/apis/(.+)/(.+)/api-2.json`)

	apiFiles := []*zip.File{}
	for _, file := range zr.File {
		if apiRegex.MatchString(file.Name) {
			apiFiles = append(apiFiles, file)
		}
	}

	for _, file := range apiFiles {
		reader, err := file.Open()
		if err != nil {
			return nil, errors.WithStack(err)
		}

		bytes, err := ioutil.ReadAll(reader)
		if err != nil {
			return nil, errors.WithStack(err)
		}

		doc := apiDoc{}
		err = json.Unmarshal(bytes, &doc)
		if err != nil {
			return nil, errors.WithStack(err)
		}

		guess := doc.Metadata.SigningName
		if guess == "" {
			guess = doc.Metadata.EndpointPrefix
		}
		//fmt.Println(guess)

		output = append(output, &doc)
	}

	return output, nil
}

func apis(apiDocs []*apiDoc, acts *actions) error {
	for _, api := range apiDocs {
		iamPrefix := api.iamPrefix()
		fmt.Println(iamPrefix)
		for name, _ := range api.Operations {
			act := acts.get(iamPrefix, name)
			if act == nil {
				act = &action{
					IamPrefix: iamPrefix,
					Name:      name,
				}
				*acts = append(*acts, act)
			}

			act.Endpoint = api.Metadata.EndpointPrefix
			act.Signing = api.Metadata.SigningName
			act.HasApi = true
		}
	}

	return nil
}

type operation struct {
	Name string `json:"name"`
}

type apiDoc struct {
	Metadata struct {
		APIVersion          string `json:"apiVersion"`
		EndpointPrefix      string `json:"endpointPrefix"`
		SigningName         string `json:"signingName"`
		Protocol            string `json:"protocol"`
		ServiceAbbreviation string `json:"serviceAbbreviation"`
		ServiceFullName     string `json:"serviceFullName"`
		ServiceID           string `json:"serviceId"`
		SignatureVersion    string `json:"signatureVersion"`
		UID                 string `json:"uid"`
	} `json:"metadata"`
	Operations map[string]operation `json:"operations"`
}

func (a *apiDoc) iamPrefix() string {
	p := a.Metadata.SigningName
	if p == "" {
		p = a.Metadata.EndpointPrefix
	}

	if lookup, found := mapApi[p]; found {
		return lookup
	} else {
		return p
	}
}

var mapApi = map[string]string{
	"AWSMobileHubService": "mobilehub",
	"iot-jobs-data":       "iot",
	"iotdata":             "iot",
	"ioteventsdata":       "iotevents",
	"monitoring":          "cloudwatch",
	"mturk-requester":     "mechanicalturk",
	"tagging":             "tag",
	//"marketplacecommerceanalytics": "",
}
