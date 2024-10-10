// import Carousel from "../components/Carousel";


// const slides = [
//   "/images/achievements/img1.jpg",
//   "/images/achievements/img2.jpg",
//   "/images/achievements/img3.jpg",
//   "/images/achievements/img4.jpg"
// ];

// export default function Achievements() {
//   return (
//     <main className="Achievements">
//       <div className="text-center items-center justify-center">
//       <h2>Achievements </h2>
//       </div>
//       {/* <h2>Achievements </h2> */}
//       <div className="max-w-lg">
//         <Carousel>
//           {slides.map((s) => (
//             <img src={s} key={s} />
//           ))}
//         </Carousel>
//       </div>
//     </main>
//   );
// }
import React, { useState } from 'react';
import '../components/Achievements.css';

const Achievements = () => {
  const [images, setImages] = useState([
    "./images/achievements/img1.jpg",
    "./images/achievements/img2.jpg",
    "./images/achievements/img3.jpg",
    "./images/achievements/img4.jpg"
  ]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  console.log("Current image path:", images[currentImageIndex]);

  return (
    <div className="inner-container">
      <h1 className="achievements-heading">Achievements</h1>
      <div className="slider-container">
        <button onClick={handlePrev} className="prev-button">Previous</button>
        <img 
          src={images[currentImageIndex]} 
          alt={`Slide ${currentImageIndex + 1}`} 
          className="slider-image" 
        />
        <button onClick={handleNext} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default Achievements;