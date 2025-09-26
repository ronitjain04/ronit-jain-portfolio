import React from "react";

import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container} id="about">
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Ronit</h1>
            <p className={styles.description}>I am a Computer Science student at the Georgia Institute of Technology, with a strong passion for software development and a keen interest in artificial intelligence, machine learning, and backend development</p>
            <a href="mailto:ronit.jain@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;
}