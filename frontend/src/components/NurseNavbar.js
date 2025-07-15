import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NurseNavbar.css'; 

function NurseNavbar() {
  return (
    <div className="nurse-navbar">
      <h2>Nurse Dashboard</h2>
      <p>Select a section:</p>
      <Link to="/nurse/home">Home</Link>
      <Link to="/nurse/patients">My Patients</Link>
      <Link to="/nurse/pending">Pending Bookings</Link>
      <Link to="/nurse/scheduling">My Scheduling</Link>
      <Link to="/nurse/revisiting">Revisiting</Link>
    </div>
  );
}

export default NurseNavbar;
