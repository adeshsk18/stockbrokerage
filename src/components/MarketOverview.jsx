import React, { useState } from 'react';
import './MarketOverview.css';

const marketData = {
  stocks: [
    { name: 'Reliance', code: 'RELIANCE', price: '₹2,456.75', change: '+1.45%', isPositive: true },
    { name: 'HDFC Bank', code: 'HDFCBANK', price: '₹1,567.30', change: '-0.32%', isPositive: false },
    { name: 'TCS', code: 'TCS', price: '₹3,421.60', change: '+2.14%', isPositive: true },
    { name: 'Infosys', code: 'INFY', price: '₹1,876.45', change: '+0.87%', isPositive: true },
  ],
  indices: [
    { name: 'NIFTY 50', code: 'NIFTY', price: '19,674.25', change: '+1.12%', isPositive: true },
    { name: 'SENSEX', code: 'SENSEX', price: '65,972.35', change: '+0.89%', isPositive: true },
    { name: 'BANK NIFTY', code: 'BANKNIFTY', price: '43,567.80', change: '-0.45%', isPositive: false },
    { name: 'NIFTY IT', code: 'NIFTYIT', price: '31,245.60', change: '+1.67%', isPositive: true },
  ],
  futures: [
    { name: 'NIFTY FUT', code: 'NIFTYFUT', price: '19,685.50', change: '+1.15%', isPositive: true },
    { name: 'BANK NIFTY FUT', code: 'BANKNIFTYFUT', price: '43,590.25', change: '-0.42%', isPositive: false },
    { name: 'RELIANCE FUT', code: 'RELIANCEFUT', price: '2,458.80', change: '+1.48%', isPositive: true },
    { name: 'TCS FUT', code: 'TCSFUT', price: '3,425.40', change: '+2.18%', isPositive: true },
  ],
  crypto: [
    { name: 'Bitcoin', code: 'BTC/USDT', price: '$42,456.75', change: '+2.34%', isPositive: true },
    { name: 'Ethereum', code: 'ETH/USDT', price: '$2,567.30', change: '+1.56%', isPositive: true },
    { name: 'Binance', code: 'BNB/USDT', price: '$321.60', change: '-0.78%', isPositive: false },
    { name: 'Ripple', code: 'XRP/USDT', price: '$0.5645', change: '+3.45%', isPositive: true },
  ],
};

const MarketOverview = () => {
  const [activeTab, setActiveTab] = useState('stocks');

  const renderMarketCards = (data) => {
    return data.map((item, index) => (
      <div className="market-card" key={index}>
        <div className="stock-info">
          <span className="stock-name">{item.name}</span>
          <span className="stock-code">{item.code}</span>
        </div>
        <div className="stock-price">
          <span className="price">{item.price}</span>
          <span className={`change ${item.isPositive ? 'positive' : 'negative'}`}>
            {item.change}
          </span>
        </div>
      </div>
    ));
  };

  return (
    <section className="market-overview">
      <div className="container">
        <div className="market-header">
          <h2>Market Overview</h2>
          <div className="market-tabs">
            <button 
              className={`tab ${activeTab === 'stocks' ? 'active' : ''}`}
              onClick={() => setActiveTab('stocks')}
            >
              Stocks
            </button>
            <button 
              className={`tab ${activeTab === 'indices' ? 'active' : ''}`}
              onClick={() => setActiveTab('indices')}
            >
              Indices
            </button>
            <button 
              className={`tab ${activeTab === 'futures' ? 'active' : ''}`}
              onClick={() => setActiveTab('futures')}
            >
              Futures
            </button>
            <button 
              className={`tab ${activeTab === 'crypto' ? 'active' : ''}`}
              onClick={() => setActiveTab('crypto')}
            >
              Crypto
            </button>
          </div>
        </div>
        
        <div className="market-grid">
          {renderMarketCards(marketData[activeTab])}
        </div>
        
        <div className="view-more">
          <button className="btn btn-outline">View All Markets</button>
        </div>
      </div>
    </section>
  );
};

export default MarketOverview; 