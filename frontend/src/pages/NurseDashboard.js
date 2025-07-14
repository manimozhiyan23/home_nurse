import React from 'react';
import { Link } from 'react-router-dom';

function NurseDashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Nurse Dashboard</h2>
      <p>Select a section:</p>
      <ul>
        <li><Link to="/nurse/home">Home</Link></li>
        <li><Link to="/nurse/patients">My Patients</Link></li>
        <li><Link to="/nurse/scheduling">My Scheduling</Link></li>
        <li><Link to="/nurse/revisiting">Revisiting</Link></li>
      </ul>
    </div>
  );
}

export default NurseDashboard;
