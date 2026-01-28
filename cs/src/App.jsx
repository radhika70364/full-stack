import { useState } from "react";
import { Button, TextField, Card, CardContent } from "@mui/material";

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

function App() {
  const [joinedPlans, setJoinedPlans] = useState([]);

  const joinPlan = (plan) => {
    if (!joinedPlans.includes(plan)) {
      setJoinedPlans([...joinedPlans, plan]);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-black px-4">
        <span className="navbar-brand">FitZone Gym</span>
      </nav>

      {/* Login Section */}
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

      {/* Membership Plans */}
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

      {/* Joined Memberships */}
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

      {/* Feedback */}
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

export default App;
