import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h1>Welcome to NEEL-INITIATIVE: Pioneering the Future with AI
        </h1>
        <p>
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
