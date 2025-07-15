// src/pages/nurse/PendingBookings.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/PendingBooking.css';

function PendingBookings() {
  const [bookings, setBookings] = useState([]);
  const nurseId = 1; // Replace with actual nurse ID from context/login

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
    <div className="pending-container">
      <h2 className="pending-title">Pending Patient Requests</h2>
      <table className="pending-table">
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
              <td>{b.patientName}</td>
              <td>{b.patientContact}</td>
              <td>{b.requiredService}</td>
              <td>{b.preferredDate}</td>
              <td>{b.preferredTime}</td>
              <td>
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
