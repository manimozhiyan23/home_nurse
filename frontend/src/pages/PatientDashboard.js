import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PatientDashboard() {
  const [bookings, setBookings] = useState([]);
  const username = localStorage.getItem('username'); // patient name stored on login

  useEffect(() => {
    if (username) {
      axios.get(`http://localhost:8080/api/bookings/patient-bookings?patientName=${username}`)
        .then(res => setBookings(res.data))
        .catch(err => console.error('Error fetching bookings', err));
    }
  }, [username]);

  return (
    <div style={{ padding: '30px' }}>
      <h2>My Bookings</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f1f5f9' }}>
            <th>Service</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Assigned Nurse</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, idx) => (
            <tr key={idx} style={{ borderBottom: '1px solid #ddd' }}>
              <td>{b.requiredService}</td>
              <td>{b.preferredDate}</td>
              <td>{b.preferredTime}</td>
              <td style={{ fontWeight: 'bold', color: b.status === 'ACCEPTED' ? 'green' : 'orange' }}>
                {b.status}
              </td>
              <td>{b.nurseId ? `Nurse #${b.nurseId}` : 'Not yet assigned'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientDashboard;
