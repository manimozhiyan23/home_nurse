import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/DashboardTables.css';

function MyScheduling() {
  const [schedules, setSchedules] = useState([]);
  const nurseId = 1;

  useEffect(() => {
    axios.get(`http://localhost:8080/api/nurse/myscheduling/${nurseId}`)
      .then(res => setSchedules(res.data))
      .catch(err => console.error(err));
  }, []);

  const markAsRevisiting = (bookingId) => {
    axios.put(`http://localhost:8080/api/bookings/${bookingId}/revisit`)
      .then(() => {
        alert("Marked as revisiting");
      })
      .catch(err => alert("Error marking revisit"));
  };

  return (
    <div className="table-container">
      <h2 className="table-title">My Scheduled Appointments</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Service</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((s) => (
            <tr key={s.id}>
              <td data-label="Patient">{s.patientName}</td>
              <td data-label="Service">{s.requiredService}</td>
              <td data-label="Date">{s.preferredDate}</td>
              <td data-label="Time">{s.preferredTime}</td>
              <td data-label="Action">
                {!s.revisiting && (
                  <button onClick={() => markAsRevisiting(s.id)}>
                    Mark as Revisiting
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyScheduling;
