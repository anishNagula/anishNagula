import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleLinkClick = () => {
    setIsMobile(false);
  };

  return (
    <div className={styles.main}>
      <div className={styles.main_left}>
        <h3>AnishNagula</h3>
      </div>
      <div className={styles.main_right}>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          {isMobile ? '✖' : '☰'}
        </button>
        <ul className={isMobile ? styles.active : ''}>
          <li>
            <NavLink 
              to="/" 
              onClick={handleLinkClick}
              className={({ isActive }) => (isActive ? styles.activeLink : '')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/blog" 
              onClick={handleLinkClick}
              className={({ isActive }) => (isActive ? styles.activeLink : '')}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              onClick={handleLinkClick}
              className={({ isActive }) => (isActive ? styles.activeLink : '')}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              onClick={handleLinkClick}
              className={({ isActive }) => (isActive ? styles.activeLink : '')}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;