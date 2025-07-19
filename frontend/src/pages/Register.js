import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Register.css';

function Register() {
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (role === 'nurse') {
        await axios.post('http://localhost:8080/api/nurse/register', formData);
        alert('Nurse registered successfully!');
      } else {
        await axios.post('http://localhost:8080/api/register', {
          username: formData.username,
          password: formData.password,
          role: 'patient',
        });
        alert('Patient registered successfully!');
      }
    } catch (err) {
      alert("Registration failed: " + (err.response?.data || err.message));
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register as</h2>
        <select onChange={(e) => setRole(e.target.value)} value={role} required>
          <option value="">-- Choose Role --</option>
          <option value="nurse">Nurse</option>
          <option value="patient">Patient</option>
        </select>

        {role && (
          <form onSubmit={handleSubmit}>
            <input name="username" placeholder="Username" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Register</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
