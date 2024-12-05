// Home.jsx
import React, { useEffect, useState } from "react";
import API from '@OngoingProjects/api'; // Using alias for API instance
import "./Home.css";
import AOS from 'aos';
import "aos/dist/aos.css";
import Typewriter from 'typewriter-effect';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 5000 });

    // Example API call to fetch home data (Update API endpoint here)
    API.get('home-data/') // Correct API endpoint: /api/home-data/
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section className="home" id="home">
      <div className="content">
        {data ? (
          <>
            <h1>{data.welcomeMessage}</h1> {/* Display dynamic data */}
            <div className="typewriter-paragraph">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 25,
                  cursor: "",
                  pauseFor: 1000,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(data.description)
                    .pauseFor(1000)
                    .callFunction(() => {
                      if (typewriter.elements && typewriter.elements.cursor) {
                        typewriter.elements.cursor.style.display = 'none';
                      }
                    })
                    .start();
                }}
              />
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
        <div className="newsletter" data-aos="fade-up">
          <input type="text" placeholder="Subscribe to our Newsletter" />
          <button className="subscribe-btn">Start For Free</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
