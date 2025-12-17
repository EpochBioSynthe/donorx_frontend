// src/pages/OrganSearch.jsx
import React, { useState } from 'react';
import '../css/OrganSearch.css';

const OrganSearch = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    organType: 'All',
    bloodType: 'All',
    donorStatus: 'All',
    location: 'All'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for:\nOrgan: ${searchCriteria.organType}\nBlood Type: ${searchCriteria.bloodType}\nDonor Status: ${searchCriteria.donorStatus}\nLocation: ${searchCriteria.location}`);
  };

  const organTypes = ['All', 'Heart', 'Kidney', 'Liver', 'Lungs', 'Pancreas', 'Intestine'];
  const bloodTypes = ['All', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const donorStatuses = ['All', 'Available', 'Pending', 'Matched', 'Transplanted'];
  const locations = ['All', 'General Hospital', 'City Medical Center', 'University Hospital', 'Regional Transplant Center'];

  return (
    <div className="main-app-container">

      {/* Part 1 */}
      <div className="organ-search-container">
        <header className="header">
          <h1>Organ Search</h1>
        </header>

        <div className="search-container">
          <form onSubmit={handleSearch}>
            <div className="form-grid">

              {/* --- Organ Type --- */}
              <div className="form-group">
                <label htmlFor="organType">Organ Type</label>
                <select 
                  id="organType"
                  name="organType"
                  value={searchCriteria.organType}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  {organTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* --- Blood Type --- */}
              <div className="form-group">
                <label htmlFor="bloodType">Blood Type</label>
                <select 
                  id="bloodType"
                  name="bloodType"
                  value={searchCriteria.bloodType}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  {bloodTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* --- Donor Status --- */}
              <div className="form-group">
                <label htmlFor="donorStatus">Donor Status</label>
                <select 
                  id="donorStatus"
                  name="donorStatus"
                  value={searchCriteria.donorStatus}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  {donorStatuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>

              {/* --- Location --- */}
              <div className="form-group">
                <label htmlFor="location">Location / Hospital</label>
                <select 
                  id="location"
                  name="location"
                  value={searchCriteria.location}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

            </div>

            <div className="button-group">
              <button type="submit" className="btn-search">
                Search
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* Part 2 */}
      <div className="advanced-filters-row">
        <div className="advanced-card">
          <h3>Advanced Filters</h3>
          <ul>
            <li>Age Range</li>
            <li>Donor medical history</li>
            <li>Organ priority level</li>
            <li>Hospital availability times</li>
          </ul>
        </div>
      </div>

      {/* Part 3 */}
      <section className="summary">
        <div className="summary_img">
          <img 
            src="/assets/donor summery.png"
            alt="donor summary"
            className="donor-summary-image"
          />
        </div>
      </section>

      {/* Part 4 */}
      <div className="why-use-container">
        <div className="why-use-box">
          <h2>Why Use Our Organ Search System?</h2>
          <ul>
            <li>Fast and accurate donor matching</li>
            <li>Verified hospital data sources</li>
            <li>Updated donor availability in real-time</li>
            <li>Designed for patients, doctors, and hospitals</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default OrganSearch;
