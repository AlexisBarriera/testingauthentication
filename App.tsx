import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import './App.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import BookingCalendar from './components/BookingCalendar/BookingCalendar';
import Contact from './components/Contact/Contact';
import NavigationTabs from './components/NavigationTabs/NavigationTabs';
import AIChatAssistant from './components/AIChatAssistant';
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
    <div className="app">
      <NavigationTabs />
      <Hero />
      <About />
      <Services />
      <BookingCalendar />
      <Contact />
      <Footer />
      <AIChatAssistant />
    </div>
  );
}

export default App;
