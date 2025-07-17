import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import nurse_logo from '../images/nurse_logo.jpg';

function Navbar() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('username');
    if (user) setUsername(user);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={nurse_logo} alt="Logo" />
        <span>Nursing Care</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/book-nurse">Book Nurse</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <div className="navbar-user">
        {username && (
          <span style={{ marginLeft: 'auto', marginRight: '10px', fontWeight: 'bold' }}>
            👤 {username}
          </span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
