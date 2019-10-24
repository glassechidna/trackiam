package generator

import (
	"bytes"
	"context"
	"fmt"
	"github.com/pkg/errors"
	"io/ioutil"
	"sort"
)

func Generate() {
	byt, err := policiesJs()
	if err != nil {
		die(err)
	}

	doc, err := docFromJson(byt)
	if err != nil {
		die(err)
	}

	acts := policiesDocToActions(doc)

	aDocs, err := apiDocs()
	if err != nil {
		die(err)
	}

	err = apis(aDocs, &acts)
	if err != nil {
		die(err)
	}

	sort.Sort(&acts)

	byIamPrefix := acts.groupBy(func(act *action) string {
		return act.IamPrefix
	})

	for iamPrefix, actz := range byIamPrefix {
		buf := &bytes.Buffer{}

		gg := actz.groupBy(func(act *action) string {
			return fmt.Sprintf("%v%v", act.HasApi, act.HasAction)
		})

		printActions := func(actz actions) {
			for _, act := range actz {
				fmt.Fprintf(buf, "  - Name: %s:%s\n", act.IamPrefix, act.Name)
			}
		}

		hasApiAndAction := gg["truetrue"]
		hasActionWithoutApi := gg["falsetrue"]
		hasApiWithoutAction := gg["truefalse"]

		buf.WriteString("Actions:\n")
		printActions(hasApiAndAction)

		if len(hasActionWithoutApi) > 0 {
			buf.WriteString("\n  # actions with no corresponding API\n")
			printActions(hasActionWithoutApi)
		}

		if len(hasApiWithoutAction) > 0 {
			buf.WriteString("\n  # APIs without an IAM action\n")
			printActions(hasApiWithoutAction)
		}

		err = ioutil.WriteFile(fmt.Sprintf("services/%s.yml", iamPrefix), buf.Bytes(), 0644)
		if err != nil {
			die(errors.WithStack(err))
		}
	}

	files, err := generateManagedPolicies(context.Background())
	if err != nil {
		die(err)
	}

	printed, err := printStats(acts, files)
	if err != nil {
		die(errors.WithStack(err))
	}

	err = ioutil.WriteFile("README.md", printed, 0644)
	if err != nil {
		die(errors.WithStack(err))
	}
}

func die(err error) {
	panic(fmt.Sprintf("%+v", err))
}
