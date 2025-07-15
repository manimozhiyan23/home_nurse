// src/pages/NurseDashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NurseDashboard.css'; // 👈 Import CSS

function NurseDashboard() {
  return (
    <div className="nurse-dashboard">
      <h2>Nurse Dashboard</h2>
      <p>Select a section:</p>
      <ul>
        <li><Link to="/nurse/home">Home</Link></li>
        <li><Link to="/nurse/patients">My Patients</Link></li>
        <li><Link to="/nurse/pending">Pending Bookings</Link></li>
        <li><Link to="/nurse/scheduling">My Scheduling</Link></li>
        <li><Link to="/nurse/revisiting">Revisiting</Link></li>
      </ul>
    </div>
  );
}

export default NurseDashboard;
