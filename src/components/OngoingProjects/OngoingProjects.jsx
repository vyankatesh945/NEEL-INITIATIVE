import React, { useEffect, useState } from 'react';
import previous from '/images/nextprevious/previous-svgrepo-com.svg'; 
import next from '/images/nextprevious/next-svgrepo-com.svg'; 
import AOS from 'aos';
import "aos/dist/aos.css";

const OngoingProjects = () => {

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const [media, setMedia] = useState([
    "/images/ongoingprojects/agriculture.jpg",  
    "/images/ongoingprojects/moon.jpg",        
    "/videos/ongoing-projects/agriculture.mp4", 
    "/images/ongoingprojects/project3.png"     
  ]);

  const [captions, setCaptions] = useState([
    "Agriculture Project",
    "Moon Landing Page",
    "Video Project: Autonomous System",        
    "Project 4"
  ]);

  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [prevMediaError, setPrevMediaError] = useState(false);
  const [nextMediaError, setNextMediaError] = useState(false);

  const handlePrev = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex === 0 ? media.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex === media.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="inner-container">
      <h1 className="achievements-heading" data-aos="fade-down">Ongoing Projects</h1>
      <div className="slider-container">
        {/* Previous Button with Image Fallback */}
        <button onClick={handlePrev} className="prev-button">
          <img
            src={previous} 
            alt="Previous"
            onError={() => setPrevMediaError(true)} 
            style={{ display: prevMediaError ? 'none' : 'block' }} 
          />
          {prevMediaError && "Previous"}
        </button>

        {/* Rendering images and VideoS*/}
        {currentMediaIndex === 2 ? (
          <video
            src={media[currentMediaIndex]}
            className="slider-image"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', borderRadius: '10px' }}
          />
        ) : (
          <img 
            src={media[currentMediaIndex]} 
            alt={`Slide ${currentMediaIndex + 1}`} 
            className="slider-image" 
          />
        )}

        <div className="slider-caption">
          <p>{captions[currentMediaIndex]}</p>
        </div>

        {/* Next Button with Image Fallback */}
        <button onClick={handleNext} className="next-button">
          <img
            src={next}  
            alt="Next"
            onError={() => setNextMediaError(true)} 
            style={{ display: nextMediaError ? 'none' : 'block' }} 
          />
          {nextMediaError && "Next"}
        </button>
      </div>
    </div>
  );
};

export default OngoingProjects;
