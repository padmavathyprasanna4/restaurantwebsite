import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Booking.css';

export default function Booking() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const history = useHistory(); // For navigating after form submission

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!name || !email || !phone || !date || !time) {
      setMessage('Please fill out all fields.');
      return;
    }

    // Simulate a successful booking
    setMessage('Booking successful! Redirecting...');
    
    // Redirect to Home page after 2 seconds
    setTimeout(() => {
      history.push('/');
    }, 2000);
  };

  return (
    <section className="booking-page">
      <h1>Book a Table</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p className="message">{message}</p>}
    </section>
  );
}
