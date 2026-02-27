import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./index.css";

function App() {
  const { theme } = useContext(GlobalContext);

  return (
    <div className={`app-container ${theme}`}>
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
