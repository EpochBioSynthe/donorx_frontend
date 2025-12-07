import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
  return (
    <div>
      <section className="hero">
        <div className="left">
          <h1>Your Organ Can Save a Life</h1>
          <p>Join our mission by becoming an organ donor. Track donations and connect recipients with hope.</p>
          <div className="cta-group">
            <Link to="/signup"><button className="btn">Register</button></Link>
            <Link to="/donation-record"><button className="btn secondary">Explore Donation Records</button></Link>
          </div>
        </div>

        <div className="right">
          <div style={{width:240, height:140, background:'#f2f0f5', borderRadius:8}}></div>
        </div>
      </section>

      <section className="form-box">
        <h3>Our Aim</h3>
        <p>Short placeholder explaining how register and donation process works.</p>

        <div className="card-row">
          <div className="card">
            <h4>Available Donors</h4>
            <p>Preview cards for donors with short summary.</p>
          </div>
          <div className="card">
            <h4>Search</h4>
            <p>Quick link to Organ Search page.</p>
          </div>
          <div className="card">
            <h4>How it works</h4>
          </div>
        </div>
      </section>
    </div>
  );
}
