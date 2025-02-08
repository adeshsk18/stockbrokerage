import React from 'react';
import './AccountTypes.css';

const AccountTypes = () => {
  return (
    <section className="account-types">
      <div className="container">
        <div className="section-header">
          <h2>Choose Your Account Type</h2>
          <p>Select the perfect trading account that matches your needs</p>
        </div>
        
        <div className="account-grid">
          <div className="account-card">
            <div className="account-header">
              <h3>Basic</h3>
              <div className="price">
                <span className="amount">₹0</span>
                <span className="period">/month</span>
              </div>
            </div>
            <ul className="account-features">
              <li>Free Equity Delivery</li>
              <li>Basic Research Reports</li>
              <li>Standard Charts</li>
              <li>Email Support</li>
            </ul>
            <button className="btn btn-outline">Open Account</button>
          </div>
          
          <div className="account-card featured">
            <div className="account-header">
              <h3>Pro</h3>
              <div className="price">
                <span className="amount">₹999</span>
                <span className="period">/month</span>
              </div>
            </div>
            <ul className="account-features">
              <li>Everything in Basic</li>
              <li>Advanced Charts</li>
              <li>Premium Research</li>
              <li>Priority Support</li>
              <li>Options Trading</li>
            </ul>
            <button className="btn btn-primary">Open Pro Account</button>
          </div>
          
          <div className="account-card">
            <div className="account-header">
              <h3>Premium</h3>
              <div className="price">
                <span className="amount">₹1999</span>
                <span className="period">/month</span>
              </div>
            </div>
            <ul className="account-features">
              <li>Everything in Pro</li>
              <li>API Access</li>
              <li>Dedicated Support</li>
              <li>Advanced Algorithms</li>
              <li>Custom Strategies</li>
            </ul>
            <button className="btn btn-outline">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountTypes; 