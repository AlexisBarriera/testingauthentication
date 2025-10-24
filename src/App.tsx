import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import './App.css';
import NavigationTabs from './components/NavigationTabs/NavigationTabs';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import Footer from './components/Footer/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <NavigationTabs isScrolled={isScrolled} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
