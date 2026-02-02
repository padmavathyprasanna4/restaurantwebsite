import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

// Import logo image
import logo from '../assets/logo.png'; // Adjust the path to your image

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          {/* Use the imported logo image */}
          <img src={logo} alt="Kailash Parbat" className="logo-image" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/menu">Menu</Link></li>
        </ul>
      </div>
    </nav>
  );
}
