import React from 'react';
import './Profile.css';

import companyLogo from '../../assets/companyLogo.svg'
import divider from '../../assets/divider.svg'

const Profile = () => {
  return (
    <div>
      <div className="company-card">
        <div className="company-content">
          <img src={companyLogo} alt="Company Logo" className="company-logo" />
          <h1 className="company-name">Odeon Mart</h1>
          <hr className="divider" />
          <div className="stats-section">
            <div className="stat">
              <span className="stat-value">400</span>
              <span className="stat-label">Product</span>
            </div>
            <img src={divider} alt="Divider" className="divider-icon" />
            <div className="stat">
              <span className="stat-value">12 year</span>
              <span className="stat-label">Experience</span>
            </div>
            <img src={divider} alt="Divider" className="divider-icon" />
            <div className="stat">
              <span className="stat-value">4.8</span>
              <span className="stat-label">Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
