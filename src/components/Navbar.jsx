import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const isProfile = location.pathname === '/'

  const title = isProfile ? 'Profile' : 'Dashboard'

  const handleTitleClick = () => {
    navigate(isProfile ? '/dashboard' : '/')
  }

  return (
    <nav className="navbar">
      <h2 className="nav-title" onClick={handleTitleClick}>
        {title}
      </h2>

      <div className="nav-links">
        <Link to="/">Profile</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  )
}

export default Navbar
