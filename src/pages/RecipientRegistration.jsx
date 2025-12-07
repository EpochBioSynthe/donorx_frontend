import React, {useState} from "react";

export default function RecipientRegistration(){
  const [data, setData] = useState({
    fullname:"", 
    age:"", 
    address:"", 
    contactNumber:"", 
    organ:"", 
    hospitalDetails:"", 
    bloodGroup:"", 
    notes:"", 
    agree: false 
  });

  function handleChange(e){
    const { name, value, type, checked } = e.target;
    setData({
      ...data, 
      [name]: type === 'checkbox' ? checked : value
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    if (!data.agree) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    alert("Recipient registered (demo)!");
    // Add your API call logic here
  }

  return (
    <div className="form-container" style={{maxWidth: 1000, margin: '0 auto'}}>
      
      {/* Top Section: Recipient Registration */}
      <div className="form-box" style={{marginBottom: '20px'}}>
        <h2>Recipient Registration</h2>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input name="fullname" value={data.fullname} onChange={handleChange} required/>

          <label>Age</label>
          <input name="age" type="number" value={data.age} onChange={handleChange} required/>

          <label>Required Organ</label>
          <select name="organ" value={data.organ} onChange={handleChange} required>
            <option value="">Select organ</option>
            <option value="kidney">Kidney</option>
            <option value="liver">Liver</option>
            <option value="heart">Heart</option>
          </select>

          <label>Address</label>
          <input name="address" value={data.address} onChange={handleChange} required/>

          <label>Contact Number</label>
          <input name="contactNumber" value={data.contactNumber} onChange={handleChange} required/>

          <label>Hospital Details</label>
          <input name="hospitalDetails" value={data.hospitalDetails} onChange={handleChange} required/>

          <label>Blood Group</label>
          <input name="bloodGroup" value={data.bloodGroup} onChange={handleChange} required/>
          
          <label>Additional notes</label>
          <textarea name="notes" value={data.notes} onChange={handleChange} rows="4"></textarea>

          {/* The Submit button is usually at the bottom of the main form */}
          {/* NOTE: The screenshot shows multiple submit buttons. This design uses one main form for simplicity. */}
          <button className="btn" type="submit" style={{marginTop: '20px'}}>Register Recipient</button>
        </form>
      </div>
      
      {/* Middle Section: Clinical Submission (Placeholders) */}
      <div className="form-box" style={{marginBottom: '20px'}}>
        <h3>Clinical Submission</h3>
        <label>Required Organ</label>
        <select disabled><option>Select organ</option></select>

        <label>Medical Emergency Level</label>
        <input disabled placeholder="Level (e.g., URGENT)" />

        <label>Upload Medical Records</label>
        <input disabled type="file" />

        <label>Hospital Details</label>
        <input disabled placeholder="Hospital Name" />
        <button className="btn" style={{marginTop: '10px'}}>Submit Records</button>
      </div>
      
      {/* Bottom Section: Donor Matching & Consent (Placeholders) */}
      <div className="form-box" style={{marginBottom: '20px'}}>
        <h3>Organ Donor Matching</h3>
        <label>Request ID</label>
        <input disabled placeholder="Request ID" />

        <label>Name</label>
        <input disabled placeholder="Donor Name" />

        <label>Contact Info</label>
        <input disabled placeholder="Donor Contact Details" />
        
        <div style={{marginTop: '15px', padding: '10px 0'}}>
          <h3>Terms and Conditions</h3>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <input 
              type="checkbox" 
              name="agree" 
              checked={data.agree}
              onChange={handleChange} 
              style={{width: 'auto', marginRight: '10px'}}
            />
            <label style={{fontSize: '14px', marginBottom: '0'}}>I agree to the details/terms and conditions.</label>
          </div>
          <button className="btn" style={{marginTop: '10px'}}>Confirm Acceptance</button>
        </div>
      </div>
    </div>
  );
}
