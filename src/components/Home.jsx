import React, { useEffect } from "react";
import "./Home.css";
import AOS from 'aos';
import "aos/dist/aos.css"

const Home = () => {

  useEffect(()=>{
    AOS.init({duration:2000})
  })


  return (
    <section className="home" id="home">
      <div className="content">
        <h1 data-aos= "fade-down">Welcome to NEEL-INITIATIVE: Pioneering the Future with AI
        </h1>
        <p data-aos="fade-right">
        At NEEL-INITIATIVE, we are at the forefront of revolutionizing industries through cutting-edge AI solutions. <br></br>From empowering Indian farmers with precision technology to advancing medical diagnostics, self-driving vehicles, <br></br>and space exploration, we are committed to making tomorrow’s innovations accessible today. Join us as we create smarter, <br></br>more efficient systems for a better, more connected world.
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
