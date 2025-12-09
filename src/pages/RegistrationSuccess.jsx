import React from 'react';
import { Link } from 'react-router-dom';
import '../css/RegistrationSuccess.css'; // 🆕 නව CSS file එකක් ආයාත කරන්න

export default function RegistrationSuccess() {
    return (
        // 1. ප්‍රධාන container එක (පිටුපස ඇති light purple background එක)
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
                    
                    <button type="submit" className="btn-ok">OK</button> 
                    
                    
                    
                </div>
            </div>
            
        </div>
    );
}