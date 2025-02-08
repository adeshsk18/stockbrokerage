import React from 'react';
import './HowToStart.css';

const HowToStart = () => {
  return (
    <section className="how-to-start">
      <div className="container">
        <div className="section-header">
          <h2>Start Trading in Minutes</h2>
          <p>Quick and easy process to begin your trading journey</p>
        </div>

        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Create Account</h3>
            <p>Complete your registration with basic details and KYC verification</p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Add Funds</h3>
            <p>Deposit funds using UPI, net banking, or other payment methods</p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Start Trading</h3>
            <p>Access markets and begin trading with our powerful platform</p>
          </div>
        </div>

        <div className="start-cta">
          <button className="btn btn-primary">Open Free Account</button>
          <button className="btn btn-secondary">Watch Demo</button>
        </div>
      </div>
    </section>
  );
};

export default HowToStart; 