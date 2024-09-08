import React from "react";
import "./Projects.css";
import ProjectImage1 from "/images/project1.png"; 
import ProjectImage2 from "/images/project1.png";  

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="project">
        <div className="project-details">
          <h2>Project-1</h2>
          <p>Project Description - We are working on this project since [start date].</p>
          <button className="contribute-btn">Contribute to the project</button>
        </div>
        <div className="project-image">
          <img src={ProjectImage1} alt="Project 1" />
        </div>
      </div>

      <div className="project">
        <div className="project-image">
          <img src={ProjectImage2} alt="Project 2" />
        </div>
        <div className="project-details">
          <h2>Project-2</h2>
          <p>Project Description - [Additional description here].</p>
          <button className="contribute-btn">Contribute to the project</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
