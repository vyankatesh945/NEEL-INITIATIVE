import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import MeetOurTeam from "./components/MeetOurTeam";
import Work from "./components/work";
import OngoingProjects from "./components/OngoingProjects/OngoingProjects";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      {/* <Work /> */}
      <Achievements />
      <Projects />
      <MeetOurTeam />
      <OngoingProjects/>
    </div>
  );
};

export default App;
