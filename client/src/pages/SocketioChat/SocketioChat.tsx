import { useState, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client"; // Import Socket.IO client
import "../Chat/Chat.scss";

const VITE_API_SOCKET =
  import.meta.env.VITE_API_SOCKET || "ws://localhost:3000";

export default function SocketioChat() {
  // State for messages and input
  const [messages, setMessages] = useState<string[]>([]); // Stores chat messages
  const [inputValue, setInputValue] = useState(""); // Stores input field text

  // Change type from WebSocket to Socket (from socket.io-client)
  const socketRef = useRef<Socket | null>(null); // Holds Socket.io instance
  const messagesEndRef = useRef<HTMLDivElement>(null); // Reference to auto-scroll to bottom

  useEffect(() => {
    // Initialize Socket.IO connection
    socketRef.current = io(VITE_API_SOCKET, {
      transports: ["websocket"], // Force WebSocket transport only
      autoConnect: true, // Automatically connect (default)
      reconnection: true, // Automatically reconnect (default)
    });

    // Set up event listeners
    socketRef.current.on("connect", () => {
      console.log("Connected to Socket.IO server");
    });

    // Listen for 'message' events from server
    socketRef.current.on("message", (message: string) => {
      setMessages((prev) => [...prev, message]);
    });

    socketRef.current.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    socketRef.current.on("connect_error", (err) => {
      console.error("Connection error:", err);
    });

    // Cleanup function
    return () => {
      if (socketRef.current) {
        socketRef.current.off("connect");
        socketRef.current.off("message");
        socketRef.current.off("disconnect");
        socketRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // if input has text & Socket is connected
    if (inputValue.trim() && socketRef.current?.connected) {
      // readyState -> connected
      socketRef.current.emit("message", inputValue); // send -> emit
      setInputValue(""); // clear input
    }
  };

  return (
    <div className="chat-container">
      <p>Socketio Chat</p>
      <ul className="messages-list">
        {messages.map((message, index) => (
          <li key={index}>{message}</li> // Render all messages
        ))}
        <div ref={messagesEndRef} /> {/* Invisible div for scrolling */}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update state on typing
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
