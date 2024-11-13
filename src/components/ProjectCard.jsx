import React from "react";
import styles from '../styles/about.module.css';

const ProjectCard = ({ name, desc, link }) => (
  <div className={styles.projectCard}>
    <div className={styles.projectCard_title}>
      <h3>{name}</h3>
    </div>
    <p>{desc}</p>
    <a href={link} target="_blank"><p className={styles.ProjectCard_link}>{`~> Check It Out!`}</p></a>
  </div>
);

export default ProjectCard;