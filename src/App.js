import './App.css';
import React from "react";
import Header from './Header';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectSection from './ProjectSection';
import ProjectDetails from './ProjectDetails';



function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <About />
                <ProjectSection />
              </>
            }
          />
          <Route path="/project1-details" element={<ProjectDetails />} />
          <Route path="/project2-details" element={<ProjectDetails />} />
          <Route path="/project3-details" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
