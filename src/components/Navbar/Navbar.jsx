

import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Debug: Log the paths
  console.log("Menu icon path:", "/assets/nav/menu.png");
  console.log("Close icon path:", "/assets/nav/close.png");

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? "/assets/nav/close.png" : "/assets/nav/menu.png"}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          onError={(e) => {
            console.error("Image failed to load:", e.target.src);
            e.target.style.border = "2px solid red"; // Visual indicator
          }}
          onLoad={() => {
            console.log( menuOpen ? "/assets/nav/close.png" : "/assets/nav/menu.png");
          }}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Education">Education</a>
          </li>
          <li>
            <a href="#skill">Skill</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};