import React, { useState } from 'react';
import axios from 'axios';
import '../styles/BookNurse.css'; // Optional: use your existing styles

function BookNurse() {
  const [formData, setFormData] = useState({
    patientName: '',
    patientContact: '',
    address: '',
    requiredService: '',
    preferredDate: '',
    preferredTime: '',
    nurseGenderPreference: '',
    additionalNotes: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/bookings', formData);
      alert('Booking submitted successfully!');
      setFormData({
        patientName: '',
        patientContact: '',
        address: '',
        requiredService: '',
        preferredDate: '',
        preferredTime: '',
        nurseGenderPreference: '',
        additionalNotes: ''
      });
    } catch (error) {
      alert('Booking failed. Check your backend or internet connection.');
      console.error(error);
    }
  };

  return (
    <div className="book-nurse-container">
      <h2>Book a Nurse</h2>
      <form onSubmit={handleSubmit} className="book-nurse-form">
  <div className="form-grid">
    <div className="form-group">
      <input name="patientName" placeholder="Your Name" value={formData.patientName} onChange={handleChange} required />
      <input name="patientContact" placeholder="Contact Number" value={formData.patientContact} onChange={handleChange} required />
      <input name="requiredService" placeholder="Required Service" value={formData.requiredService} onChange={handleChange} required />
      <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} required />
    </div>
    <div className="form-group">
      <textarea name="address" placeholder="Full Address" value={formData.address} onChange={handleChange} required />
      <input type="time" name="preferredTime" value={formData.preferredTime} onChange={handleChange} required />
      <select name="nurseGenderPreference" value={formData.nurseGenderPreference} onChange={handleChange}>
        <option value="">Gender Preference</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <textarea name="additionalNotes" placeholder="Additional Notes" value={formData.additionalNotes} onChange={handleChange} />
    </div>
  </div>

  <button type="submit">Submit Booking</button>
</form>

    </div>
  );
}

export default BookNurse;
