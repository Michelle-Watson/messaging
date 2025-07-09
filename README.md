# Learning WebSocket & Socket.io

I was asked to 'design a simple messaging app' for a systems design interview. I was familiar with WebSocket but have mostly used REST APIs. This project is to learn more about sockets through a project.

This repo will have multiple servers to practice using sockets with an Express Serer and Kotlin + Spring Boot.

## Run project

1. Duplicate the `.env.sample`, rename to `.env`, and ensure the PORT in the [.env in the client folder](./client/) matches the PORT in the server folder you are running

   - e.g., `VITE_API_WS=ws://localhost:3000` in the client `.env` should match the PORT in [index.js](./server_node_ws/index.js) if you are planning on running this specific server

2. In the terminal, navigate to the [client](./client/) folder, type `npm i` and `npm run dev`

## If running Express ws:

This follows along this video loosely: https://www.youtube.com/watch?v=J8xReLuBNPY

1. In the terminal, navigate to the [server_ws](./server_node_ws/) folder, type `npm i` and `npm run dev`.
2. In [Chat.tsc](./client/src/pages/Chat/Chat.tsx), uncomment the following, comment the other instances

```
// socketRef.current = new WebSocket(VITE_API_WS); // 1. Create WebSocket connection
```

## If running Express Socket.io:

This follows along this video loosely: https://www.youtube.com/watch?v=SGQM7PU9hzI

1. In the terminal, navigate to the [server_socketio](./server_socketio/) folder, type `npm i` and `npm run dev`.
2. 2. In [Chat.tsc](./client/src/pages/Chat/Chat.tsx), uncomment the following, comment the other instances

```
// socketRef.current = new WebSocket(VITE_API_WS); // 1. Create WebSocket connection
```
