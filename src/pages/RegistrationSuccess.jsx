import React from 'react';
import { Link } from 'react-router-dom';
import '../css/RegistrationSuccess.css';

export default function RegistrationSuccess() {
    return (
        <div className="success-page-wrapper">
            <div className="registration-success-page"> 

                {/* 🟣 මධ්‍යයේ ඇති විශාල Purple Card එක */}
                <div className="success-box-container">
                    
                    {/* ⚪ දම් පාට Card එක ඇතුළත ඇති සුදු සාර්ථක පණිවිඩ පෙට්ටිය */}
                    <div className="white-success-box">
                        <div className="success-icon">
                            <span className="checkmark-symbol">✓</span> 
                        </div>

                        <h2 className="success-title">Success !</h2>
                        <p className="success-message">
                            Your recipient registration request has been successfully submitted.
                        </p>
                
                        <Link to="/"> 
                            <button type="button" className="btn-ok">
                                OK
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}