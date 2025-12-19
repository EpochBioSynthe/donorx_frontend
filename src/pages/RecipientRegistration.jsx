import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import '../css/RecipientRegistration.css'; 
import Navbar from '../components/Navbar';
import '../css/Navbar.css';
export default function RecipientRegistration(){
  
    const navigate = useNavigate();

    const [data, setData] = useState({
         fullname:"", 
         age:"",
         gender:"", 
         nicpassport:"",
         address:"", 
         contactNumber:"", 
         organ:"", 
         hospitalDetails:"", 
         bloodGroup:"", 
         level:"",
         RID:"",
         notes:"", 
         medicalRecords: null,
         agree:false
    });

    function handleChange(e){
        const { name, value, type, checked,files } = e.target;
            setData({
            ...data, 
            [name]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value )
            });
    }

    function handleSubmit(e){
        e.preventDefault();

        if (!data.agree) {
        alert("Please agree to the terms and conditions.");
        return;
        }

        navigate('/registration-success'); 
    }

    return (
    <div className="recipient-registration-page"> 

            <form onSubmit={handleSubmit}>

                <div className="form-box">
                    <h2 className="section-title">Recipient Registration</h2>
                    
                    <label>Full Name</label>
                                <input name="fullname" value={data.fullname} onChange={handleChange} required/>

                    <label>Age</label>
                                <input name="age" type="number" value={data.age} onChange={handleChange} required/>

                    <label>Gender</label>
                                <select name="gender"  value={data.gender} onChange={handleChange} required>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>

                    <label>NIC/Passport</label>
                                <input name="nicpassport" type="number" value={data.nicpassport} onChange={handleChange} required/>

                    <label>Address</label>
                                <input name="address" value={data.address} onChange={handleChange} required/>

                    <label>Contact Number</label>
                                <input name="contactNumber" type="number" value={data.contactNumber} onChange={handleChange} required/>
                    
                    <label>Hospital Details</label>
                                <input name="hospitalDetails" value={data.hospitalDetails} onChange={handleChange} required/>
                    
                    <label>Blood Group</label>
                                <select name="bloodGroup" value={data.bloodGroup} onChange={handleChange} required>
                                    <option value="">Select Blood Group</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                    <option>A+</option>
                                    <option>A-</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>AB+</option>
                                    <option>AB-</option>
                                </select>
                    
                    <label>Required Organ</label>
                                <select name="organ" value={data.organ} onChange={handleChange} required>
                                    <option value="">Select Organ</option>
                                    <option value="kidney">Kidney</option>
                                    <option value="liver">Liver</option>
                                    <option value="heart">Heart</option>
                                    <option value="lungs">Lungs</option>
                                    <option value="pancreas">Pancreas</option>
                                    <option value="intestines">Intestines</option>
                                    <option value="other">Other</option>
                                </select>
                </div>

                <div className="form-box">
                    <h2 className="section-title">Organ Request Submission</h2>
                    <label>Required Organ</label>
                                <select name="organ" value={data.organ} onChange={handleChange} required>
                                    <option value="kidney">Kidney</option>
                                    <option value="liver">Liver</option>
                                    <option value="heart">Heart</option>
                                    <option value="heart">Lungs</option>
                                    <option value="heart">Pancreas</option>
                                    <option value="heart">Intestines</option>
                                    <option value="heart">Other</option>
                                </select>

                    <label>Medical Urgency Level</label>
                                <select name="level" placeholder="Immediate" value={data.level} onChange={handleChange} required>
                                    <option value="immediate">Immediate</option>
                                    <option value="emergency">Emergency</option>
                                    <option value="urgent">Urgent</option>
                                    <option value="low">Low</option>
                                </select>

                    <label>Upload Medical Records</label>
                                <input name="medicalRecords"type="file" className="file" onChange={handleChange} required />

                    <label>Hospital Details</label>
                                <input name="hospitalDetails" value={data.hospitalDetails} onChange={handleChange} required/>
                    
                </div>

                <div className="form-box">
                    <h2 className="section-title">Request Status Tracking</h2>
                    <label>Request ID</label>
                                <input name="RID" placeholder="RR-00123" value={data.RID} onChange={handleChange} required/>

                    <label>Status</label>
                                <input required placeholder="On Waiting List..." />

                    <label>Doctor Notes</label>
                                <input placeholder="Pending further review..." required/>

                </div>
                
                <div className="form-box">
                    <h2 className="section-title">Matching Result</h2>
                    <label>Doctor Match Summary</label>
                                <input placeholder="Compatible donor foundation(anonymous)" required />
                    <label>Organ Availability Date</label>
                                <input type="number" placeholder="2025-01-15" required />

                    <div className="terms-and-conditions"> 
                    <h3>Information Verification</h3>
                    <div>
                    <input 
                      type="checkbox" 
                      name="agree" 
                      checked={data.agree}
                      onChange={handleChange} 
                    />
                    <label>I confirm that this information is correct.</label>
                    </div>

                    <div className="button-group">
                         <button type="submit" className="btn-1">Register</button> 
                    </div>
                    </div>
                </div>
            
            </form>
   
    </div>
    );
}