import React, { useEffect } from "react";
import "./Home.css";
import AOS from 'aos';
import "aos/dist/aos.css"
import Typewriter from 'typewriter-effect';

const Home = () => {

  useEffect(()=>{
    AOS.init({duration:2000})
  })


  return (
    <section className="home" id="home">
      <div className="content">
        {/* <h1 data-aos= "zoom-in">Welcome to NEEL-INITIATIVE: <br></br>Pioneering the Future with AI
        </h1> */}
        <h1>
          <Typewriter
          options={{
            strings: ['Welcome to NEEL-INITIATIVE: Pioneering the Future with AI'],
            autoStart: true,
            loop: false,   
            delay: 75, 
            cursor:"",
            // autoDelete: false,  
            // deleteSpeed: 50,  
            pauseFor: 1000,   
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('Welcome to NEEL-INITIATIVE: Pioneering the Future with AI')
              .pauseFor(1000)
              .callFunction(() => {
                if (typewriter.elements.cursor) {  
                  typewriter.elements.cursor.style.display = 'none';
                }
              })
              .start();
          }}/>
        </h1>
        {/* <p data-aos="fade-right">
        At NEEL-INITIATIVE, we are at the forefront of revolutionizing industries through cutting-edge AI solutions. <br></br>From empowering Indian farmers with precision technology to advancing medical diagnostics, self-driving vehicles, <br></br>and space exploration, we are committed to making tomorrow’s innovations accessible today. Join us as we create smarter, <br></br>more efficient systems for a better, more connected world.
        </p> */}
        <p>
          <Typewriter
          options={{
            autoStart:true,
            loop:false,
            delay:25,cursor:"",
            pauseFor:1000,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('At NEEL-INITIATIVE, we are at the forefront of revolutionizing industries through cutting-edge AI solutions. From empowering Indian farmers with precision technology to advancing medical diagnostics, self-driving vehicles, and space exploration, we are committed to making tomorrow’s innovations accessible today. Join us as we create smarter, more efficient systems for a better, more connected world.')
              .pauseFor(1000)
              .callFunction(() => {
                if (typewriter.elements.cursor) {  
                  typewriter.elements.cursor.style.display = 'none';
                }
              })
              .start();
          }}
          />
        </p>
        <div className="newsletter">
          <input type="text" placeholder="Subscribe to our Newsletter" />
          <button className="subscribe-btn">Start For Free</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
