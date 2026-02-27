import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(GlobalContext);

  return (
    <div style={{
      padding: "20px",
      backgroundColor: theme === "light" ? "#eee" : "#333",
      color: theme === "light" ? "#000" : "#fff"
    }}>
      <h2>Navbar</h2>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Navbar;
