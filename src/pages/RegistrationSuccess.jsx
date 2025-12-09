import React from 'react';
import { Link } from 'react-router-dom'; // 👈 Link component එක භාවිතා කරයි
import '../css/RegistrationSuccess.css'; // 🆕 නව CSS file එකක් ආයාත කරන්න

export default function RegistrationSuccess() {
    return (
        <div className="success-page-wrapper">
        
            <div className="registration-success-page"> 

                 {/* 2. Success Box Container - White Box සහ Purple Shadow එක අඩංගු වේ */}
                <div className="success-box-container">
                
                    {/* 3. Purple Shadow Layer (පිටුපස ඇති විශාල වක්‍ර කොටස) */}
                    <div className="purple-shadow-layer"></div>
                
                        {/* 4. White Success Box (ඉදිරියෙන් ඇති වක්‍ර සුදු කොටස) */}
                        <div className="white-success-box">
                            {/* ✅ Checkmark Icon එකට සමාන වර්ණය සහ විශාලත්වය */}
                            <div className="success-icon">
                                {/* ඔබට මෙහි SVG එකක් හෝ large icon library එකකින් icon එකක් භාවිතා කළ හැක */}
                                <span className="checkmark-symbol">✓</span> 
                            </div>

                            <h2 className="success-title">Success !</h2>
                            <p className="success-message">Your recipient registration request has been successfully submitted.</p>
                    
                            {/* 🚀 OK Button එක Home Page එකට (/ path එකට) Link කිරීම */}
                            <Link to="/"> 
                                <button type="button" className="btn-ok">
                                    OK
                                </button>
                            </Link>
                            {/* ⚠️ සටහන: type="submit" වෙනුවට type="button" භාවිතා කර ඇත, මන්ද මෙය form එකක් submit කිරීමක් නොවන බැවිනි. */}
                    
                        </div>
                    </div>
            
                </div>
        </div>
    );
}