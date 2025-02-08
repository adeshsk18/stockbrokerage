import React, { useState } from 'react';
import './NavBar.css';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/" className="logo">
            Trade Pro
          </a>
        </div>

        <div className="nav-controls">
          <ThemeToggle />

          <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;