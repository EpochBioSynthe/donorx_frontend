import React, {useState} from "react";

export default function ContactUs(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    alert("Message sent (demo)!");
  }

  return (
    <div className="form-box">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input value={name} onChange={e=>setName(e.target.value)} required />

        <label>Email</label>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required />

        <label>Message</label>
        <textarea value={msg} onChange={e=>setMsg(e.target.value)} rows="5" required />

        <button className="btn" type="submit">Send</button>
      </form>
    </div>
  );
}
