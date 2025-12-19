import React from "react";
import { Link } from "react-router-dom";
import '../css/Home.css'; 

export default function Home() {
  return (
    <div className="home-page">
        <section className="hero-section">
        <img src="/assets/banner.png" alt="Banner" className="hero-bg-img" /> 
        <div className="hero-content container">
          <div className="hero-right">
            <div className="cta-group">
              <Link to="/signup"><button className="btn primary">REGISTER</button></Link>
              <Link to="/donation-record"><button className="btn outline">Explore Donation Records</button></Link>
            </div>
          </div>
        </div>
      </section>

      <div className="aim-bar">
        OUR AIM IS TO INSPIRE AND SUPPORT LIFE SAVING ORGAN DONATION
      </div>

      <section className="about-section" id="about-us-section">
        <img src="/assets/bannertwo.png" alt="About Us" className="about-image" />
      </section>

      <section className="services">
        <h3 className="section-title-h">OUR SERVICES</h3>
        <div className="services-row">
          <Link to="/recipient-registration"><img src="/assets/doregi.png" alt="Service 1" className="service-card-img" /></Link>
          <Link to="/organ-search"><img src="/assets/organmatching.png" alt="Service 2" className="service-card-img" /></Link>
          <Link to="/donation-record"><img src="/assets/dotracking.png" alt="Service 3" className="service-card-img" /></Link>
          <Link to="/login"><img src="/assets/medirecords.png" alt="Service 4" className="service-card-img" /></Link>
        </div>
      </section>

      <section className="stats">
        <div className="stats-left">
          <p>Every year, more than <span className="highlight">10,000</span></p>
          <p>Sri Lankans struggle with severe <span className="big-green">organ failure</span></p>
        </div>
        <div className="stats-right">
          <img src="/assets/lanka.png" alt="Map of Sri Lanka" className="map-img" />
        </div>
      </section>

      <div className="mind">
        YOUR GIFT, THEIR TOMORROW
      </div>
      
    </div>
  );
}