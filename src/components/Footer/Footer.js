import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Left section */}
          <div className="footer-left">
            <div className="logo-container">
              <div className="logo">
                <span>R</span>
              </div>
              <h2 className="company-name">Red Augment</h2>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur. Eu eget sagittis mi odio.
              Eget non ultrices interdum nisl. A euismod nunc proin sed.
            </p>
          </div>

          {/* Center section */}
          <div className="footer-center">
            <div className="nav-column">
              <h3>Services</h3>
              <p>Pricing</p>
            </div>

            <div className="nav-column">
              <h3>About</h3>
              <ul>
                <li>Blogs</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>

          {/* Right section */}
          <div className="footer-right">
            <p className="contact-email">contact@redaugment.com</p>
            <div className="contact-address">
              <p>A - 2 Kadipur, Delhi</p>
              <p>New Delhi,110036, India</p>
            </div>
          </div>
        </div>

        {/* Copyright at bottom */}
        <div className="copyright">
          <p>© 2025 - redaugment</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
