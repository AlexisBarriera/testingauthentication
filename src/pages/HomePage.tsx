import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import BookingCalendar from '../components/BookingCalendar/BookingCalendar';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import AIChatAssistant from '../components/AIChatAssistant';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Initialize Feather icons
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }, []);

  return (
    <div className="home-page">
      <Hero />
      <About />
      <Services />
      <BookingCalendar />
      <Contact />
      <Footer />
      <AIChatAssistant />
    </div>
  );
};

export default HomePage;
