import { Routes, Route, NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";

// delay helper
const delay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Lazy components with 1 sec delay
const Home = lazy(() =>
  Promise.all([
    import("./pages/Home"),
    delay(1000),
  ]).then(([moduleExports]) => moduleExports)
);

const About = lazy(() =>
  Promise.all([
    import("./pages/About"),
    delay(1000),
  ]).then(([moduleExports]) => moduleExports)
);

const Contact = lazy(() =>
  Promise.all([
    import("./pages/Contact"),
    delay(1000),
  ]).then(([moduleExports]) => moduleExports)
);

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <h2>EXP 5.2</h2>
        <div className="links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>

      {/* Lazy Routes */}
      <Suspense fallback={<h2 className="loading">Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;