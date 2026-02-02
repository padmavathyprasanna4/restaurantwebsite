// TableBookingForm.jsx
import React, { useState } from 'react';
import './TableBookingForm.css'; // Importing the external CSS file

const TableBookingForm = ({ closeForm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Table booked for ${name} (${phone}) on ${date} at ${time} for ${people} people. Special requests: ${specialRequest}`);
    closeForm(); // Close the form after submission
  };

  return (
    <div className="booking-form">
      <div className="form-container">
        <h2>Book Your Table</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <label>Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
          <label>Number of People</label>
          <input
            type="number"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            required
          />
          <label>Special Requests</label>
          <textarea
            value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
            rows="4"
            placeholder="Any special requests?"
          ></textarea>
          <button type="submit">Submit</button>
          <button type="button" onClick={closeForm}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default TableBookingForm;
