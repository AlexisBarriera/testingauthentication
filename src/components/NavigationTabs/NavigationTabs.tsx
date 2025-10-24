
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './NavigationTabs.css';

interface NavigationTabsProps {
  isScrolled: boolean;
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { label: 'Inicio', path: '/', section: 'hero' },
    { label: 'Nosotros', path: '/', section: 'about' },
    { label: 'Servicios', path: '/servicios', section: null },
    { label: 'Reservas', path: '/', section: 'booking' },
    { label: 'Contacto', path: '/', section: 'contact' }
  ];

  const handleNavigation = (tab: typeof tabs[0]) => {
    setIsOpen(false);

    if (tab.path === '/servicios') {
      // Navigate to services page
      navigate('/servicios');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (location.pathname === '/' && tab.section) {
      // Already on homepage, just scroll to section
      const element = document.getElementById(tab.section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage first, then scroll to section
      navigate('/');
      setTimeout(() => {
        if (tab.section) {
          const element = document.getElementById(tab.section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    }
  };

  return (
    <nav className={`navigation-tabs ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'open' : ''}`}>
      <button
        className="nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Alternar navegación"
      >
        <span className="toggle-line"></span>
        <span className="toggle-line"></span>
        <span className="toggle-line"></span>
      </button>

      <div className="tabs-container">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(tab)}
            className="nav-tab"
          >
            <span className="tab-number">0{index + 1}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavigationTabs;

