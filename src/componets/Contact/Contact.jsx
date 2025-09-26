import React from "react";

import styles from "./Contact.module.css"
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return <footer className={styles.container} id="contact">
        <div className={styles.text}>
            <h2 className={styles.title}>Contact</h2>
            <p className={styles.description}>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <a href="mailto:ronit.jain@gmail.com">
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                </a>
                <a href="mailto:ronit.jain@gmail.com">ronit.jain@gmail.com</a>
            </li>
            <li className={styles.link}>
                <a href="www.linkedin.com/in/ronitjain04">
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
                </a>
                <a href="www.linkedin.com/in/ronitjain04">www.linkedin.com/in/ronitjain04</a>
            </li>
            <li className={styles.link}>
                <a href="https://github.com/ronitjain04">
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                </a>
                <a href="https://github.com/ronitjain04">https://github.com/ronitjain04</a>
            </li>
        </ul>
    </footer>;
}