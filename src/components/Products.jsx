import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <section className="products">
      <div className="products-container">
        <div className="products-content">
          <h2>Products Built for Modern Traders</h2>
          <div className="product-cards">
            <div className="product-card">
              <h3>Console</h3>
              <p className="product-description">Advanced trading platform with real-time analytics</p>
              <ul className="product-features">
                <li>Advanced charting</li>
                <li>Real-time market data</li>
                <li>Portfolio analytics</li>
                <li>Customizable screeners</li>
              </ul>
              <button className="btn btn-outline">Learn More</button>
            </div>
            <div className="product-card">
              <h3>Pro</h3>
              <p className="product-description">Professional-grade tools for serious traders</p>
              <ul className="product-features">
                <li>API trading</li>
                <li>Advanced order types</li>
                <li>Strategy builder</li>
                <li>Backtesting engine</li>
              </ul>
              <button className="btn btn-outline">Learn More</button>
            </div>
            <div className="product-card">
              <h3>Mobile</h3>
              <p className="product-description">Trade on the go with our powerful mobile app</p>
              <ul className="product-features">
                <li>Quick trades</li>
                <li>Real-time alerts</li>
                <li>Portfolio tracking</li>
                <li>Market news</li>
              </ul>
              <button className="btn btn-outline">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products; 