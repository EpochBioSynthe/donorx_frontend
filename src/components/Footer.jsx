// Footer.jsx

import React from "react";
import { Link } from "react-router-dom";

// ⚠️ Footer.css ගොනුව මෙතැනින් import කරන්න
import '../css/Footer.css'; 

export default function Footer(){
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      
      {/* 1. Logo / Branding Column */}
      <div className="footer-col footer-brand">
          <img src="/assets/logodonorx.png" alt="DonorX Logo" className="footer-logo" />
          {/* <p>DonorX</p> */}
      </div>

      {/* 2. Quick Links Column */}
      <div className="footer-col quick-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
      </div>

      {/* 3. Follow Us Column */}
      <div className="footer-col follow-us">
          <h3>Follow Us</h3>
          
          {/* Social Icons */}
          <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/fb.png" alt="Facebook" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/insta.png" alt="Instagram" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/tiktok.png" alt="TikTok" />
              </a>
          </div>
          
          {/* Register Button */}
          <Link to="/signup" className="footer-register-btn">Register</Link>
      </div>

      {/* 4. Contact Column */}
      <div className="footer-col contact-info">
          <h3>Contact</h3>
          <p>
              <img src="/assets/Home.png" alt="Address Icon" />
              No 111, Yakkala, Kandy road
          </p>
          <p>
              <img src="/assets/email.png" alt="Email Icon" />
              DonorX@2025@gmail.com
          </p>
          <p>
              <img src="/assets/Phone.png" alt="Phone Icon" />
              +94 707 234 334
          </p>
          <p>
              <img src="/assets/Phone.png" alt="Phone Icon" />
              +94 812 435 456
          </p>
      </div>

      {/* Copyright Bar (Full Width) */}
      <div className="copyright-bar">
          © {currentYear} DonorX. All rights reserved.
      </div>

    </footer>
  );
}