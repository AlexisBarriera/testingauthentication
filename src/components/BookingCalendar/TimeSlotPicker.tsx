
import React from 'react';
import { Booking } from './BookingCalendar';
import './TimeSlotPicker.css';
import { capitalizeDate } from '../../../utils/dateFormatting';
interface TimeSlotPickerProps {
  selectedDate: Date;
  selectedTime: string;
  onTimeSelect: (time: string) => void;
  bookings: Booking[];
}

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({ 
  selectedDate, 
  selectedTime, 
  onTimeSelect, 
  bookings 
}) => {
  // Business hours configuration
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

const isSlotBooked = (time: string) => {
  const selectedDateStr = selectedDate.toISOString().split('T')[0];
  return bookings.some(b => b.date === selectedDateStr && b.time === time && b.status !== 'cancelled');
};

  const isSlotPast = (time: string) => {
    const now = new Date();
    const [hourStr, period] = time.split(' ');
    const [hour, minute] = hourStr.split(':').map(Number);
    let adjustedHour = hour;

    if (period === 'PM' && hour !== 12) adjustedHour += 12;
    if (period === 'AM' && hour === 12) adjustedHour = 0;

    // Create slot date in local timezone (Puerto Rico)
    const slotDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      adjustedHour,
      minute || 0,
      0,
      0
    );

    return slotDate < now;
  };

  const morningSlots = timeSlots.slice(0, 3);
  const afternoonSlots = timeSlots.slice(3, 6);
  const eveningSlots = timeSlots.slice(6);

  const getBookingForSlot = (time: string) => {
    const selectedDateStr = selectedDate.toISOString().split('T')[0];
    return bookings.find(b => b.date === selectedDateStr && b.time === time && b.status !== 'cancelled');
  };

  const renderTimeSlot = (time: string) => {
    const booking = getBookingForSlot(time);
    const booked = !!booking;
    const past = isSlotPast(time);
    const selected = selectedTime === time;
    const disabled = booked || past;
    const isExternal = booking?.isExternal;

    return (
      <button
        key={time}
        className={`time-slot ${selected ? 'selected' : ''}
                   ${booked ? 'booked' : ''} ${past ? 'past' : ''}
                   ${isExternal ? 'external-booking' : ''}`}
        onClick={() => !disabled && onTimeSelect(time)}
        disabled={disabled}
      >
        <span className="slot-time">{time}</span>
        {booked && (
          <span className="slot-status">
            {isExternal ? 'Reservado (Cliente Externo)' : 'Reservado'}
          </span>
        )}
        {past && !booked && <span className="slot-status">Pasado</span>}
      </button>
    );
  };

  return (
    <div className="time-slot-picker">
      <h3>Seleccionar Hora</h3>
      <p className="picker-date">
        {selectedDate.toLocaleDateString('es-ES', { 
          weekday: 'long', 
          month: 'long', 
          day: 'numeric' 
        })}
      </p>

      <div className="time-sections">
        {morningSlots.length > 0 && (
          <div className="time-section">
            <h4>Mañana</h4>
            <div className="time-grid">
              {morningSlots.map(renderTimeSlot)}
            </div>
          </div>
        )}

        {afternoonSlots.length > 0 && (
          <div className="time-section">
            <h4>Tarde</h4>
            <div className="time-grid">
              {afternoonSlots.map(renderTimeSlot)}
            </div>
          </div>
        )}

        {eveningSlots.length > 0 && (
          <div className="time-section">
            <h4>Atardecer</h4>
            <div className="time-grid">
              {eveningSlots.map(renderTimeSlot)}
            </div>
          </div>
        )}
      </div>

      <div className="slot-info">
        <p>
          <span className="info-icon">ℹ️</span>
          Cada cita tiene una duración de 60 minutos
        </p>
      </div>
    </div>
  );
};

export default TimeSlotPicker;
