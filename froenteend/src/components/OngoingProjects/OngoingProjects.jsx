// OngoingProjects.jsx
import React, { useEffect, useState } from 'react';
import API from '@OngoingProjects/api'; // Using alias for API instance
import previous from '/images/nextprevious/previous-svgrepo-com.svg';
import next from '/images/nextprevious/next-svgrepo-com.svg';
import AOS from 'aos';
import "aos/dist/aos.css";
import './OngoingProjects.css';

const OngoingProjects = () => {
  const [ongoingProjects, setOngoingProjects] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1200 });

    // Example API call to fetch ongoing projects (Update API endpoint here)
    API.get('ongoing-projects/') // Correct API endpoint: /api/ongoing-projects/
      .then((response) => {
        setOngoingProjects(response.data); // Assuming response contains an array of ongoing projects
      })
      .catch((error) => {
        console.error("Error fetching ongoing projects:", error);
      });
  }, []);

  return (
    <div className="inner-container">
      <h1 className="achievements-heading" data-aos="fade-down">Ongoing Projects</h1>
      <div className="slider-container">
        {ongoingProjects.length > 0 ? (
          ongoingProjects.map((project, index) => (
            <div key={index}>
              <img src={project.imageUrl} alt={project.title} className="slider-image" />
              <p>{project.description}</p>
            </div>
          ))
        ) : (
          <p>Loading ongoing projects...</p>
        )}
      </div>
    </div>
  );
};

export default OngoingProjects;
