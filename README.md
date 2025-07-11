# Learning WebSocket & Socket.io

I was asked to 'design a simple messaging app' for a systems design interview. I was familiar with WebSocket but have mostly used REST APIs. This project is to learn more about sockets through a project.

This repo will have multiple servers to practice using sockets with an Express Serer and Kotlin + Spring Boot.

## Run project

1. Duplicate the `.env.sample`, rename to `.env`, and ensure the PORT in the [.env in the client folder](./client/) matches the PORT in the server folder you are running

   - e.g., `VITE_API_WS=ws://localhost:3000` in the client `.env` should match the PORT in [index.js](./server_node_ws/index.js) if you are planning on running this specific server (websocket)

2. In the terminal, navigate to the [client](./client/) folder, type `npm i` and `npm run dev`
3. There is a header where you can select the server you want to test out

## If running WebSocket:

This follows along this video loosely: https://www.youtube.com/watch?v=J8xReLuBNPY

1. In the terminal, navigate to the [server_ws](./server_node_ws/) folder, type `npm i` and `npm run dev`.
2. On the client, click on `WebSocket Chat`

## If running Socket.io:

This follows along this video loosely: https://www.youtube.com/watch?v=SGQM7PU9hzI

1. In the terminal, navigate to the [server_socketio](./server_socketio/) folder, type `npm i` and `npm run dev`
2. On the client side, click on `Socket.IO Chat`

## If running Express Socket.io:

This follows along this video loosely: https://www.youtube.com/watch?v=SGQM7PU9hzI

1. In the terminal, navigate to the [server_express_socketio](./server_express_socketio/) folder, type `npm i` and `npm run dev`
2. On the client side, click on `Socket.IO Chat`
