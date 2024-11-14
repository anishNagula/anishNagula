import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import About from './components/About';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Change 768 to your desired breakpoint
    };

    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup listener on unmount
    };
  }, []);

  return (
    <Router>
      <div className="main">
        {!isMobile && <CustomCursor />} {/* Render CustomCursor only if not mobile */}
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;