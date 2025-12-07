import React, {useState} from "react";

export default function Signup(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    alert(`Thanks for signing up, ${name}`);
  }

  return (
    <div className="form-box">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Full name</label>
        <input value={name} onChange={e=>setName(e.target.value)} required />

        <label>Email</label>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required />

        <button className="btn" type="submit">Create account</button>
      </form>
    </div>
  );
}
