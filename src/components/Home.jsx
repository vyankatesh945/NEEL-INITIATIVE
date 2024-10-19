import React, { useEffect } from "react";
import "./Home.css";
import AOS from 'aos';
import "aos/dist/aos.css";
import Typewriter from 'typewriter-effect';

const Home = () => {

  useEffect(()=>{
    AOS.init({duration:5000});
  }, []);

  return (
    <section className="home" id="home">
      <div className="content">
        <h1>
          <Typewriter
            options={{
              strings: ['Welcome to NEEL-INITIATIVE: Pioneering the Future with AI'],
              autoStart: true,
              loop: false,   
              delay: 60, 
              cursor: "",
              pauseFor: 1000,   
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('Welcome to NEEL-INITIATIVE: Pioneering the Future with AI')
                .pauseFor(1000)
                .callFunction(() => {
                  if (typewriter.elements && typewriter.elements.cursor) {  
                    typewriter.elements.cursor.style.display = 'none';
                  }
                })
                .start();
            }}
          />
        </h1>

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
                .typeString('At NEEL-INITIATIVE, we are at the forefront of revolutionizing industries through cutting-edge AI solutions. From empowering Indian farmers with precision technology to advancing medical diagnostics, self-driving vehicles, and space exploration, we are committed to making tomorrow’s innovations accessible today. Join us as we create smarter, more efficient systems for a better, more connected world.')
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

        <div className="newsletter" data-aos="fade-up">
          <input type="text" placeholder="Subscribe to our Newsletter" />
          <button className="subscribe-btn">Start For Free</button>
        </div>
      </div>
    </section>
  );
};

export default Home;

