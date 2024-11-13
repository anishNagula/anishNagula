import React, { useState } from "react";
import styles from '../styles/contact.module.css';

const Contact = () => {

  return (
    <div className={styles.main}>
      <div className={styles.contact}>
        <h2>Hit Me Up! :~</h2>
      </div>
      <div className={styles.connect}>
        <ul>
          <li>
            <a href="https://github.com/anishnagula" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/anish-nagula-5369a030a/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/anishnagula/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;