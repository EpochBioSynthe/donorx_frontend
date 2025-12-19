import React, { useState } from "react";
import '../css/ContactUs.css'; // අලුත් CSS ගොනුව මෙතැනින් import කරන්න

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Message sent (demo)!");
  }

  return (
    <div className="contact-us-page"> 
      <div className="form-box">
        <h2 className="section-title">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />

          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />

          <label>Message</label>
          <textarea 
            value={msg} 
            onChange={(e) => setMsg(e.target.value)} 
            rows="5" 
            required 
          />

          <div className="button-group">
            <button className="btn-1" type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}