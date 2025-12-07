import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="nav-left">
        <div className="brand">DonorX</div>
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
        <Link to="/login"><button className="btn">Login</button></Link>
        <Link to="/signup"><button className="btn secondary">Sign Up</button></Link>
      </div>
    </header>
  );
}
