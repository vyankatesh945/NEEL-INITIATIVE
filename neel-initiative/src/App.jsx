import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import MeetOurTeam from "./components/MeetOurTeam";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <Achievements />
      <Projects />
      <MeetOurTeam />
    </div>
  );
};

export default App;
