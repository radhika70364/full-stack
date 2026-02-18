import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const isProfile = location.pathname === '/'
  const title = isProfile ? 'Profile' : 'Dashboard'

  return (
    <nav className="navbar">
      <h2 onClick={() => navigate(isProfile ? '/dashboard' : '/')}>
        {title}
      </h2>

      <div>
        <Link to="/">Profile</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  )
}

export default Navbar
