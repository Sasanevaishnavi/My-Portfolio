import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vaishnavi</h1>
        <p className={styles.description}>
          "I have recently completed my Bachelor's degree in Information Technology, and I am currently working as a  Developer. I have learned various technologies as part of my professional journey."
        </p>
        <a href="mailto:vaishnavisaasne1233@gmailcom" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/myimage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
