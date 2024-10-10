import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./images/logo.jpg" alt="Neel Initiatives" />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#projects">Projects</a></li>
        {/* <li><a href="#team">Meet Our Team</a></li> */}
      </ul>
      <div className="auth-buttons">
        <button className="sign-in">Sign In</button>
        <button className="get-started">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
