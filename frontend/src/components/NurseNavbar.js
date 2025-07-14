import React from 'react';
import { Link } from 'react-router-dom';
import NurseNavbar from '../../components/NurseNavbar';

function MyPatients() {
  return (
    <div>
      <NurseNavbar />
      {/* your content here */}
    </div>
  );
}

function NurseNavbar() {
  return (
    <nav style={{ marginBottom: '20px' }}>
      <Link to="/nurse/home">Home</Link> |{" "}
      <Link to="/nurse/patients">My Patients</Link> |{" "}
      <Link to="/nurse/scheduling">My Scheduling</Link> |{" "}
      <Link to="/nurse/revisiting">Revisiting</Link>
    </nav>
  );
}

export default NurseNavbar;
