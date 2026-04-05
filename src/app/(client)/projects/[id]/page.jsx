"use client";

import { useParams, useRouter } from 'next/navigation';
import { projectsData } from '../../_lib/data/projectsData';
import styles from '../../_lib/styles/projectDetail.module.css';
import Link from 'next/link';

function ProjectDetail() {
    const params = useParams();
    const router = useRouter();
    const projectId = params.id;

    const project = projectsData.find(p => p.id === projectId);

    if (!project) {
        return (
            <div className={styles.notFound}>
                <h1>Project Not Found</h1>
                <p>The project you're looking for doesn't exist.</p>
                <Link href="/projects" className={styles.backButton}>
                    Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className={styles.projectDetailPage}>
            <Link href="/projects" className={styles.backLink}>
                ← Back to Projects
            </Link>
            {/* Overview Section */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Overview</h2>
                <p className={styles.sectionText}>{project.overview}</p>
            </section>

            {/* Technologies Section */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Technologies Used</h2>
                <div className={styles.techGrid}>
                    {project.technologies.map((tech, index) => (
                        <div key={index} className={styles.techItem}>
                            {tech}
                        </div>
                    ))}
                </div>
            </section>

            {/* Problem Section */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>The Problem</h2>
                <p className={styles.sectionText}>{project.problem}</p>
            </section>

            {/* Solution Section */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>The Solution</h2>
                <p className={styles.sectionText}>{project.solution}</p>
            </section>

            {/* Features Section */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Key Features</h2>
                <ul className={styles.featureList}>
                    {project.features.map((feature, index) => (
                        <li key={index} className={styles.featureItem}>
                            <span className={styles.featureIcon}>✓</span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Challenges Section */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Challenges & Learning</h2>
                <p className={styles.sectionText}>{project.challenges}</p>
            </section>

            {/* Results Section */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Results & Impact</h2>
                <p className={styles.sectionText}>{project.results}</p>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <h2 className={styles.ctaTitle}>Interested in this project?</h2>
                <p className={styles.ctaText}>
                    Check out the live demo or explore more of my work.
                </p>
                <div className={styles.ctaButtons}>
                    <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.primaryButton}
                    >
                        View Live Demo
                    </a>
                    <Link href="/projects" className={styles.secondaryButton}>
                        View All Projects
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default ProjectDetail;
