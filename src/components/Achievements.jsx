import React, { useEffect, useState } from 'react';
import '../components/Achievements.css';
import previous from '/images/nextprevious/previous-svgrepo-com.svg'; 
import next from '/images/nextprevious/next-svgrepo-com.svg'; 
// import "aos/demo/aos.css";
import AOS from 'aos';
import "aos/dist/aos.css"

const Achievements = () => {

  useEffect(()=>{
    AOS.init({duration:2000})
  })

  const [images, setImages] = useState([
    "/images/achievements/img1.jpg",
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
    <section className="achievements" id="achievements">
    <div className="inner-container">
      <h1 className="achievements-heading" data-aos="fade-down">Achievements</h1>
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
    </section>
  );
};

export default Achievements;
