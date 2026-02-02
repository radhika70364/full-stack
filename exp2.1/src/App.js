import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import profilePic from './me.jpeg';
function App()  {
  const student = {
    name: "Radhika Singla",
    id: "23BAI70364",
    major: "Computer Science",
    bio: "Passionate about Web development",
    profilePic: profilePic,
  };

  const [isEnrolled, setIsEnrolled] = useState(false);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          
          {/* Bootstrap Card */}
          <div className="card shadow-sm text-center p-3">
            
            {/* Profile Image with 'profile-img' class for keyframes */}
            <div className="mt-3">
              <img 
                src={student.profilePic} 
                alt="Profile" 
                className="profile-img border border-primary"
              />
            </div>

            <div className="card-body">
              <h3 className="card-title mt-2">{student.name}</h3>
              <p className="text-muted">{student.major}</p>
              <p className="card-text">{student.bio}</p>
              
              <hr />

              {/* Toggle Button */}
              <button 
                className={`btn ${isEnrolled ? 'btn-success' : 'btn-primary'} w-100`}
                onClick={() => setIsEnrolled(!isEnrolled)}
              >
                {isEnrolled ? 'Successfully Enrolled' : 'Click to Enroll'}
              </button>
              
              <p className="mt-2 small">Student ID: {student.id}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;