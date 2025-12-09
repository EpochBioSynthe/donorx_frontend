import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RecipientRegistration from "./pages/RecipientRegistration";
import DonationRecord from "./pages/DonationRecord";
import OrganSearch from "./pages/OrganSearch";
import Feedback from "./pages/Feedback";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";
import RegistrationSuccess from './pages/RegistrationSuccess';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/recipient-registration" element={<RecipientRegistration />} />
            <Route path="/registration-success" element={<RegistrationSuccess />} />
            <Route path="/donation-record" element={<DonationRecord />} />
            <Route path="/organ-search" element={<OrganSearch />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
