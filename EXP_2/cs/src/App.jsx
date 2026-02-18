import { useState } from "react";
import { Button, TextField, Card, CardContent } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

const membershipPlans = [
  {
    id: 1,
    title: "Basic Fitness",
    description: "Access to gym equipment & cardio zone",
  },
  {
    id: 2,
    title: "Pro Training",
    description: "Personal trainer + strength training",
  },
  {
    id: 3,
    title: "Elite Wellness",
    description: "Yoga, Zumba & nutrition guidance",
  },
];

function Home() {
  const [joinedPlans, setJoinedPlans] = useState([]);

  const joinPlan = (plan) => {
    if (!joinedPlans.includes(plan)) {
      setJoinedPlans([...joinedPlans, plan]);
    }
  };

  return (
    <div>
      <div className="container mt-4">
        <h2 className="mb-3">Member Login</h2>
        <TextField
          label="Member Name"
          variant="outlined"
          fullWidth
        />
        <Button className="mt-3" variant="contained" color="error">
          Login
        </Button>
      </div>

      <div className="container mt-5">
        <h2>Membership Plans</h2>
        <div className="row">
          {membershipPlans.map((plan) => (
            <div className="col-md-4 mt-3" key={plan.id}>
              <Card className="gym-card">
                <CardContent>
                  <h5>{plan.title}</h5>
                  <p>{plan.description}</p>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => joinPlan(plan.title)}
                  >
                    Join Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-5">
        <h2>My Memberships</h2>
        <ul className="list-group">
          {joinedPlans.length === 0 && (
            <li className="list-group-item">
              No active memberships yet
            </li>
          )}
          {joinedPlans.map((plan, index) => (
            <li key={index} className="list-group-item">
              {plan}
            </li>
          ))}
        </ul>
      </div>

      <div className="container mt-5 mb-5">
        <h2>Workout Feedback</h2>
        <TextField
          label="Share your experience"
          multiline
          rows={3}
          fullWidth
        />
        <Button className="mt-3" variant="contained" color="success">
          Submit Feedback
        </Button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-black px-4">
        <span className="navbar-brand me-3">FitZone Gym</span>
        <div className="d-flex gap-2">
          <Link className="btn btn-sm btn-outline-light" to="/">Home</Link>
          <Link className="btn btn-sm btn-outline-light" to="/profile">Profile</Link>
          <Link className="btn btn-sm btn-outline-light" to="/dashboard">Dashboard</Link>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
