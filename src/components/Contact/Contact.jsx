import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emil.png")} alt="emil icon" />
          <a href="vaishnavisasane1233@email.com">vaishnavisasane1233@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkdin.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/vaishnavi-sasane-4a3143263/">linkedin.com/Vaishnavisasane</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/git.png")} alt="Github icon" />
          <a href="https://github.com/Sasanevaishnavi">github.com/Sasanevaishnavi</a>
        </li>
      </ul>
    </footer>
  );
};