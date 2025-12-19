import React from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <Link to="/" className="navbar-logo">
          <img 
            src="/assets/logodonorx.png" 
            alt="DonorX Logo" 
            className="logo-image" 
          />
        </Link>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/organ-search">Organ Search</Link>
        <Link to="/donation-record">Donation Records</Link>
        <Link to="/recipient-registration">Register Recipient</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/contact-us">Contact</Link>
      </nav>

      <div className="nav-actions">
        <Link to="/login"><button className="btn login-btn">Login</button></Link>
        <Link to="/signup"><button className="btn signup-btn">Sign Up</button></Link>
      </div>
    </header>
  );
}