import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h1>Create a Change <br /> With Neel-Initiative</h1>
        <p>
          Submit better job applications 10x faster. AI-powered tools to help you build resumes, cover letters, and more.
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
