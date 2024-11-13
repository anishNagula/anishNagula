import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main_left}>
        <h3>AnishNagula</h3>
      </div>
      <div className={styles.main_right}>
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? styles.activeLink : '')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => (isActive ? styles.activeLink : '')}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => (isActive ? styles.activeLink : '')}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
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