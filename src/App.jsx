import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import About from './components/About';
import Blog from './components/Blog';
/* import Projects from './components/Projects'; // Import your Projects component
import Contact from './components/Contact'; // Import your Contact component */

function App() {
  return (
    <Router>
      <div className="main">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;