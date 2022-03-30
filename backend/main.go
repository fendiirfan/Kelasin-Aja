package main

import (
	"log"
	"net/http"
)

func main(){
	mux := http.NewServeMux()

	mux.HandleFunc("/", homehandler)
	mux.HandleFunc("/helloworld",hellohandler)
	log.Println("Starting")

	err := http.ListenAndServe(":8080",mux)
	if (err!=nil){
		log.Println(err)
	}
}

func homehandler(w http.ResponseWriter, r *http.Request){
	if (r.URL.Path != "/"){
		http.NotFound(w, r)
		return
	}
	w.Write([]byte("Home"))
}

func hellohandler(w http.ResponseWriter,r *http.Request){
	w.Write([]byte("Hello World"))
}