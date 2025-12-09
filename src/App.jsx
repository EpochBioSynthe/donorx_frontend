import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"; // ⚠️ Outlet import කර ඇත!

// 1. 🌐 Imported Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// 2. 📄 Imported Pages
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

// --- 🌐 Layout Component: Navbar සහ Footer පෙන්වන Layout එක ---
// 'Navbar' යන නම වෙනුවට 'NavbarLayout' භාවිතා කර ඇත (Duplicate Error Fix).
function NavbarLayout() {
  return (
    <>
      <Navbar /> {/* imported Navbar component එක render කරයි */}
      <main className="main-content">
        <Outlet /> {/* Nested route එකේ Page component එක මෙහි render වේ */}
      </main>
      <Footer /> {/* Footer component එක render කරයි */}
    </>
  );
}

// --- ⛔️ Layout Component: Navbar සහ Footer නොපෙන්වන Layout එක ---
// 'NoNavbar' යන නම වෙනුවට 'NoNavbarLayout' භාවිතා කර ඇත (Clarity).
function NoNavbarLayout() {
  return (
    // Navbar සහ Footer නොමැතිව, main content එක පමණක් render කරයි
    <main className="main-content">
      <Outlet />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        {/* ⚠️ App component එක තුළ තිබූ සෘජු <Navbar /> සහ <Footer /> render කිරීම සම්පූර්ණයෙන්ම ඉවත් කර ඇත. */}
        {/* මෙය සිදුකිරීමෙන්, Layout Functions මගින් පමණක් Navbar/Footer render වේ. */}
        
        <Routes>
          
          {/* 1. 🌐 NavbarLayout භාවිතා කරන Routes: (සාමාන්‍ය පිටු) */}
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

          {/* 2. ⛔️ NoNavbarLayout භාවිතා කරන Routes: (Success පිටුව) */}
          <Route element={<NoNavbarLayout />}>
            <Route path="/registration-success" element={<RegistrationSuccess />} />
          </Route>

        </Routes>
        
      </div>
    </Router>
  );
}

export default App;