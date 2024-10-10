import React from "react";
import "./MeetOurTeam.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const MeetOurTeam = () => {
  return (
    <section className="meet-our-team-section">
      <h1 className="meet-our-team-title">Meet Our Team</h1>
      <p className="meet-our-team-description">
        Neel-Initiative is lucky to have a wonderful team that....
      </p>
      <a href="/team" className="meet-our-team-button">
        See the entire team
      </a>

      {/* Flex container to align projects and contact sections */}
      <div className="flex-container">
        <div className="ongoing-projects">
          <h3>Ongoing Projects</h3>
          <ul>
            <li><a href="/projects/project1">Project-1</a></li>
            <li><a href="/projects/project2">Project-2</a></li>
            <li><a href="/projects/project3">Project-3</a></li>
            <li><a href="/projects/project4">Project-4</a></li>
          </ul>
        </div>

        <div className="contact-us">
          <h3>Contact Us</h3>
          <a href="mailto:support@gmail.com"><SiGmail /> neelinitiative@gmail.com</a>
          
          <div className="soncial-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              {/* <img src="instagram-icon.png" alt="Instagram" /> */}
              <FaInstagram /> Instagram
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              {/* <img src="facebook-icon.png" alt="Facebook" /> */}
              {/* <FaFacebook /> */}
              <FaFacebook /> Facebook
            </a>
            <a href="http://www.linkedin.com/in/vyankatesh-sharma-08b392239" target="_blank" rel="noopener noreferrer">
              {/* <img src="linkedin-icon.png" alt="LinkedIn" /> */}
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://t.me/neelinitiative" target="_blank" rel="noopener noreferrer">
              {/* <img src="telegram-icon.png" alt="Telegram" /> */}
              <FaTelegram /> Telegram
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>© Copywriting | All Rights Reserved | <a href="/terms">Terms of Use</a> | <a href="/privacy">Privacy</a></p>
      </footer>
    </section>
  );
};

export default MeetOurTeam;
