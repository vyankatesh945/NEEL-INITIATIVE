import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Achievements from "./components/Achievements";
// import Footer if needed later

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <Achievements />
      {/* Add other pages as needed */}
    </div>
  );
};

export default App;
