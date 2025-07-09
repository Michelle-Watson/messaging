// import ws from "ws";
import { WebSocketServer } from "ws";

// WebSocket Server
const server = new WebSocketServer({ port: "3000" });

server.on("connection", (socket) => {
  //   console.log("New client connected");
  socket.on("message", (message) => {
    const b = Buffer.from(message);
    console.log("Received:", b.toString()); // Convert buffer to string
    socket.send(`${message}`);
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server running on ws://localhost:3000");

/*
// For Express REST API
import express from "express";
import cors from "cors";
import "dotenv/config";
*/
