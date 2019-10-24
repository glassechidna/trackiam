package main

import (
	"fmt"
	"github.com/glassechidna/trackiam/generator"
	"os"
)

func main() {
	if len(os.Args) == 1 {
		usage()
	}

	switch os.Args[2] {
	case "generate":
		generator.Generate()
	case "publish":
		generator.Publish()
	default:
		usage()
	}
}

func usage() {
	fmt.Printf("usage: %s generate|publish\n", os.Args[0])
	os.Exit(1)
}
