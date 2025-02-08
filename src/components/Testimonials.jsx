import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Traders Say</h2>
          <p>Join thousands of satisfied traders who trust our platform</p>
        </div>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"The platform's ease of use and powerful analytics tools have transformed my trading experience. The real-time data and charts are exceptional."</p>
            </div>
            <div className="testimonial-author">
              <div className="author-info">
                <h4>Rajesh Kumar</h4>
                <span>Professional Trader</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Best trading platform I've used. The mobile app is fantastic, and their customer support is always helpful and responsive."</p>
            </div>
            <div className="testimonial-author">
              <div className="author-info">
                <h4>Priya Sharma</h4>
                <span>Day Trader</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"The research reports and market insights have helped me make informed decisions. Their zero brokerage plan saved me thousands."</p>
            </div>
            <div className="testimonial-author">
              <div className="author-info">
                <h4>Amit Patel</h4>
                <span>Investment Analyst</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 