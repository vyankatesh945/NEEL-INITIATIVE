import React, { useState } from 'react';
// import '../components/OngoingProjects/OngoinProjects.css';
import previous from '/images/nextprevious/previous-svgrepo-com.svg'; 
import next from '/images/nextprevious/next-svgrepo-com.svg'; 

const OngoingProjects = () => {
  const [images, setImages] = useState([
    "/images/ongoingprojects/project3.png",
    "/images/achievements/img2.jpg",
    "/images/achievements/img3.jpg",
    "/images/achievements/img4.jpg"
  ]);

  const [captions, setCaptions] = useState([
    "caption 1",
    "caption 2",
    "caption 3",
    "caption 4"
  ]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageError, setPrevImageError] = useState(false);
  const [nextImageError, setNextImageError] = useState(false);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="inner-container">
      <h1 className="achievements-heading">Ongoing Projects</h1>
      <div className="slider-container">
        {/* Previous Button with Image Fallback */}
        <button onClick={handlePrev} className="prev-button">
          <img
            src={previous} 
            alt="Previous"
            onError={() => setPrevImageError(true)} 
            style={{ display: prevImageError ? 'none' : 'block' }} 
          />
          {prevImageError && "Previous"}
        </button>

  <img 
          src={images[currentImageIndex]} 
          alt={`Slide ${currentImageIndex + 1}`} 
          className="slider-image" 
        />


           <div className="slider-caption">
          <p>{captions[currentImageIndex]}</p>
        </div>

        {/* Next Button with Image Fallback */}
        <button onClick={handleNext} className="next-button">
          <img
            src={next}  
            alt="Next"
            onError={() => setNextImageError(true)} 
            style={{ display: nextImageError ? 'none' : 'block' }} 
          />
          {nextImageError && "Next"}
        </button>
      </div>
    </div>
  );
};

export default OngoingProjects;  
