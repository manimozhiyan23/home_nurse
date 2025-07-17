import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!role) {
      alert('Please select a role');
      return;
    }

    const loginUrl = `http://localhost:8080/api/${role}/login`;

    try {
      const response = await axios.post(loginUrl, {
        username,
        password,
      });

      alert(response.data);
      localStorage.setItem('username', username);

      if (role === 'nurse') {
        navigate('/nurse-dashboard');
      } else {
        navigate('/patient-dashboard');
      }
    } catch (err) {
      alert('Login failed: ' + (err.response?.data || err.message));
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Role:
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">-- Select Role --</option>
            <option value="patient">Patient</option>
            <option value="nurse">Nurse</option>
          </select>
        </label>

        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>


<label>
  Password:
  <div className="password-wrapper">
    <input
      type={showPassword ? 'text' : 'password'}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <span
      onClick={() => setShowPassword(!showPassword)}
      className="toggle-password"
    >
      {showPassword ? '🙈' : '👁️'}
    </span>
  </div>
</label>

       

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
