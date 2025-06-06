import React, { useState, useEffect } from 'react';
// Removed React Router imports: BrowserRouter, Routes, Route, Link, useLocation
import './App.css';

// --- Page Imports ---
import HomePage from './pages/HomePage'; // Assuming path is src/pages/HomePage.jsx
import AboutPage from './pages/AboutPage'; // Assuming path is src/pages/AboutPage.jsx
// Import other page components if they are to be part of the single page scroll
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import BrandPage from './pages/BrandPage';
import TestimonialsPage from './pages/TestimonialsPage';


// --- Icon Components (Ideally move to src/components/Icons/) ---
const HamburgerIcon = ({ onClick, color = "#292528" }) => (
  <button
    onClick={onClick}
    className="icon-button hamburger-icon"
    aria-label="Open menu"
  >
    <svg width="28" height="28" viewBox="0 0 24 20" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
      <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  </button>
);

const CloseIcon = ({ onClick, color = "#F8F5E2" }) => (
  <button onClick={onClick} className="icon-button close-icon" aria-label="Close menu" >
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
      <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </button>
);

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-button"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '🌙' : '☀️'} {/* Simple emoji toggle, style as needed */}
    </button>
  );
};

// ScrollDownIcon is part of HomePage.jsx

// --- Navigation Components (Ideally move to src/components/Nav/) ---
const LogoPlaceholder = ({ handleSmoothScroll }) => ( // Added handleSmoothScroll
  <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="logo-placeholder" aria-label="Sanvar Studio Home">
    <img src="/Sanvar.png" alt="Sanvar Studio Logo" className="logo-image" />
  </a>
);

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about-us", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Our Work" },
  { id: "contact", label: "Contact Us" },
];

const DesktopNavLinks = ({ handleSmoothScroll }) => { // Added handleSmoothScroll
  return (
    <nav className="desktop-nav-menu">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.label}
          href={`#${item.id}`}
          onClick={(e) => handleSmoothScroll(e, `#${item.id}`)}
          className="desktop-nav-link"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

const OverlayMenu = ({ isOpen, toggleOverlay, handleSmoothScroll, closeIconColor  }) => { // Added handleSmoothScroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className={`overlay-menu ${isOpen ? 'open' : ''}`}>
      <div className="overlay-menu-close-button-container">
        <CloseIcon onClick={toggleOverlay} iconColor={closeIconColor}/>
      </div>
      <nav className="overlay-menu-nav">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={`#${item.id}`}
            onClick={(e) => {
              handleSmoothScroll(e, `#${item.id}`);
              toggleOverlay(); // Also close overlay
            }}
            className="overlay-menu-link"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="overlay-menu-footer">
        © {new Date().getFullYear()} Sanvar Studio
      </div>
    </div>
  );
};

// Consider this Nav component as './components/Nav/Nav.jsx'
const Nav = ({ isOverlayOpen, toggleOverlay, handleSmoothScroll, currentTheme, onToggleTheme }) => { // Added handleSmoothScroll

  const primaryTextColor = currentTheme === 'dark' ? 'var(--text-primary)' : 'var(--text-primary)'; // Or specific colors
  const overlayCloseIconColor = currentTheme === 'dark' ? 'var(--bg-primary)' : 'var(--text-primary)'; // Color for close icon in overlay
  return (
    <header className="main-nav">
      <LogoPlaceholder handleSmoothScroll={handleSmoothScroll} />
      <div className="nav-right-elements">
        <DesktopNavLinks handleSmoothScroll={handleSmoothScroll} />
        <ThemeToggle theme={currentTheme} toggleTheme={onToggleTheme} />
        <HamburgerIcon onClick={toggleOverlay} />
      </div>
      <OverlayMenu isOpen={isOverlayOpen} toggleOverlay={toggleOverlay} handleSmoothScroll={handleSmoothScroll} closeIconColor={overlayCloseIconColor} />
    </header>
  );
};



// --- Main App Component ---
export default function App() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
      const localTheme = localStorage.getItem('theme');
      if (localTheme) {
        return localTheme;
      }
      // Default to light or check system preference
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Calculate position of the target element
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      // Get the height of the fixed navigation bar
      const navElement = document.querySelector('.main-nav');
      const navHeight = navElement ? navElement.offsetHeight : 0;
      
      // Calculate the final scroll position, subtracting nav height
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Add smooth scroll behavior to the html element via CSS for general anchor links
  // This is handled in App.css

  return (
    // Removed <Router> wrapper
    <div className="app-container">
      <Nav 
        isOverlayOpen={isOverlayOpen} 
        toggleOverlay={toggleOverlay} 
        handleSmoothScroll={handleSmoothScroll} 
        currentTheme={theme}      // Pass current theme
        onToggleTheme={toggleTheme} // Pass toggle handler
      />
      <main className="page-content-wrapper">
        {/* Render sections directly for single-page layout */}
        <HomePage />
        <AboutPage />
        {/* Add other sections here if they are part of the single page */}
        <ServicesPage />
        <PortfolioPage />
        <BrandPage/>
        <TestimonialsPage/>
        <ContactPage />
      </main>
    </div>
  );
}
