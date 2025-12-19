import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Navigation සඳහා
import "../css/DonationRecord.css";

export default function DonationRecord() {
  const navigate = useNavigate();
  const [message, setMessage] = useState(""); // Popup පණිවිඩය සඳහා

  // 1. Save Button: සාර්ථක පණිවිඩයක් පෙන්වීම
  const handleSave = () => {
    navigate("/registration-success"); 
};

  // 2. Clear Button: Form එක Reset කිරීම
  const handleClear = () => {
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      input.value = "";
    });
  };

  // 3. Update Button: පිටුවේ මුලටම යාම
  const handleUpdate = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 4. Back Button: Home පිටුවට යාම
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="dr-page-container">
      <div className="dr-form-wrapper">
        
        {/* සාර්ථක පණිවිඩය පෙන්වන කොටස */}
        {message && <div className="dr-success-popup">{message}</div>}

        {/* Section 1: Donation Record Tracking */}
        <div className="dr-section-box">
          <h3 className="dr-title-bar">Donation Record Tracking</h3>
          <div className="dr-input-grid">
            <div className="dr-field">
              <label>Donor ID</label>
              <input type="text" placeholder="D-001" />
            </div>
            <div className="dr-field">
              <label>Donor Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="dr-field">
              <label>Recipient ID</label>
              <input type="text" placeholder="R-502" />
            </div>
            <div className="dr-field">
              <label>Recipient Name</label>
              <input type="text" placeholder="Kamal Perera" />
            </div>
          </div>
        </div>

        {/* Section 2: Organ & Retrieval Details */}
        <div className="dr-section-box">
          <h3 className="dr-title-bar">Organ & Retrieval Details</h3>
          <div className="dr-input-grid">
            <div className="dr-field">
              <label>Organ Type</label>
              <select><option value="">Select Organ</option></select>
            </div>
            <div className="dr-field">
              <label>Organ Condition</label>
              <select><option value="">Select Condition</option></select>
            </div>
            <div className="dr-field-full">
              <label>Retrieval Location</label>
              <input type="text" placeholder="Enter retrieval location" />
            </div>
            <div className="dr-field">
              <label>Storage Location</label>
              <input type="text" placeholder="Enter storage location" />
            </div>
            <div className="dr-field">
              <label>Transport Method</label>
              <select><option value="">Select Method</option></select>
            </div>
          </div>
        </div>

        {/* Section 3: Date & Time */}
        <div className="dr-section-box">
          <h3 className="dr-title-bar">Date & Time</h3>
          <div className="dr-input-grid">
            <div className="dr-field">
              <label>Donation Date</label>
              <input type="date" />
            </div>
            <div className="dr-field">
              <label>Retrieval Time</label>
              <input type="time" />
            </div>
            <div className="dr-field">
              <label>Transport Start Time</label>
              <input type="time" />
            </div>
            <div className="dr-field">
              <label>Transplant Time</label>
              <input type="time" />
            </div>
            <div className="dr-field">
              <label>Donation Status</label>
              <select>
                <option value="">Select Status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 4: Medical Compatibility */}
        <div className="dr-section-box">
          <h3 className="dr-title-bar">Medical Compatibility</h3>
          <div className="dr-field-full">
            <label>Notes</label>
            <textarea 
              className="dr-textarea" 
              placeholder="Enter compatibility notes here..."
              rows="6"
            ></textarea>
          </div>
        </div>

        {/* Buttons Group - ක්‍රියාකාරීත්වයන් එක් කර ඇත */}
        <div className="dr-action-buttons">
          <button className="dr-btn dr-save" onClick={handleSave}>Save</button>
          <button className="dr-btn dr-update" onClick={handleUpdate}>Update</button>
          <button className="dr-btn dr-clear" onClick={handleClear}>Clear</button>
          <button className="dr-btn dr-back" onClick={handleBack}>Back</button>
        </div>

      </div>
    </div>
  );
}