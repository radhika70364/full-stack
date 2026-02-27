import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Home = () => {
  const { user, setUser, theme } = useContext(GlobalContext);
  const [inputName, setInputName] = useState("");

  const handleChange = (e) => {
    setInputName(e.target.value);
  };

  const handleSubmit = () => {
    if (inputName.trim() !== "") {
      setUser(inputName);
      setInputName("");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h2>Home</h2>
      <p>Welcome, {user}</p>

      <input
        type="text"
        placeholder="Enter your name"
        value={inputName}
        onChange={handleChange}
        style={{ padding: "5px", marginRight: "10px" }}
      />

      <button onClick={handleSubmit}>
        Update Name
      </button>
    </div>
  );
};

export default Home;
