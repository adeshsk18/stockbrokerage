import React from 'react';
import './Hero.css';

const tradingImage = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80";

const Hero = () => {
  return (
    <div className="hero">
      <div className="background-pattern"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Smart Trading, <br />Smarter Investing</h1>
          <p className="hero-subtitle">
            Experience professional-grade trading tools with real-time analytics and personalized insights
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary">Open Free Account</button>
            <button className="btn btn-secondary">View Markets</button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">$50B+</span>
              <span className="stat-label">Assets Managed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100K+</span>
              <span className="stat-label">Active Traders</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Expert Support</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src={tradingImage} alt="Trading Dashboard" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 