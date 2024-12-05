// Projects.jsx
import React, { useEffect, useState } from "react";
import API from '@OngoingProjects/api'; // Using alias for API instance
import "./Projects.css";
import ProjectImage1 from "/images/kungfu.png";
import ProjectImage2 from "/images/lunar.png";
import ProjectImage3 from "/images/pacman.png";
import AOS from 'aos';
import "aos/dist/aos.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 2000 });

    // Example API call to fetch project data (Update API endpoint here)
    API.get('projects/') // Correct API endpoint: /api/projects/
      .then((response) => {
        setProjects(response.data); // Assuming response contains an array of projects
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h1 className="projects-heading" data-aos="fade-down">Projects</h1>

      {projects.length > 0 ? (
        projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-details">
              <h2 data-aos="fade-down">{project.title}</h2>
              <p data-aos="fade-right">{project.description}</p>
              <button className="read-more-btn">Read More</button>
            </div>
            <div className="project-image" data-aos="fade-left">
              <img src={project.imageUrl || ProjectImage1} alt={project.title} />
            </div>
          </div>
        ))
      ) : (
        <p>Loading projects...</p>
      )}
    </section>
  );
};

export default Projects;
