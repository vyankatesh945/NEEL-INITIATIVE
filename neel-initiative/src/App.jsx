import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
// import Footer if needed later

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <Achievements />
      <Projects />
    </div>
  );
};

export default App;
