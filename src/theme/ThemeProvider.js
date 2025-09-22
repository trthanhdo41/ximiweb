import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('ximiweb-theme');
    // Mặc định là light mode, chỉ dùng dark nếu user đã chọn trước đó
    const initialTheme = savedTheme || 'light';
    
    setTheme(initialTheme);
    setMounted(true);
    
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('ximiweb-theme', newTheme);
    
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  const value = {
    theme,
    toggleTheme,
    isLight: theme === 'light',
    isDark: theme === 'dark',
    mounted,
    currentTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={currentTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const GlobalStyles = `
  :root {
    --color-primary: #2563eb;
    --color-primary-hover: #1d4ed8;
    --color-secondary: #7c3aed;
    --color-accent: #059669;
    --color-background: #ffffff;
    --color-background-secondary: #f9fafb;
    --color-text-primary: #111827;
    --color-text-secondary: #4b5563;
    --color-border: #e5e7eb;
  }

  .dark {
    --color-primary: #3b82f6;
    --color-primary-hover: #2563eb;
    --color-secondary: #8b5cf6;
    --color-accent: #10b981;
    --color-background: #111827;
    --color-background-secondary: #1f2937;
    --color-text-primary: #f9fafb;
    --color-text-secondary: #d1d5db;
    --color-border: #374151;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', system-ui, sans-serif;
    background-color: var(--color-background);
    color: var(--color-text-primary);
    transition: background-color 0.3s ease, color 0.3s ease;
    line-height: 1.6;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-background-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-text-secondary);
  }

  ::selection {
    background-color: var(--color-primary);
    color: white;
  }

  *:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  * {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }
`;