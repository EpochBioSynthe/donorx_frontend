import React from "react";

export default function Profile(){
  return (
    <div className="form-box">
      <h2>Your Profile</h2>
      <div style={{textAlign:'center', padding:12}}>
        <div style={{width:96, height:96, background:'#f0e7f2', borderRadius:999, margin:'0 auto 12px'}}/>
        <div style={{fontWeight:700}}>User Name</div>
        <div style={{marginTop:8, color:'#666'}}>user@example.com</div>
      </div>
    </div>
  );
}
