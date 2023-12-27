// File: MenuBar.jsx
import React from 'react';
import './header.css';

const MenuBar = () => {
  return (
    <header>
      <div className="logo-container">
        <img src="./medical-logo.jpg" alt="Logo" className="logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#help">Help</a></li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>
      </nav>
    </header>
  );
};

export default MenuBar;
