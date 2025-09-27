import React from "react";

import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container} id="about">
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Ronit</h1>
            <p className={styles.subtitle}>Computer Science Student @ Georgia Tech | Building Scalable Systems &amp; Mobile Apps</p>
            <p className={styles.description}>I design and build scalable applications, from mobile apps to machine learning models, with a focus on performance and user experience</p>
            <p className={styles.highlight}>Backend &amp; iOS Developer</p>
            <a href="mailto:ronit.jain@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;
}
