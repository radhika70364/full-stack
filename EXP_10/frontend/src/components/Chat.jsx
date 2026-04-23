import { useState, useEffect, useRef } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client/dist/sockjs";

function Chat({ username, room, onLeave }) {
  const roomId = room.replace(/\s+/g, '-').toLowerCase();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [connected, setConnected] = useState(false);
  const clientRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    // Connect to WebSocket using STOMP over SockJS
    const client = new Client({
      webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
      reconnectDelay: 5000,
      onConnect: () => {
        setConnected(true);
        // Subscribe to incoming messages
        client.subscribe(`/topic/${roomId}`, (frame) => {
          const msg = JSON.parse(frame.body);
          setMessages((prev) => [...prev, msg]);
        });
        
        // Announce user joined (optional, using system-like message)
        client.publish({
          destination: `/app/chat/${roomId}`,
          body: JSON.stringify({ sender: "System", content: `${username} joined the chat.` }),
        });
      },
      onDisconnect: () => {
        setConnected(false);
      },
      onStompError: (frame) => {
        console.error("Broker reported error: " + frame.headers["message"]);
        console.error("Additional details: " + frame.body);
      },
    });

    clientRef.current = client;
    client.activate();

    return () => {
      if (clientRef.current && connected) {
        clientRef.current.publish({
          destination: `/app/chat/${roomId}`,
          body: JSON.stringify({ sender: "System", content: `${username} left the chat.` }),
        });
      }
      client.deactivate();
    };
  }, [username]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() && clientRef.current && connected) {
      clientRef.current.publish({
        destination: `/app/chat/${roomId}`,
        body: JSON.stringify({ sender: username, content: inputMessage }),
      });
      setInputMessage("");
    }
  };

  return (
    <div className="chatContainer">
      <div className="chatHeader">
        <div className="chatTitle">
          <h3>{room}</h3>
          <span className={`statusIndicator ${connected ? "connected" : "disconnected"}`}>
            {connected ? "Connected" : "Connecting..."}
          </span>
        </div>
        <button className="leaveBtn" onClick={onLeave}>Leave</button>
      </div>

      <div className="messagesArea">
        {messages.map((msg, index) => {
          const isOwn = msg.sender === username;
          const isSystem = msg.sender === "System";

          if (isSystem) {
            return (
              <div key={index} className="message system">
                {msg.content}
              </div>
            );
          }

          return (
            <div key={index} className={`messageWrapper ${isOwn ? "own" : "other"}`}>
              {!isOwn && <div className="messageSender">{msg.sender}</div>}
              <div className="messageContent">{msg.content}</div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      <form className="messageForm" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          disabled={!connected}
        />
        <button type="submit" disabled={!connected || !inputMessage.trim()}>
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
