import React from "react";
import styles from '../styles/projects.module.css';
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className={styles.main}>
      <div className={styles.projects_main}>
        <ProjectCard name="StudentHub" desc="A platform where students can connect with like minded people and work on projects or get internships and maybe even launch their own startup" link="https://studenthub-codeberry.vercel.app/"/>
        <ProjectCard name="LeetCode_Backend" desc="A simple backend system built in Go, designed to emulate core features of platforms like LeetCode. This project includes user authentication, running code in python, and managing coding problems with test cases." link="https://github.com/anishNagula/Travel_Diary"/>
        <ProjectCard name="Amazon_Clone" desc="Built as a projects when learning basic front-end development. Used languages such as HTML/CSS/JavaScript" link="https://github.com/anishNagula/Amazon-Clone"/>
      </div>

      <h3>Currently working on:~</h3>
      <div className={styles.current_main}>
        <ul>
          <li>A Formula One enthusiasist's all in one information site 🏎️💨.</li>
          <li>Travel Diary for people to blog their travels and journey ✈️.</li>
        </ul>
      </div>
    </div>
  )
}

export default Project