import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme}`}>
      <div className="content">
        <h1>Experiment-3: Theme Toggle SPA</h1>

        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
}

export default App;
