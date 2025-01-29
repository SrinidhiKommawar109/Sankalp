import React, { useState } from 'react';
import './Header.css'; // Make sure to style this appropriately

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header>
      <h1>Sankalp</h1>
      <nav>
        <a href="/">Home</a>
        <div
          className="dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <a href="/about" className="dropdown-toggle">
            About
          </a>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="/history">History</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/faq's">FAQ's</a></li>
              <li><a href="/support">Help & Support</a></li>
            </ul>
          )}
        </div>
        <a href="/schemes">Schemes</a>
        <a href="/funding">Funding</a>
        <a href="/oppurtunities">Oppurtunities</a>
        <a href = "handson">Hands on service</a>
        
      </nav>
    </header>
  );
};

export default Header;
