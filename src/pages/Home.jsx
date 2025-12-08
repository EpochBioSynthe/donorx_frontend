// src/pages/Home.jsx

import React from "react";
import { Link } from "react-router-dom";

// 1. IMPORT SIBLING COMPONENTS
import Navbar from '../components/Navbar'; // Assumes Navbar.jsx is in src/components/
import Footer from '../components/Footer'; // Assumes Footer.jsx is in src/components/

// 2. IMPORT CSS (Corrected path assuming 'css' is under 'src')
// NOTE: You must create the Home.css file in the src/css/ folder
import '../css/Home.css'; 

export default function Home() {
  return (
    <div className="home-page">
      
     

      {/* ========================================= */}
{/* 1. HERO SECTION & CALL TO ACTION (WITH EMBEDDED IMAGE) */}
{/* ========================================= */}
<section className="hero-section">
    {/* NEW: Replaced the empty <div className="hero-bg" /> 
        with an actual <img> tag for the background image.
    */}
    <img src="/assets/banner.png" alt="Hands holding a heart for organ donation" className="hero-bg-img" /> 
    
    <div className="hero-content container">
        <div className="hero-left">

            <div className="cta-group">
                {/* Buttons using React Router's Link */}
                <Link to="/signup"><button className="btn primary">REGISTER</button></Link>
                <Link to="/donation-record"><button className="btn outline">Explore Donation Records</button></Link>
            </div>
        </div>
        
        <div className="hero-right">
            {/* This div remains empty for layout padding/flex balancing */}
        </div>
    </div>
</section>

      {/* ========================================= */}
      {/* 2. AIM BAR (Motto Bar) */}
      {/* ========================================= */}
      <div className="aim-bar">
        OUR AIM IS TO INSPIRE AND SUPPORT LIFE SAVING ORGAN DONATION
      </div>

     {/* ========================================= */}
{/* 3. ABOUT US SECTION (WITH EMBEDDED IMAGE) */}
{/* ========================================= */}
<section className="about-section container">
    <div className="about-left">
        {/* NEW: Insert the image directly here */}
        <img src="/assets/bannertwo.png" alt="Doctor with green awareness ribbon" className="about-image" />
    </div>
    
</section>

      {/* ========================================= */}
      {/* 4. OUR SERVICES SECTION */}
      {/* ========================================= */}
      <section className="services container">
        <h3 className="section-title">OUR SERVICES</h3>
        <div className="services-row">
          
          {/* Card 1: Donor Registration */}
          <div className="service-card">
            <img src="/assets/doregi.png" alt="Donor Registration" />
            <h4>Donor Registration</h4>
            <p>Register donors safely with protective validations.</p>
          </div>

          {/* Card 2: Organ Matching */}
          <div className="service-card">
            <img src="/assets/organmatching.png" alt="Organ Matching" />
            <h4>Organ Matching</h4>
            <p>Smart matching to improve compatibility and speed.</p>
          </div>

          {/* Card 3: Donation Tracking */}
          <div className="service-card">
            <img src="/assets/dotracking.png" alt="Donation Tracking" />
            <h4>Donation Tracking</h4>
            <p>Track organ transfers and timelines.</p>
          </div>

          {/* Card 4: Medical Records */}
          <div className="service-card">
            <img src="/assets/medirecords.png" alt="Medical Records" />
            <h4>Medical Records</h4>
            <p>Keep donor and recipient history secure and organized.</p>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 5. STATS / MAP SECTION */}
      {/* ========================================= */}
      <section className="stats container">
        <div className="stats-left">
          <p>Every year, more than <span className="highlight">10,000</span></p>
          <p>Sri Lankans struggle with severe <span className="big-green">organ failure</span></p>
        </div>
        <div className="stats-right">
          {/* Image of the Sri Lanka map with heart icon */}
          <img src="/assets/lanka.png" alt="Map of Sri Lanka" className="map-img" />
        </div>
      </section>
      
      {/* ========================================= */}
      {/* RENDER THE FOOTER COMPONENT */}
      {/* ========================================= */}
      <Footer /> 
    </div>
  );
}