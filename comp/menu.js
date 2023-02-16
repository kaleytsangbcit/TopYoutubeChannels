import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export function Menu() {
    const [navOpen, setNavOpen] = useState(false);

    function toggleNav() {
        setNavOpen(!navOpen);
      }

      return (
        <div className={styles.slideNavContainer}>

          <div className={styles.menuIcon} onClick={toggleNav}>
            <img src="/menu.png"></img>
          </div>

          <div className={`${styles.slideNav} ${navOpen ? styles.open : ''}`}>
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/ranking">RANKINGS</a></li>
            </ul>
          </div>
          
        </div>
      );
    }