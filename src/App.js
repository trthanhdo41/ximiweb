import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import AOS from 'aos';
import { ThemeProvider, GlobalStyles } from './theme/ThemeProvider';
import Header from './components/Header';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import Services from './components/Services';
import Pricing from './components/Pricing';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Charts from './components/Charts';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Global styles
const GlobalStyle = createGlobalStyle`
  ${GlobalStyles}
  
  /* Import Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
  
  /* Reset and base styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Remove default button styles */
  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }
  
  /* Remove default link styles */
  a {
    color: inherit;
    text-decoration: none;
  }
  
  /* Remove default list styles */
  ul, ol {
    list-style: none;
  }
  
  /* Image styles */
  img {
    max-width: 100%;
    height: auto;
  }
  
  /* Focus styles */
  *:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  
  /* Selection styles */
  ::selection {
    background-color: var(--color-primary);
    color: white;
  }
  
  /* Scrollbar styles */
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
  
  /* Google Maps iframe styles */
  iframe[src*="google.com/maps"] {
    border: none !important;
    outline: none !important;
    margin: 0 !important;
    padding: 0 !important;
    background: transparent !important;
  }
`;

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <ThemeProvider>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Hero />
        <Statistics />
        <Services />
        <Pricing />
        <About />
        <Testimonials />
        <Charts />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;