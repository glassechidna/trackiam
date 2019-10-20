package generator

import (
	"fmt"
	"strings"
)

type action struct {
	IamPrefix string
	Name      string
	Endpoint  string
	Signing   string
	HasApi    bool
	HasAction bool
}

type actions []*action

func (s actions) get(iamPrefix, name string) *action {
	for _, a := range s {
		if a.IamPrefix == iamPrefix && strings.ToLower(a.Name) == strings.ToLower(name) {
			return a
		}
	}

	return nil
}

func (s actions) groupBy(grouper func(act *action) string) map[string]actions {
	output := map[string]actions{}

	for _, act := range s {
		key := grouper(act)
		output[key] = append(output[key], act)
	}

	return output
}

func (s *actions) Len() int {
	return len(*s)
}

func (s *actions) Swap(i, j int) {
	(*s)[i], (*s)[j] = (*s)[j], (*s)[i]
}

func (s *actions) Less(i, j int) bool {
	fi := fmt.Sprintf("%s:%s", (*s)[i].IamPrefix, (*s)[i].Name)
	fj := fmt.Sprintf("%s:%s", (*s)[j].IamPrefix, (*s)[j].Name)
	return fi < fj
}
