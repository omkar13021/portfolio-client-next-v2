"use client";

import styles from '../_lib/styles/project.module.css';
import Link from "next/link";
import { projectsData } from '../_lib/data/projectsData';

function Project() {

    const renderProject = projectsData.map((project) => (
        <div className={styles.projectCard} key={project.id}>
            <div className={styles.cardImage}>
                <img src={project.imageUrl} alt={project.title} />
                <div className={styles.cardOverlay}>
                    <span className={styles.category}>{project.category}</span>
                </div>
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.shortDescription}</p>
                <div className={styles.techStack}>
                    {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className={styles.techBadge}>{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className={styles.techBadge}>+{project.technologies.length - 3}</span>
                    )}
                </div>
            </div>
            <div className={styles.cardActions}>
                <Link href={`/projects/${project.id}`} className={styles.detailsButton}>
                    View Details
                </Link>
                <a 
                    href={project.projectUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.liveButton}
                >
                    Live Demo
                </a>
            </div>
        </div>
    ));

    return (
        <div className={styles.projectSection}>
            <div className={styles.projectHeader}>
                <h1 className={styles.pageTitle}>Featured Projects</h1>
                <p className={styles.pageSubtitle}>
                    A collection of projects showcasing my expertise in full-stack development, 
                    real-time systems, and modern web technologies.
                </p>
            </div>
            <div className={styles.projectGrid}>
                {renderProject}
            </div>
            <div className={styles.moreProjects}>
                <p>Want to see more of my work?</p>
                <a 
                    href='https://github.com/omkar755292' 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className={styles.githubLink}
                >
                    Visit My GitHub
                </a>
            </div>
        </div>
    );
}

export default Project;
