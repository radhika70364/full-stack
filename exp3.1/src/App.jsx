import { BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import Profile from './pages/profile.jsx'
import Dashboard from './pages/dashboard.jsx'

function App() {
  return (
    <>
    <BrowserRouter>
      {/* Navbar */}
      <nav style={navStyle}>
        <Link to="/">Profile</Link>|{' '}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </>

  )
}

const navStyle = {
  display: 'flex',
  gap: '20px',
  padding: '15px',
  backgroundColor: '#222'
}


export default App
