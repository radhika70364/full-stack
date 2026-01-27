import React from 'react';
import './App.css';
import { Button, Card, CardContent, Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      {/* BOOTSTRAP: Used for the dark background and centered text */}
      <header className="bg-dark text-white text-center py-5">
        <h1>FLEX GYM</h1>
        <p>Your Fitness Journey Starts Here</p>
      </header>

      {/* BOOTSTRAP: Used for the 3-column grid layout */}
      <div className="container mt-5">
        <div className="row">
          
          {/* Card 1 */}
          <div className="col-md-4 mb-3">
            {/* MATERIAL UI: Used for the professional-looking Card */}
            <Card variant="outlined">
              <CardContent className="text-center">
                <Typography variant="h5" fw-bold>Basic Plan</Typography>
                <Typography color="white">$10/mo</Typography>
                <hr />
                <Button variant="contained" color="primary" fullWidth>
                  Select
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-3">
            <Card variant="outlined" sx={{ borderColor: 'primary.main', borderWeight: 2 }}>
              <CardContent className="text-center">
                <Typography variant="h5">Pro Plan</Typography>
                <Typography color="white">$25/mo</Typography>
                <hr />
                <Button variant="contained" color="primary" fullWidth>
                  Select
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-3">
            <Card variant="outlined">
              <CardContent className="text-center">
                <Typography variant="h5">Elite Plan</Typography>
                <Typography color="white">$50/mo</Typography>
                <hr />
                <Button variant="contained" color="primary" fullWidth>
                  Select
                </Button>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;