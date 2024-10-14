import React, { useState } from "react";
import "./Projects.css";
import ProjectImage1 from "/images/kungfu.png";
import ProjectImage2 from "/images/lunar.png";
import ProjectImage3 from "/images/pacman.png";
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
      <h1 className="projects-heading">Projects</h1>
      
      <div className="project">
      {/* <h1 className="projects-heading">Projects</h1> */}
        <div className="project-details">
          <h2>AI Kung Fu Game</h2>
          <p>The AI Kung Fu Game Project is an innovative experiment where an AI is trained to play a classic Kung Fu arcade game using its own virtual "brain" and "eyes."</p>
          <button className="read-more-btn" onClick={() => openModal(1)}>Read More</button>
          <button className="contribute-btn">Contribute to the project</button>
        </div>
        <div className="project-image">
          <img src={ProjectImage1} alt="AI Kung Fu Game" />
        </div>
      </div>


      <div className="project">
        <div className="project-details">
          <h2>AI Lunar Landing</h2>
          <p>The AI Lunar Landing Project is a groundbreaking initiative in which an AI is trained to autonomously land a rocket on the moon using its own "brain" and "sensors".</p>
          <button className="read-more-btn" onClick={() => openModal(3)}>Read More</button>
          <button className="contribute-btn">Contribute to the project</button>
        </div>
        <div className="project-image">
          <img src={ProjectImage2} alt="AI Lunar Landing" />
        </div>
      </div>

      
      {/* <div className="project">
        <div className="project-image">
          <img src={ProjectImage2} alt="Project 2" />
        </div>
        <div className="project-details">
          <h2>Project-2</h2>
          <p>The AI Lunar Landing Project is a groundbreaking initiative in which an AI is trained to autonomously land a rocket on the moon using its own "brain" and "sensors".</p>
          <button className="read-more-btn" onClick={() => openModal(2)}>Read More</button>
          <button className="contribute-btn">Contribute to the project</button>
        </div>
      </div> */}

      
      <div className="project">
        <div className="project-details">
          <h2>AI Pac-Man Game</h2>
          <p>The AI Pac-Man Game Project is an advanced AI experiment where a neural network-based AI is trained to play the classic Pac-Man game using its own "brain" and "eyes". </p>
          <button className="read-more-btn" onClick={() => openModal(2)}>Read More</button>
          <button className="contribute-btn">Contribute to the project</button>
        </div>
        <div className="project-image">
          <img src={ProjectImage3} alt="AI Pac-Man Game" />
        </div>
      </div>

      
      {modalOpen && (
        <div className="modal" onClick={handleClickOutside}>
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <div className="expanded-description">
              {currentProject === 1 && <p>AI. Inspired by deep reinforcement learning techniques. The project involves teaching AI to navigate the game environment. Respond to the enemy and carry out complex battles through trial and error...<br></br><br></br>

              An AI's "brain" refers to a neural network model that processes game visual data and makes decisions based on patterns and strategies learned over time. An AI's "eyes" mimic its perception of the game world. Pixel analysis and understand your opponents, obstacles, characters, and health status. Constantly improve your strategy to improve your performance with the aim of achieving a higher score by defeating your enemies with precision and timing.<br></br><br></br>

              Through this project, this ambitious A.I. experiment explores the limits of machine learning in entertainment. Showing how AI can master complex, fast-paced gameplay in dynamic environments.  </p>}
              {currentProject === 2 && <p>The AI Lunar Landing Project is a groundbreaking initiative in which an AI is trained to autonomously land a rocket on the moon using its own "brain" and "sensors". It use its "brain" and "sensors" to independently launch a rocket on the moon This project is simulation of a real-world lunar lander scenario, with an AI controlling the rocket landing, managing fuel , having to navigate the lunar surface and making critical decisions in real time.<br></br><br></br>

              The AI ​​"brain" is a sophisticated neural network that processes inputs such as altitude, speed, fuel level, and the direction of the rocket It uses this information to calculate the optimal descent path, and adapts drag and torque of the rocket to ensure a safe landing. The AI ​​is constantly refining its system through deep reinforcement learning, where it learns to improve its accuracy and efficiency from each simulated landing attempt.
<br></br><br></br>

              The "sensars" mimic the rocket's perception of its surroundings, providing the AI ​​with real-time information about lunar surface conditions, gravity and landing site characteristics While AI is interpreting this information, it adjusts to remain stable, avoid obstacles and is able to make an easy touchdown.<br></br>

              The goal of this project is to develop an AI that can master the complex physics of space flight, and safely land a rocket on the moon. This work demonstrates the potential of AI to aid in space exploration, reduce human intervention and enable automated missions in extraterrestrial environments.</p>}
              {currentProject === 3 && <p>The AI Pac-Man Game Project is an advanced AI experiment where a neural network-based AI is trained to play the classic Pac-Man game using its own "brain" and "eyes".By leveraging deep Q learning, the AI ​​learns to navigate mazes, avoid ghosts, and collect ammo. All aimed at high scores.<br></br><br></br>

              The AI ​​"brain" in this project is a neural network model that processes the game's visual data. and make decisions about moves, strategies, and risk management. and learn by analyzing the maze structure, ghost patterns, and energy sphere locations. Through a process of trial and error, AI improves decisions to last longer and score more.
              <br></br><br></br>

              The AI's "eyes" mimic the perception of the game screen. It takes in pixel data and thinks about the location of Pac-Man, ghosts, and objects. This visual input allows the AI ​​to make real-time decisions, like when to chase bullets or when to avoid ghosts. While optimizing the path through the maze...<br></br><br></br>

              The goal of the project is to achieve a score of more than 500 by learning the complex dynamics of the game with AI. This demonstrates the potential of reinforcement learning models to develop intelligent behavior in dynamic environments. and unpredictable and emphasizes AI's ability to imitate human-like strategic thinking in games...</p>}
            </div>
            <div className="expanded-video">
  {currentProject === 1 && (
    <video autoPlay muted={false}>
      <source src={ProjectVideo1} type="video/mp4" />
    </video>
  )}
  {currentProject === 2 && (
    <video autoPlay muted={false}>
      <source src={ProjectVideo2} type="video/mp4" />
    </video>
  )}
  {currentProject === 3 && (
    <video autoPlay muted={false}>
      <source src={ProjectVideo3} type="video/mp4" />
    </video>
  )}
</div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;