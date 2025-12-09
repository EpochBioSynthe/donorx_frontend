
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function NoNavbar() {
  return (
    // Navbar එක මෙහි නැත
    <Outlet /> 
  );
}