import React, { useEffect, useState } from 'react';
import '../components/Achievements.css';
import previous from '/images/nextprevious/previous-svgrepo-com.svg'; 
import next from '/images/nextprevious/next-svgrepo-com.svg'; 
import AOS from 'aos';
import "aos/dist/aos.css";

const Achievements = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [images, setImages] = useState([
    "/images/achievements/img1.jpg",
    "/images/achievements/img2.jpg",
    "/images/achievements/img3.jpg",
    "/images/achievements/img4.jpg"
  ]);

       const [captions, setCaptions] = useState([
              "We’ve successfully attracted more than 1,800 farmers to register for our services, demonstrating their trust in our expertise and solutions.",
    "We’ve successfully refined the application of cow dung and organic fertilizers in agricultural practices, promoting sustainable farming and enhancing soil health.",
    "Our services have garnered significant traction, attracting over 1,800 farmers who have benefited from our expertise and solutions.",
    "We've been instrumental in assisting numerous farmers in unraveling the intricate mysteries of their soil, empowering them to make informed decisions for optimal agricultural yields."
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

          {/* Ticker-style Caption */}
          <div className="slider-caption">
            <div className="caption-text">{captions[currentImageIndex]}</div>
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
