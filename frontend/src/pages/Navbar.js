import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Ensure this path is correct
import nurse_logo from '../images/nurse_logo.jpg';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={nurse_logo} />
        <span>Nursing Care</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/book-nurse">Book Nurse</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
