import React from "react";
import styles from "./Education.module.css";

export const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Engineering (IT)",
      university: "Mumbai University",
      year: "2025",
      grade: "7.05 CGPA",
    },
    {
      title: "Higher Secondary Certificate (XII)",
      university: "State Board",
      year: "2021",
      grade: "85.68%",
    },
    {
      title: "Secondary School Certificate (X)",
      university: "State Board",
      year: "2019",
      grade: "90%",
    },
  ];

  return (
    <section className={styles.container} id="Education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.educationList}>
        {educationData.map((edu, index) => (
          <div key={index} className={styles.educationItem}>
            <h3 className={styles.degree}>{edu.title}</h3>
            <p className={styles.university}>{edu.university}</p>
            <p className={styles.year}>Year of Passing: {edu.year}</p>
            <p className={styles.grade}>Grade: {edu.grade}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
