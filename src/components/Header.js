import React from "react";

const Header = () => (
  <header style={{ backgroundColor: "black", padding: "20px", color: "white" }}>
    <h1>Red Augment</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/services">Services</a>
      <a href="/work">Work</a>
      <a href="/company">Company</a>
      <a href="/pricing">Pricing</a>
    </nav>
  </header>
);

export default Header;
