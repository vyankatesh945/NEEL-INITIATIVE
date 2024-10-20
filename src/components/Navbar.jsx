import React, { useState } from "react";
import Hamburger from 'hamburger-react'; 
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);  

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./images/logo.jpg" alt="Neel Initiatives" />
      </div>

      <div className="menu-icon">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      <div className={`nav-links ${isOpen ? "mobile-menu" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#meet-our-team-section">Meet Our Team</a></li>
      </div>

      <div className={`auth-buttons ${isOpen ? "mobile-menu" : ""}`}>
        <button className="sign-in">Sign In</button>
        <button className="get-started">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
