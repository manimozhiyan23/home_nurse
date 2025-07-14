import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyScheduling() {
  const [schedules, setSchedules] = useState([]);
  const nurseId = 1; // Ideally, get this from logged-in user context

  useEffect(() => {
    axios.get(`http://localhost:8080/api/nurse/schedules/${nurseId}`)
      .then(res => setSchedules(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>My Scheduled Appointments</h2>
      <ul>
        {schedules.map(s => (
          <li key={s.id}>
            Patient ID: {s.patientId}, Date: {s.appointmentDate}, Status: {s.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyScheduling;
