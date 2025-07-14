import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyPatients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/nurse/patients')
      .then(res => setPatients(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Patients</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f0f0f0' }}>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Condition</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p, idx) => (
            <tr key={idx}>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.conditionDescription}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyPatients;
