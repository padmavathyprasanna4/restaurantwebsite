import React from 'react';
import './Menu.css';

/* Banner Image */
import banner2 from '../assets/banner2.png'; // Banner Image (Taste the Legend)

/* Section Images (Replace with your real images) */
import menu1 from '../assets/menu1.png'; // Item 1 (Beverages)
import menu2 from '../assets/menu2.png'; // Item 2 (Beverages)
import menu3 from '../assets/menu3.png'; // Item 3 (Beverages)

import menu12 from '../assets/menu12.png'; // Item 1 (Main Course)
import menu4 from '../assets/menu4.png'; // Item 2 (Main Course)
import menu5 from '../assets/menu5.png'; // Item 3 (Main Course)

import menu6 from '../assets/menu6.png'; // Item 1 (Snacks)
import menu7 from '../assets/menu7.png'; // Item 2 (Snacks)
import menu8 from '../assets/menu8.png'; // Item 3 (Snacks)

import menu9 from '../assets/menu9.png'; // Item 1 (Desserts)
import menu10 from '../assets/menu10.png'; // Item 2 (Desserts)
import menu11 from '../assets/menu11.png'; // Item 3 (Desserts)

export default function Menu() {
  return (
    <section className="menu-page">
      {/* ✅ Banner Section */}
      <div className="menu-banner">
        <img src={banner2} alt="Taste the Legend" />
      </div>

      {/* ✅ Our Menu Heading */}
      <h2 className="main-heading">Our Menu</h2>

      {/* ✅ Section 1 - Beverages */}
      <div className="menu-section">
        <h3>Beverages</h3>
        <div className="menu-grid">
          <div className="menu-card">
            <img src={menu1} alt="Chilli Guava" />
            <h4>Chilli Guava</h4>
            <p>Special mocktail made of guava juice.</p>
            <span>₹150</span>
          </div>

          <div className="menu-card">
            <img src={menu2} alt="Sweet Lassi" />
            <h4>Sweet Lassi</h4>
            <p>Delicious Patiyala beverage served in sweet and salted variants.</p>
            <span>₹120</span>
          </div>

          <div className="menu-card">
            <img src={menu3} alt="Mango Lassi" />
            <h4>Mango Lassi</h4>
            <p>Mangolicious yogurt drink.</p>
            <span>₹140</span>
          </div>
        </div>
      </div>

      {/* ✅ Section 2 - Main Course */}
      <div className="menu-section">
        <h3>Main Course</h3>
        <div className="menu-grid">
          <div className="menu-card">
            <img src={menu12} alt="Paneer Butter Masala" />
            <h4>Paneer Butter Masala</h4>
            <p>Rich creamy paneer curry.</p>
            <span>₹320</span>
          </div>

          <div className="menu-card">
            <img src={menu4} alt="Veg Biryani" />
            <h4>Veg Biryani</h4>
            <p>Fragrant rice cooked with spices.</p>
            <span>₹280</span>
          </div>

          <div className="menu-card">
            <img src={menu5} alt="Dal Tadka" />
            <h4>Dal Tadka</h4>
            <p>Classic lentils tempered with ghee.</p>
            <span>₹220</span>
          </div>
        </div>
      </div>

      {/* ✅ Section 3 - Snacks */}
      <div className="menu-section">
        <h3>Snacks</h3>
        <div className="menu-grid">
          <div className="menu-card">
            <img src={menu6} alt="Samosa" />
            <h4>Samosa</h4>
            <p>Crispy snack stuffed with potatoes.</p>
            <span>₹80</span>
          </div>

          <div className="menu-card">
            <img src={menu7} alt="Pani Puri" />
            <h4>Pani Puri</h4>
            <p>Spicy tangy street food delight.</p>
            <span>₹110</span>
          </div>

          <div className="menu-card">
            <img src={menu8} alt="Dahi Vada" />
            <h4>Dahi Vada</h4>
            <p>Soft lentil dumplings in yogurt.</p>
            <span>₹130</span>
          </div>
        </div>
      </div>

      {/* ✅ Section 4 - Desserts */}
      <div className="menu-section">
        <h3>Desserts</h3>
        <div className="menu-grid">
          <div className="menu-card">
            <img src={menu9} alt="Gulab Jamun" />
            <h4>Gulab Jamun</h4>
            <p>Soft milk dumplings in sugar syrup.</p>
            <span>₹160</span>
          </div>

          <div className="menu-card">
            <img src={menu10} alt="Rasmalai" />
            <h4>Rasmalai</h4>
            <p>Paneer balls soaked in saffron milk.</p>
            <span>₹180</span>
          </div>

          <div className="menu-card">
            <img src={menu11} alt="Kesar Kulfi" />
            <h4>Kesar Kulfi</h4>
            <p>Traditional Indian ice cream dessert.</p>
            <span>₹200</span>
          </div>
        </div>
      </div>
    </section>
  );
}
