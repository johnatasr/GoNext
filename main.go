package main

import (
	"fmt"
	"net/http"
	"sync"

	"github.com/gobuffalo/packr/v2"
	"github.com/gorilla/websocket"

	"johnatasr/gonext/api/controller"
)

func main() {
	// Initialize packr for embedded assets
	box := packr.New("gonext", "assets", "./frontend/build")

	// Serve the static frontend files
	http.Handle("/", http.FileServer(box))

	http.HandleFunc("/ws", WebSocketHandler)

	go handleMessages()

	fmt.Println("Server is running on :8080")
	http.ListenAndServe(":8080", nil)
}
