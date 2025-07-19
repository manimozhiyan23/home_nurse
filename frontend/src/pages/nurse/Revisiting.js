import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/DashboardTables.css';

function Revisiting() {
  const [revisitList, setRevisitList] = useState([]);
  const nurseId = 1;

  useEffect(() => {
    axios.get(`http://localhost:8080/api/bookings/revisiting?nurseId=${nurseId}`)
      .then(res => setRevisitList(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="table-container">
      <h2 className="table-title">Revisiting Patients</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Service</th>
            <th>Preferred Date</th>
          </tr>
        </thead>
        <tbody>
          {revisitList.map((r, idx) => (
            <tr key={idx}>
              <td data-label="Patient">{r.patientName}</td>
              <td data-label="Service">{r.requiredService}</td>
              <td data-label="Preferred Date">{r.preferredDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Revisiting;
