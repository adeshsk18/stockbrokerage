import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>TradePro</h3>
            <p>Your trusted partner in the world of trading and investments.</p>
            <div className="social-links">
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Facebook</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li><a href="#">Stocks & ETFs</a></li>
              <li><a href="#">Mutual Funds</a></li>
              <li><a href="#">Futures & Options</a></li>
              <li><a href="#">IPO</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Learn</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Market News</a></li>
              <li><a href="#">Trading Courses</a></li>
              <li><a href="#">Help & Support</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 TradePro. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 