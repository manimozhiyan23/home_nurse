import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/DashboardTables.css';

function MyPatients() {
  const [patients, setPatients] = useState([]);
  const nurseId = 1;

  useEffect(() => {
    axios.get(`http://localhost:8080/api/bookings/nurse/${nurseId}`)
      .then(res => setPatients(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="table-container">
      <h2 className="table-title">My Patients</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Contact</th>
            <th>Service</th>
            <th>Date</th>
            <th>Revisiting</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p, idx) => (
            <tr key={idx}>
              <td data-label="Patient Name">{p.patientName}</td>
              <td data-label="Contact">{p.patientContact}</td>
              <td data-label="Service">{p.requiredService}</td>
              <td data-label="Date">{p.preferredDate}</td>
              <td data-label="Revisiting">{p.revisiting ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyPatients;
