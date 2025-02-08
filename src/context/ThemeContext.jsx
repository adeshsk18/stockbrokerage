import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      return savedTheme ? savedTheme === 'dark' : prefersDark;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // Add smooth transition when theme changes
    root.style.setProperty('--transition', 'none');
    root.classList.add('theme-transition');
    
    window.setTimeout(() => {
      root.classList.remove('theme-transition');
      root.style.setProperty('--transition', 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)');
    }, 1);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 