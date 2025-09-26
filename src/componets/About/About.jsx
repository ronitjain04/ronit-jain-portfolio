import React from "react";

import styles from "./About.module.css"
import { getImageUrl } from "../../utils";

export const About = () => {
    return <section className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
            src={getImageUrl("about/profile.png")} 
            alt="About Image" 
            className={styles.aboutImg}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/icon3.png")} alt="applelogo" />
                    <div className={styles.aboutItemText}>
                        <h3> Software Engineering </h3>
                        <p>I'm a Georgia Tech CS student who ships real products. At WillowTree, I worked on consolidating three legacy platforms into one unified system, tuning .NET/PostgreSQL services and improving reliability.</p>
                    </div>
                </li>
                <li className={styles.aboutItem} id="about">
                    <img src={getImageUrl("about/icon1.png")} alt="stack" />
                    <div className={styles.aboutItemText}>
                        <h3> Fullstack Developer </h3>
                        <p>Comfortable across React/TypeScript frontends and API/database layers, CI, and testing. I like owning features end-to-end and turning specs into clean, maintainable code.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/icon2.png")} alt="applelogo" />
                    <div className={styles.aboutItemText}>
                        <h3> Artificial Intelligence </h3>
                        <p>Pursuing the AI concentration at Georgia Tech. Built projects like a fantasy football predictor using Python, scikit-learn/PyTorch, with an emphasis on solid evaluation.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>;
}