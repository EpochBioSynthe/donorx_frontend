import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/signup.css'; 

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); 

  function handleSubmit(e) {
    e.preventDefault();
   
    navigate("/registration-success"); 
  }

  return (
    <div className="signup-page">
      <form onSubmit={handleSubmit} className="signup-form">
        
        <p className="form-description">
            <b>Join our community today—create your account to get started</b>
        </p>
        
        <div className="form-box">
          <h2 className="section-title">Sign Up</h2>

          <label>Full Name</label>
          <input 
            type="text"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            placeholder="Enter your full name"
          />

          <label>Email Address</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder="Enter your email"
          />

          <div className="button-group">
            <button className="btn-1" type="submit">Create Account</button>
          </div>
        </div>
      </form>
    </div>
  );
}