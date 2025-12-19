import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

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

// Layout with Navbar and Footer
function NavbarLayout() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

// Layout without Navbar and Footer
function NoNavbarLayout() {
  return (
    <main className="main-content">
      <Outlet />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Normal Pages */}
          <Route element={<NavbarLayout />}> 
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/recipient-registration" element={<RecipientRegistration />} />
            <Route path="/donation-record" element={<DonationRecord />} />
            <Route path="/organ-search" element={<OrganSearch />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* Success Page Only */}
          <Route element={<NoNavbarLayout />}>
            <Route path="/registration-success" element={<RegistrationSuccess />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;