import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">

      <div>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
          About
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
          Contact
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar