import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
  return (
    <footer className="site-footer">
      <div>© {new Date().getFullYear()} DonorX • Designed for GWU HICT</div>
      <div style={{marginTop:8}}>
        <Link to="/" style={{color:'#9a9a9a', textDecoration:'none', margin:'0 10px'}}>Home</Link>
        <Link to="/contact-us" style={{color:'#9a9a9a', textDecoration:'none', margin:'0 10px'}}>Contact</Link>
      </div>
    </footer>
  );
}
