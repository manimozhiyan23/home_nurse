import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
function Home() {
  return (
    <div>
      <h1>Welcome to Home Nurse Booking</h1>
      <Link to="/book-nurse"><button>Book a Nurse</button></Link>
      <Link to="/register"><button>Join as a Nurse</button></Link>
    </div>
  );
}

export default Home;
