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
                    <img src={getImageUrl("about/icon1.png")} alt="applelogo" />
                    <div className={styles.aboutItemText}>
                        <h3> iOS App Developer</h3>
                        <p>I have experience with iOS development through a club at my school where gained hands-on experience as I designed and built several iOS applications.</p>
                    </div>
                </li>
                <li className={styles.aboutItem} id="about">
                    <img src={getImageUrl("about/icon2.png")} alt="stack" />
                    <div className={styles.aboutItemText}>
                        <h3>Fullstack Developer</h3>
                        <p>Aspiring to be a fullstack developer, I have experience with iOS apps and hope to work on web applications with more in-depth frontends and backends.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/icon1.png")} alt="applelogo" />
                    <div className={styles.aboutItemText}>
                        <h3> Artificial Intelligence</h3>
                        <p>I am pursuing a concentration in Artificial Intelligence and hope to put my knowledge and skills to work helping innovate and create new projects.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>;
}