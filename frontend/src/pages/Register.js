import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Register.css';

function Register() {
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
    preferredLocations: '',
  });

  const [resume, setResume] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    if (resume) data.append('resume', resume);

    try {
      const res = await axios.post('http://localhost:8080/api/nurse/register', data);
      alert(res.data);
    } catch (err) {
      alert("Registration failed: " + (err.response?.data || err.message));
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
      <input type="text" name="gender" placeholder="Gender" onChange={handleChange} required />
      <input type="date" name="dob" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
      <input type="number" name="experienceYears" placeholder="Experience Years" onChange={handleChange} required />
      <input type="text" name="specialization" placeholder="Specialization" onChange={handleChange} required />
      <input type="text" name="qualification" placeholder="Qualification" onChange={handleChange} required />
      <input type="text" name="licenseNo" placeholder="License No" onChange={handleChange} required />
      <input type="text" name="availability" placeholder="Availability" onChange={handleChange} />
      <input type="text" name="preferredLocations" placeholder="Preferred Locations" onChange={handleChange} />
      <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleResumeChange} required />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
