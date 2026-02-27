import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (value) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|org|net|edu|gov|[a-z]{2})$/;
    return emailPattern.test(value);
  };

  const validatePassword = (value) => {
    const passwordPattern =
      /^[A-Z](?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{5,}$/;
    return passwordPattern.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("Enter valid email (.com, .in or country domain)");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!validatePassword(password)) {
      setPasswordError(
        "Password must start with capital letter, include number, special character & min 5 chars"
      );
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      alert("Login Successful!");
    }
  };

  return (
    <div className="container">
      <h2>Login Validation Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email ID</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error">{passwordError}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;