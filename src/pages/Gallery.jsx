import React from 'react';
import './Gallery.css';
import banner1 from '../assets/banner1.png'; // Banner image
import gallery1 from '../assets/gallery1.png'; // First gallery image
import menu8 from '../assets/menu8.png'; // Second gallery image (replace with actual)
import menu6 from '../assets/menu6.png'; // Third gallery image (replace with actual)
import menu1 from '../assets/menu1.png'; // Fourth gallery image (replace with actual)
import menu2 from '../assets/menu2.png'; // Fifth gallery image (replace with actual)
import menu3 from '../assets/menu3.png'; // Sixth gallery image (replace with actual)
import menu4 from '../assets/menu4.png'; // Seventh gallery image (replace with actual)
import menu5 from '../assets/menu5.png'; // Eighth gallery image (replace with actual)
import menu10 from '../assets/menu10.png'; // Ninth gallery image (replace with actual)
import menu12 from '../assets/menu12.png';
export default function Gallery() {
  return (
    <section className="gallery">
      {/* Banner Image */}
      <div className="banner">
        <img src={banner1} alt="Banner" />
        
      </div>
      <h2>Our Gallery</h2>

      {/* Gallery Section */}
      <div className="gallery-images">
        <div className="gallery-row">
          <div className="gallery-item">
            <img src={gallery1} alt="Gallery 1" />
          </div>
          <div className="gallery-item">
            <img src={menu1} alt="Gallery 2" />
          </div>
          <div className="gallery-item">
            <img src={menu2} alt="Gallery 3" />
          </div>
        </div>
        <div className="gallery-row">
          <div className="gallery-item">
            <img src={menu3} alt="Gallery 4" />
          </div>
          <div className="gallery-item">
            <img src={menu4} alt="Gallery 5" />
          </div>
          <div className="gallery-item">
            <img src={menu12} alt="Gallery 6" />
          </div>
        </div>
        <div className="gallery-row">
          <div className="gallery-item">
            <img src={menu6} alt="Gallery 7" />
          </div>
          <div className="gallery-item">
            <img src={menu10} alt="Gallery 8" />
          </div>
          <div className="gallery-item">
            <img src={menu8} alt="Gallery 9" />
          </div>
        </div>
      </div>
    </section>
  );
}
