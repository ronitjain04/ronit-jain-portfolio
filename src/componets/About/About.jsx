import React from "react";

import styles from "./About.module.css"
import { getImageUrl } from "../../utils";

export const About = () => {
    return <section className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            <img 
            src={getImageUrl("about/profile.png")} 
            alt="About Image" 
            className={styles.aboutImg}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3></h3>
                        <p>Hi, I'm Ronit 👋 — a Computer Science student at Georgia Tech with a love for building things that make life simpler and smarter. Whether it's consolidating platforms at WillowTree to support hundreds of thousands of students, leading teams at the iOS Club to design award-winning apps, or teaching classmates how computers really work as a TA, I'm happiest when I'm solving problems that matter.</p>
                    </div>
                </li>
                <li className={styles.aboutItem} id="about">
                    <div className={styles.aboutItemText}>
                        <h3>Work Experience</h3>
                        <p>I've built projects ranging from a Fantasy Football ML Predictor with 97% accuracy to ARchitect, an AR social app for iOS and visionOS. For me, the fun is in turning complex challenges into clean, efficient solutions — and learning something new with every build.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3> Interests </h3>
                        <p>Outside of coding, you'll probably find me brainstorming app ideas, exploring new tech, or diving into sports stats. My goal is simple: keep growing as an engineer while creating technology that's impactful, scalable, and fun to use.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>;
}