package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/helloworld", helloWorld)

	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatalln(err)
		return
	}
}

func helloWorld(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "Hello world!")
}
