import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Register() {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/register", {
        username,
        password,
        role
      });
      alert(res.data);
      // ✅ After success, redirect to login
      navigate("/login");
    } catch (err) {
      alert("Registration failed: " + (err.response?.data || err.message));
    }
  };

  return (
    <div className="login-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="">-- Select Role --</option>
            <option value="patient">Patient</option>
            <option value="nurse">Nurse</option>
          </select>
        </label>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
