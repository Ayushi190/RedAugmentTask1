import React from "react";
import "./Header.css"; // Import your CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="path-to-your-logo.png" alt="Logo" />
        <span>Red Augment</span>
      </div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li className="active">Services</li>
          <li>Work</li>
          <li>Company</li>
          <li>Pricing</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
