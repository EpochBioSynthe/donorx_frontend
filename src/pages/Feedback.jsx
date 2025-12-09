// src/pages/Feedback.jsx

import React, { useState } from "react";
import '../css/feedback.css'; 

export default function Feedback(){
    // ADD name and category to the state
    const [data, setData] = useState({
        name: "",       // NEW FIELD
        email: "",
        category: "",   // NEW FIELD
        message: ""
    });

    function handleChange(e){
        const { name, value } = e.target;
        setData({
            ...data, 
            [name]: value
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        alert("Thank you for your feedback! We have received your message.");
        // Clear form after submission
        setData({ name: "", email: "", category: "", message: "" });
    }

    return (
        <div className="feedback-page container">
            <form onSubmit={handleSubmit} className="feedback-form">
                
                <p className="form-description">
                    <b><h2>Your thoughts matter to us—feel free to share your comments or questions</h2></b>
                </p>
                
                <div className="form-box">
                    {/* Changed h2 class for styling */}
                    <h3 className="feedback-header">Feedback Form</h3>

                    {/* NEW: Name Field */}
                    <label>Name</label>
                    <input 
                        name="name"
                        type="text" 
                        value={data.name} 
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                    />

                    <label>Email</label>
                    <input 
                        name="email"
                        type="email" 
                        value={data.email} 
                        onChange={handleChange} 
                        placeholder="Enter your email"
                    />
                    
                    {/* NEW: Category Field */}
                    <label>Category</label>
                    <input 
                        name="category"
                        type="text" 
                        value={data.category} 
                        onChange={handleChange} 
                        placeholder="e.g., General, Bug, Suggestion"
                    />

                    <label>Place your feedback here</label>
                    <textarea 
                        name="message"
                        value={data.message} 
                        onChange={handleChange} 
                        rows="6" 
                        required 
                    />
                    
                    {/* Changed button text and class for styling */}
                    <button className="btn submit-btn" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}