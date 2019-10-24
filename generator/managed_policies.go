package generator

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/iam"
	"github.com/pkg/errors"
	"io/ioutil"
	"net/url"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"time"
)

func generateManagedPolicies(ctx context.Context) ([]*policyFile, error) {
	sess := session.Must(session.NewSession())
	client := iam.New(sess)

	policies := []*iam.Policy{}

	err := client.ListPoliciesPagesWithContext(ctx, &iam.ListPoliciesInput{}, func(page *iam.ListPoliciesOutput, lastPage bool) bool {
		policies = append(policies, page.Policies...)
		return !lastPage
	})
	if err != nil {
		return nil, errors.WithStack(err)
	}

	files := []*policyFile{}

	glob, err := filepath.Glob("policies/*.json")
	if err != nil {
		return nil, errors.WithStack(err)
	}

	for _, path := range glob {
		err = os.Remove(path)
		if err != nil {
			return nil, errors.WithStack(err)
		}
	}

	for idx, policy := range policies {
		if !strings.HasPrefix(*policy.Arn, "arn:aws:iam::aws:policy/") {
			continue
		}

		fmt.Printf("policy %d/%d: %s\n", idx, len(policies), *policy.PolicyName)

		version, err := client.GetPolicyVersionWithContext(ctx, &iam.GetPolicyVersionInput{
			PolicyArn: policy.Arn,
			VersionId: policy.DefaultVersionId,
		})
		if err != nil {
			return nil, errors.WithStack(err)
		}

		policyJson, err := json.Marshal(policy)
		if err != nil {
			return nil, errors.WithStack(err)
		}

		file := policyFile{}
		err = json.Unmarshal(policyJson, &file)
		if err != nil {
			return nil, errors.WithStack(err)
		}

		pv := version.PolicyVersion
		escaped, err := url.QueryUnescape(*pv.Document)
		if err != nil {
			return nil, errors.WithStack(err)
		}

		file.PolicyVersion = policyVersion{
			CreateDate:       *pv.CreateDate,
			IsDefaultVersion: *pv.IsDefaultVersion,
			VersionId:        *pv.VersionId,
			Document:         json.RawMessage(escaped),
		}

		totalJson, err := json.Marshal(file)
		if err != nil {
			return nil, errors.WithStack(err)
		}

		stdout := &bytes.Buffer{}
		jq := exec.CommandContext(ctx, "jq", "-S", `walk( if type == "array" then sort else . end )`)
		jq.Stdin = bytes.NewReader(totalJson)
		jq.Stderr = os.Stderr
		jq.Stdout = stdout

		err = jq.Run()
		if err != nil {
			return nil, errors.WithStack(err)
		}

		filename := fmt.Sprintf("policies/%s.json", *policy.PolicyName)
		err = ioutil.WriteFile(filename, stdout.Bytes(), 0644)
		if err != nil {
			return nil, errors.WithStack(err)
		}

		files = append(files, &file)
	}

	return files, nil
}

type policyFile struct {
	PolicyName       string        `json:"PolicyName"`
	CreateDate       time.Time     `json:"CreateDate"`
	IsAttachable     bool          `json:"IsAttachable"`
	PolicyID         string        `json:"PolicyId"`
	DefaultVersionID string        `json:"DefaultVersionId"`
	Path             string        `json:"Path"`
	Arn              string        `json:"Arn"`
	UpdateDate       time.Time     `json:"UpdateDate"`
	PolicyVersion    policyVersion `json:"PolicyVersion"`
}

type policyVersion struct {
	CreateDate       time.Time       `json:"CreateDate"`
	IsDefaultVersion bool            `json:"IsDefaultVersion"`
	VersionId        string          `json:"VersionId"`
	Document         json.RawMessage `json:"Document"`
}
