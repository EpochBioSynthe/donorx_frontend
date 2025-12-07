import React, {useState} from "react";

export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    alert(`Submitted: ${email}`);
    // you can add validation
  }

  return (
    <div className="form-box">
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required />

        <label>Password</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required />

        <button className="btn" type="submit">Login</button>
      </form>
    </div>
  );
}
