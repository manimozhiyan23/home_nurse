// src/pages/nurse/MyScheduling.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/MyScheduling.css';

function MyScheduling() {
  const [schedules, setSchedules] = useState([]);
  const nurseId = 1; // Replace with actual nurse ID from auth/login

  useEffect(() => {
    axios.get(`http://localhost:8080/api/nurse/myscheduling/${nurseId}`)
      .then(res => setSchedules(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="scheduling-container">
      <h2 className="scheduling-title">My Scheduled Appointments</h2>
      <table className="scheduling-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Service</th>
            <th>Preferred Date</th>
            <th>Preferred Time</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map(s => (
            <tr key={s.id}>
              <td>{s.patientName}</td>
              <td>{s.requiredService}</td>
              <td>{s.preferredDate}</td>
              <td>{s.preferredTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyScheduling;
