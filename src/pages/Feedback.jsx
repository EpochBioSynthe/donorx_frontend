import React, { useState } from "react";
import '../css/feedback.css'; 

export default function Feedback(){
    const [data, setData] = useState({
        name: "",
        email: "",
        category: "",
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
        setData({ name: "", email: "", category: "", message: "" });
    }

    return (
        <div className="feedback-page">
            <form onSubmit={handleSubmit} className="feedback-form">
                
                <p className="form-description">
                    <b>Your thoughts matter to us—feel free to share your comments or questions</b>
                </p>
                
                <div className="form-box">
                    <h2 className="section-title">Feedback Form</h2>

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
                    
                    <div className="button-group">
                        <button className="btn-1" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}