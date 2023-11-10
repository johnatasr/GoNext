package main

import (
	"fmt"
	"net/http"
	"sync"

	"github.com/gobuffalo/packr/v2"
	"github.com/gorilla/websocket"

	"github.com/johnatasr/gonext/api/controller"
)

func main() {
	// box := packr.New("gonext", "assets", "./frontend/build")

	// http.Handle("/", http.FileServer(box))

	http.HandleFunc("/ws", controller.WebSocketHandler)

	go controller.handleMessages()

	fmt.Println("Server is running on :8080")
	http.ListenAndServe(":8080", nil)
}
