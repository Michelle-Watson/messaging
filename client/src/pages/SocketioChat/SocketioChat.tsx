import { useState, useEffect, useRef } from "react";
import "../Chat/Chat.scss";

const VITE_API_WS = import.meta.env.VITE_API_WS || "ws://localhost:3000";

export default function SocketioChat() {
  // State for messages and input
  const [messages, setMessages] = useState<string[]>([]); // Stores chat messages
  const [inputValue, setInputValue] = useState(""); // Stores input field text

  // socket would reset to undefined on every re-render w/o useRef
  const socketRef = useRef<WebSocket | null>(null); // Holds WebSocket instance
  const messagesEndRef = useRef<HTMLDivElement>(null); // Reference to auto-scroll to bottom

  useEffect(() => {
    // 1. Create WebSocket connection
    socketRef.current = new WebSocket(VITE_API_WS);

    // 2. Set up event listeners
    socketRef.current.onopen = () => console.log("Connected");
    socketRef.current.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]); // Add new message to list
    };
    socketRef.current.onerror = (error) => console.error("Error:", error);
    socketRef.current.onclose = () => console.log("Disconnected");

    // 3. Cleanup: Close connection when component unmounts
    return () => {
      if (socketRef.current) socketRef.current.close();
    };
  }, []);

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // if input has text & WebSocket is open
    if (inputValue.trim() && socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(inputValue); // send
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
