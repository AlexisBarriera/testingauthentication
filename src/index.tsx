import React from 'react';
import { createRoot } from 'react-dom/client';
import BookingCalendar from './components/BookingCalendar/BookingCalendar';
import Contact from './components/Contact/Contact';
import AIChatAssistant from './components/AIChatAssistant';

// Mount BookingCalendar component
const bookingContainer = document.getElementById('booking-calendar');
if (bookingContainer) {
  const bookingRoot = createRoot(bookingContainer);
  bookingRoot.render(
    <React.StrictMode>
      <BookingCalendar />
    </React.StrictMode>
  );
}

// Mount Contact component
const contactContainer = document.getElementById('contact-section');
if (contactContainer) {
  const contactRoot = createRoot(contactContainer);
  contactRoot.render(
    <React.StrictMode>
      <Contact />
    </React.StrictMode>
  );
}

// Mount AI Chat Assistant
const aiChatContainer = document.getElementById('ai-chat-assistant');
if (aiChatContainer) {
  const aiChatRoot = createRoot(aiChatContainer);
  aiChatRoot.render(
    <React.StrictMode>
      <AIChatAssistant />
    </React.StrictMode>
  );
}