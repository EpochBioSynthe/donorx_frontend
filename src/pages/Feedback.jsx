import React, {useState} from "react";

export default function Feedback(){
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    alert("Thanks for your feedback!");
  }

  return (
    <div className="form-box">
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label>Your email (optional)</label>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} />

        <label>Message</label>
        <textarea value={message} onChange={e=>setMessage(e.target.value)} rows="6" required />

        <button className="btn" type="submit">Send feedback</button>
      </form>
    </div>
  );
}
