import React from 'react';
import './Achievements.css';

const Achievements = () => {
  return (
    <section className="achievements">
      <h2>Achievements</h2>
      <div className="achievements-grid">
        <div className="achievement-card">
          <h3>Cover Letter</h3>
          <p>A document that accompanies a job application to introduce the applicant to the employer.</p>
        </div>
        <div className="achievement-card">
          <h3>Resignation Letters</h3>
          <p>Formal document informing an employer of the decision to leave the company.</p>
        </div>
        <div className="achievement-card">
          <h3>Connection Request</h3>
          <p>A message sent on social networking sites requesting to connect with another user.</p>
        </div>
        <div className="achievement-card">
          <h3>Outreach Emails</h3>
          <p>Messages sent to introduce individuals or businesses, establish a connection, or propose a collaboration.</p>
        </div>
        <div className="achievement-card">
          <h3>Resume Optimization</h3>
          <p>Personalized data-driven technology to deliver tailored experiences to customers or users.</p>
        </div>
        <div className="achievement-card">
          <h3>Resume Design</h3>
          <p>Software application using OCR technology to extract and analyze resume data.</p>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
