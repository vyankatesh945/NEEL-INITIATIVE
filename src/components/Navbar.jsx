import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./images/logo.jpg" alt="Neel Initiatives" />
      </div>

      <div className={`nav-links ${isMobile ? "mobile-menu" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#projects">Projects</a></li>
        {/* <li><a href="#team">Meet Our Team</a></li> */}
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <i className={isMobile ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <div className="auth-buttons">
        <button className="sign-in">Sign In</button>
        <button className="get-started">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
