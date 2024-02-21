import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PracticeAreas from "./pages/PracticeAreas";
import Contact from "./pages/Contact";
import './css/DefaultTheme.module.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes> 
    </Router>
  );
}

export default App;
