import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import '../css/login.css'; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  function handleSubmit(e) {
    e.preventDefault();
    
    navigate("/registration-success"); 
  }

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        
        <p className="form-description">
            <b>Welcome back! Please enter your details to login to your account</b>
        </p>
        
        <div className="form-box">
          <h2 className="section-title">Login</h2>

          <label>Email Address</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder="Enter your email"
          />

          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            placeholder="Enter your password"
          />

          <div className="button-group">
            <button className="btn-1" type="submit">Login</button>
          </div>
          
          <p className="forgot-password" style={{textAlign: 'center', fontSize: '12px', marginTop: '10px'}}>
            Forgot password? <a href="/reset" style={{color: '#B03576'}}>Reset here</a>
          </p>
        </div>
      </form>
    </div>
  );
}