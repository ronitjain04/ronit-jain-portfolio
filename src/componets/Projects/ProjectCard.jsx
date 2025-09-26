import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project: { title, imageSrc, description, skills, source } }) => {
    const sourceLink = source || "#";

    return (
        <a
            href={sourceLink}
            className={styles.container}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src={getImageUrl(imageSrc)}
                alt={`${title}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{`${title}`}</h3>
            <p className={styles.description}>{`${description}`}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>
                            {skill}
                        </li>
                    );
                })}
            </ul>
        </a>
    );
};
