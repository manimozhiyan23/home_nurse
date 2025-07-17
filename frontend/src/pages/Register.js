import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Register.css';

function Register() {
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    fullName: '',
    gender: '',
    dob: '',
    email: '',
    phone: '',
    address: '',
    experienceYears: '',
    specialization: '',
    qualification: '',
    licenseNo: '',
    availability: '',
    preferredLocations: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (role === 'nurse') {
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => data.append(key, value));
        await axios.post('http://localhost:8080/api/nurse/register', data);
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
          {role === 'nurse' && (
            <>
              <input name="fullName" placeholder="Full Name" onChange={handleChange} required />
              <input name="gender" placeholder="Gender" onChange={handleChange} required />
              <input type="date" name="dob" onChange={handleChange} required />
              <input name="email" placeholder="Email" onChange={handleChange} required />
              <input name="phone" placeholder="Phone" onChange={handleChange} />
              <input name="address" placeholder="Address" onChange={handleChange} required />
              <input name="experienceYears" placeholder="Experience (Years)" onChange={handleChange} required />
              <input name="specialization" placeholder="Specialization" onChange={handleChange} required />
              <input name="qualification" placeholder="Qualification" onChange={handleChange} required />
              <input name="licenseNo" placeholder="License No" onChange={handleChange} required />
              <input name="availability" placeholder="Availability" onChange={handleChange} />
              <input name="preferredLocations" placeholder="Preferred Locations" onChange={handleChange} />
            </>
          )}
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  </div>
);


}

export default Register;
