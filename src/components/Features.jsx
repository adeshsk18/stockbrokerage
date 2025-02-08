import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2>Why Choose Us</h2>
          <p>Experience the next generation of trading with our cutting-edge platform</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Zero Brokerage</h3>
            <p>Trade with zero brokerage fees on delivery trades & ₹20 per trade for intraday and F&O</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Lightning Fast</h3>
            <p>Execute trades instantly with our high-speed trading infrastructure</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Secure & Reliable</h3>
            <p>Bank-grade security with 2-factor authentication and encryption</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile Trading</h3>
            <p>Trade anywhere, anytime with our powerful mobile trading app</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 