import React, { useState } from "react";
import "./Projects.css";
import ProjectImage1 from "/images/project1.png";
import ProjectImage2 from "/images/project2.png";
import ProjectImage3 from "/images/project2.png";
import ProjectVideo1 from "/videos/kungfu.mp4";
import ProjectVideo2 from "/videos/pacman.mp4";
import ProjectVideo3 from "/videos/lunar.mp4";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (projectId) => {
    setCurrentProject(projectId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProject(null);
  };

  const handleClickOutside = (e) => {
    if (e.target.className === "modal") {
      closeModal(); 
    }
  };

  return (
    <section className="projects-section" id="projects">
      
      <div className="project">
        <div className="project-details">
          <h2>Project-1</h2>
          <p>Project Description - We are working on this project since [start date]. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <button className="read-more-btn" onClick={() => openModal(1)}>Read More</button>
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
          <p>Project Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit...fjkdshfkjhasfkjhkjsdhfkjdsjkfhjkahfjjdsahfjkhadskfjhajkshfjkahsfkjhdasjkfhhasfkjashdfjkhasdjkfhasjkdhfkjashfjkhasdfjkhasjkdhfjkdhsafjkhdsajkfhjksadhfkjadshfjkhsdajkfhadsjkhfkjhdskj</p>
          <button className="read-more-btn" onClick={() => openModal(2)}>Read More</button>
          <button className="contribute-btn">Contribute to the project</button>
        </div>
      </div>

      
      <div className="project">
        <div className="project-details">
          <h2>Project-3</h2>
          <p>Project Description - We are working on this project since [start date]. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <button className="read-more-btn" onClick={() => openModal(3)}>Read More</button>
          <button className="contribute-btn">Contribute to the project</button>
        </div>
        <div className="project-image">
          <img src={ProjectImage3} alt="Project 3" />
        </div>
      </div>

      
      {modalOpen && (
        <div className="modal" onClick={handleClickOutside}>
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <div className="expanded-description">
              {currentProject === 1 && <p>Detailed description for Project 1. Lorem ipsum dolor sit amet...</p>}
              {currentProject === 2 && <p>Detailed description for Project 2. Lorem ipsum dolor sit amet...</p>}
              {currentProject === 3 && <p>Detailed description for Project 3. Lorem ipsum dolor sit amet...</p>}
            </div>
            <div className="expanded-video">
              {currentProject === 1 && <video controls><source src={ProjectVideo1} type="video/mp4" /></video>}
              {currentProject === 2 && <video controls><source src={ProjectVideo2} type="video/mp4" /></video>}
              {currentProject === 3 && <video controls><source src={ProjectVideo3} type="video/mp4" /></video>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;