import React from "react";
import styles from '../styles/about.module.css';
import ProjectCard from '../components/ProjectCard.jsx';

const About = () => {
  return (
    <div className={styles.main}>
      <p>Hello everyone<span className={styles.wiggle}>👋</span>, I'm Anish Nagula</p>
      <h1>Full-Stack Web Developer;</h1>
      <h1>Coding Enthusiast.</h1>

      <h2>Skills</h2>
      <div className={styles.skills_main}>
        <p>React</p>
        <p>NodeJS</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>MongoDB</p>
        <p>C</p>
        <p>Python</p>
        <p>Golang</p>      
      </div>

      <button>Featured Projects</button>
      <div className={styles.projects}>
        <ProjectCard name="StudentHub" desc="A platform where students can connect with like minded people and work on projects or get internships and maybe even launch their own startup" link="https://studenthub-codeberry.vercel.app/"/>
        <ProjectCard name="LeetCode-Backend" desc="A simple backend system built in Go, designed to emulate core features of platforms like LeetCode. This project includes user authentication, running code in python, and managing coding problems with test cases." link="https://github.com/anishNagula/Leetcode-Backend"/>
        <ProjectCard name="Simple-User-and-Product-Management-System" desc="This is a basic C program that helps manage user and product information. The program uses hash tables for organizing products and binary trees to keep track of what user purchases. Every time a user purchases a product he will be automatically recommended related products using hashtables." link="https://github.com/anishNagula/Simple-User-and-Product-Management-System"/>
      </div>

      <button className={styles.facts}>Fun Facts About Me!</button>
      <div className={styles.facts_main}>
        <ul>
          <li>I love to listen to Rock and Roll and also play the guitar in my free time🎸</li>
          <li>Passionate badminton player</li>
          <li>Always trying to take cool pics📸</li>
          <li>Food is loveeez😋</li>
        </ul>
      </div>
    </div>
  );
};

export default About;