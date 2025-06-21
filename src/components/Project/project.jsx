


import React from "react";
import styles from "./Project.module.css";

// ✅ FIXED path: One level up, not two
import projects from "../data/project.json"; 

import { ProjectCard } from "./ProjectCard";

export const Project = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
