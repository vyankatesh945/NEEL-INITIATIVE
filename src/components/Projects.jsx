import React, { useState } from "react";
import "./Projects.css";
import ProjectImage1 from "/images/project1.png";
import ProjectImage2 from "/images/project2.png";
import ProjectImage3 from "/images/project2.png";  
import ProjectVideo1 from "/videos/kungfu.mp4";
import ProjectVideo2 from "/videos/pacman.mp4";
import ProjectVideo3 from "/videos/lunar.mp4";  

const Projects = () => {
  
  const [isExpanded1, setIsExpanded1] = useState(false); 
  const [isExpanded2, setIsExpanded2] = useState(false); 
  const [isExpanded3, setIsExpanded3] = useState(false); 


  const toggleExpand1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const toggleExpand2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  const toggleExpand3 = () => {
    setIsExpanded3(!isExpanded3);
  };

  return (
    <section className="projects-section" id="projects">
      {/* Project 1 */}
      <div className="project">
        <div className="project-details">
          <h2>Project-1</h2>
          <p>
            Project Description - We are working on this project since [start
            date]. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            {isExpanded1 ? (
              <>
                <span>
                  Here is the detailed description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula risus et felis efficitur aliquam.
                </span>
                <video controls>
                  <source src={ProjectVideo1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </>
            ) : (
              <span>...</span>
            )}
          </p>
          <button className="read-more-btn" onClick={toggleExpand1}>
            {isExpanded1 ? "Read Less" : "Read More"}
          </button>
          <button className="contribute-btn">Contribute to the project</button>
        </div>
        <div className="project-image">
          <img src={ProjectImage1} alt="Project 1" />
        </div>
      </div>

      {/* Project 2 */}
      <div className="project">
        <div className="project-image">
          <img src={ProjectImage2} alt="Project 2" />
        </div>
        <div className="project-details">
          <h2>Project-2</h2>
          <p>
            Project Description - [Short description here]. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit...
            {isExpanded2 ? (
              <>
                <span>
                  Here is the detailed description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula risus et felis efficitur aliquam.
                </span>
                <video controls>
                  <source src={ProjectVideo2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </>
            ) : (
              <span>...</span>
            )}
          </p>
          <button className="read-more-btn" onClick={toggleExpand2}>
            {isExpanded2 ? "Read Less" : "Read More"}
          </button>
          <button className="contribute-btn">Contribute to the project</button>
        </div>
      </div>

      {/* Project 3 */}
      <div className="project">
        <div className="project-details">
          <h2>Project-3</h2>
          <p>
            Project Description - We are working on this project since [start
            date]. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            {isExpanded3 ? (
              <>
                <span>
                  Here is the detailed description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula risus et felis efficitur aliquam.
                </span>
                <video controls>
                  <source src={ProjectVideo3} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </>
            ) : (
              <span>...</span>
            )}
          </p>
          <button className="read-more-btn" onClick={toggleExpand3}>
            {isExpanded3 ? "Read Less" : "Read More"}
          </button>
          <button className="contribute-btn">Contribute to the project</button>
        </div>
        <div className="project-image">
          <img src={ProjectImage3} alt="Project 3" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
