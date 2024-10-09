import React from "react";
import "./MeetOurTeam.css";

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
          <a href="mailto:support@gmail.com">support@gmail.com</a>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="instagram-icon.png" alt="Instagram" />
            </a><br></br>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="facebook-icon.png" alt="Facebook" />
            </a><br></br>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="linkedin-icon.png" alt="LinkedIn" />
            </a><br></br>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <img src="telegram-icon.png" alt="Telegram" />
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
