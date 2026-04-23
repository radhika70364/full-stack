import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Chat from "./components/Chat";

function ChatLauncher() {
  const [username, setUsername] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const [room, setRoom] = useState("General Room");

  const handleJoin = () => {
    if (!username.trim()) {
      alert("Please enter your name");
      return;
    }
    setIsJoined(true);
  };

  const handleLeave = () => {
    setIsJoined(false);
    setUsername("");
  };

  return (
    <>
      <Header />

      <div className="container" style={{ marginTop: "60px" }}>
        {!isJoined ? (
          <div className="card">
            {/* Avatar */}
            <div className="avatar">👤</div>

            <h1>Enter the Conversation</h1>
            <p className="subtitle">Join a room and start chatting instantly</p>

            {/* Name Input */}
            <div className="inputBox">
              <span>@</span>
              <input
                type="text"
                placeholder="Your nickname..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleJoin()}
              />
            </div>

            {/* Room Select */}
            <select className="roomSelect" value={room} onChange={(e) => setRoom(e.target.value)}>
              <option value="General Room">General Room</option>
              <option value="Tech Talk">Tech Talk</option>
              <option value="Random Chat">Random Chat</option>
            </select>

            {/* Button */}
            <button onClick={handleJoin}>
              Start Chatting 🚀
            </button>

            <p className="note">
              Multi-user real-time chat enabled
            </p>
          </div>
        ) : (
          <Chat username={username} room={room} onLeave={handleLeave} />
        )}
      </div>
    </>
  );
}

export default ChatLauncher;