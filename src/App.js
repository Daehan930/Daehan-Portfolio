import React from 'react';
import './App.css';

import Header from './Header';
import About from './About';
// import Project from './Project';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectSection from './ProjectSection';
import ProjectDetails from './ProjectDetails';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <About />
      <ProjectSection />
      <Routes>
          <Route path="/project1-details" element={<ProjectDetails />} />
          <Route path="/project2-details" element={<ProjectDetails />} />
          <Route path="/project3-details" element={<ProjectDetails />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
