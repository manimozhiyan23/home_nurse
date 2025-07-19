import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/DashboardTables.css';

function PendingBookings() {
  const [bookings, setBookings] = useState([]);
  const nurseId = 1;

  useEffect(() => {
    axios.get('http://localhost:8080/api/bookings/pending')
      .then(res => setBookings(res.data))
      .catch(err => console.error(err));
  }, []);

  const acceptBooking = (bookingId) => {
    axios.put(`http://localhost:8080/api/bookings/${bookingId}/accept?nurseId=${nurseId}`)
      .then(() => {
        alert("Booking accepted");
        setBookings(bookings.filter(b => b.id !== bookingId));
      })
      .catch(err => alert("Error accepting booking"));
  };

  return (
    <div className="table-container">
      <h2 className="table-title">Pending Patient Requests</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Contact</th>
            <th>Service</th>
            <th>Preferred Date</th>
            <th>Preferred Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(b => (
            <tr key={b.id}>
              <td data-label="Patient Name">{b.patientName}</td>
              <td data-label="Contact">{b.patientContact}</td>
              <td data-label="Service">{b.requiredService}</td>
              <td data-label="Preferred Date">{b.preferredDate}</td>
              <td data-label="Preferred Time">{b.preferredTime}</td>
              <td data-label="Action">
                <button onClick={() => acceptBooking(b.id)}>Accept</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PendingBookings;
