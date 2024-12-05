import React from "react";
import "./MeetOurTeam.css";
        import { FaInstagram, FaFacebook, FaLinkedin, FaTelegram } from "react-icons/fa";
        import { SiGmail } from "react-icons/si";
        
        const MeetOurTeam = () => {
          return (
            <section className="meet-our-team-section" id="meet-our-team-section">
              <h1 className="meet-our-team-title">Meet Our Team</h1>
              <p className="meet-our-team-description">
                Neel-Initiative is lucky to have a wonderful team that....
              </p>
              <a href="/team.html" className="meet-our-team-button">
                See the entire team
              </a>

              {/* Flex container to align projects and contact sections */}
      {/* <div className="flex-container"> */}
      {/* <div className="ongoing-projects">
          <h3>Ongoing Projects</h3>
          <ul>
            <li><a href="/projects/project1">Project-1</a></li>
            <li><a href="/projects/project2">Project-2</a></li>
            <li><a href="/projects/project3">Project-3</a></li>
            <li><a href="/projects/project4">Project-4</a></li>
          </ul>
        </div> */}
        
              <div className="contact-us">
                <h2>Contact Us</h2>
                <div className="social-icons">
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-item">
                    <FaInstagram /> <span>Instagram</span>
                  </a>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-item">
                    <FaFacebook /> <span>Facebook</span>
                  </a>
                  <a href="http://www.linkedin.com/in/vyankatesh-sharma-08b392239" target="_blank" rel="noopener noreferrer" className="social-item">
                    <FaLinkedin /> <span>LinkedIn</span>
                  </a>
                  <a href="https://t.me/neelinitiative" target="_blank" rel="noopener noreferrer" className="social-item">
                    <FaTelegram /> <span>Telegram</span>
                  </a>
                  <a href="mailto:neelinitiative@gmail.com" className="social-item">
                    <SiGmail /> <span>neelinitiative@gmail.com</span>
                  </a>
                </div>
              </div>
        
              <footer className="footer">
                <p>
                  © Copywriting | All Rights Reserved | <a href="/terms">Terms of Use</a>{" "}
                  | <a href="/privacy">Privacy</a>
                </p>
              </footer>
            </section>
          );
        };
        
        export default MeetOurTeam;
        