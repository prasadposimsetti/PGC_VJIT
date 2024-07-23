// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Event1 from "./components/Event1";
import About from "./components/About";

import Team from "./components/Team";
import Achievements from "./components/Achievements";

 





export default function App() {
  return (
    
      <Router>
<div className="flex flex-col min-h-screen">
      <div className="flex-grow">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Slider />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event1" element={<Event1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team" element={<Achievements />} />
        
        
        
      </Routes>
      </div>
      <About />
      <Footer />
    </div>

</Router>  
  );
}
