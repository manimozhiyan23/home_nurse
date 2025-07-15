import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// General Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookNurse from './pages/BookNurse';
import PatientDashboard from './pages/PatientDashboard';
import NurseDashboard from './pages/NurseDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './pages/Navbar';

// Nurse Pages
import NurseHome from './pages/nurse/Home';
import MyPatients from './pages/nurse/MyPatients';
import MyScheduling from './pages/nurse/MyScheduling';
import Revisiting from './pages/nurse/Revisiting';
import PendingBookings from './pages/nurse/PendingBooking';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book-nurse" element={<BookNurse />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/nurse-dashboard" element={<NurseDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* Nurse Dashboard Sub Pages */}
        <Route path="/nurse/home" element={<NurseHome />} />
        <Route path="/nurse/patients" element={<MyPatients />} />
        <Route path="/nurse/scheduling" element={<MyScheduling />} />
        <Route path="/nurse/revisiting" element={<Revisiting />} />
        <Route path="/nurse/pending" element={<PendingBookings />} />
      </Routes>
    </Router>
  );
}

export default App;
