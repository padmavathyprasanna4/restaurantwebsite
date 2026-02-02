import React, { useState } from 'react';
import './Home.css';
import home1 from '../assets/home1.png'; // Replace this with your image path

import TableBookingForm from './TableBookingForm'; // Create and import this form component

export default function Home() {
  const [isFormOpen, setFormOpen] = useState(false); // State to control form visibility

  const openForm = () => {
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Spice Up Every Bite</h1>
          <p>
            Indulge in vibrant flavors from the comfort of your home. Experience a culinary journey
            with our diverse menu that caters to every palate. Enjoy the convenience of delivery or
            takeout today. Reserve your taste adventure online now.
          </p>
          <div className="button-container">
            <button className="order-btn" onClick={openForm}>Book a Table</button>
            <button className="view-menu-btn">View Menu</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={home1} alt="Delicious food" />
        </div>
      </section>

      {/* Conditionally render the TableBookingForm when isFormOpen is true */}
      {isFormOpen && <TableBookingForm closeForm={closeForm} />}

 {/* Content at the bottom of the page */}
      <section className="bottom-content">
        <h1>The Legend of Kailash Parbat</h1>
        <p>
          Started in 1950s by Mulchandani brothers, Kailash Parbat is one of the most iconic brands in Indian restaurant space for ethnic, vegetarian North Indian and Sindhi cuisine. As a group, Kailash Parbat operates 85 units including other brands. The brand is well known for being focused on customer delight over its 70+ year legacy, becoming synonymous with North Indian delicacies especially chaats & gravies.
        </p>
      </section>
    </>
  );
}

