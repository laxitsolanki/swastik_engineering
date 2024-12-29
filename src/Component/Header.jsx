import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Header.css'; // Import your CSS file for styling
import swashtik from ".././assets/swastik_engineering_logo.png";
const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div> <img src={swashtik} alt="" srcset="" className="logo" /></div>
      <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {/* <li><a href="#home">Home</a></li> */}
          <li><Link to="/">Home</Link></li>
          {/* <li><a href="#about">About</a></li> */}
          <Link to="/about">About</Link>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '✖' : '☰'}
      </div>
    </header>
  );
};

export default Header;