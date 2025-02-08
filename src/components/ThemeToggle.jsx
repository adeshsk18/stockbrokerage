import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} theme`}
    >
      <div className="toggle-wrapper">
        <div className={`toggle-slider ${isDarkMode ? 'dark' : ''}`}>
          <svg className="sun-icon" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 5V3M12 21v-2M5 12H3m18 0h-2M6.4 6.4L5 5m12.6 12.6l1.4 1.4M6.4 17.6L5 19m12.6-12.6L19 5" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <svg className="moon-icon" viewBox="0 0 24 24" fill="none">
            <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle; 