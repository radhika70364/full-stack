import { Card, CardContent, Typography, Button, Avatar, Box } from '@mui/material';
import './App.css';

function App() {
  return (
    <Box className="container">
      <Card className="profile-card">
        <CardContent>
          <Avatar className="profile-avatar">RS</Avatar>

          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Radhika Singla
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Full Stack Developer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            B.tech CSE AI&ML
          </Typography>
          <Typography variant="body2" color="text.secondary">
            2023 - 2027
          </Typography>

          <Button 
            className="profile-button" 
            variant="contained" 
            fullWidth
          >
            View Profile
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default App;