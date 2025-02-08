import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`chatbot ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Chat Support</h3>
            <button className="close-chat" onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>
          <div className="chat-messages">
            <div className="message bot">
              <p>👋 Hi! How can I help you today?</p>
            </div>
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Type your message..." />
            <button className="send-message">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      )}
      <button 
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="currentColor"/>
        </svg>
      </button>
    </div>
  );
};

export default ChatBot; 