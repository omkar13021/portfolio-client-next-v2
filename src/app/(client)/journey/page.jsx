"use client"
import styles from '../_lib/styles/journey.module.css';

const Journey = () => {
  return (
    <main className={styles.journeyPage}>
      <div className={styles.journeyHeader}>
        <h1 className={styles.pageTitle}>Professional Journey</h1>
        <p className={styles.pageSubtitle}>
          My career path and professional experiences in software development
        </p>
      </div>

      <section className={styles.timelineSection}>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h2>Zodix Health Pvt Ltd</h2>
              <img src="/assets/images/img-intenship/zodix_logo.jpeg" alt="Zodix Health Pvt Ltd" />
              <p><strong>Software Engineer</strong></p>
              <p>Contributing to the development of scalable healthcare platforms, building and optimizing full-stack applications used by hundreds of doctors. Focused on backend scalability, real-time communication features, and improving system reliability.</p>
              <div className={styles.timelineDates}>
                <span>August 2024 - Present</span>
              </div>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h2>SocSpace</h2>
              <img src="/assets/images/img-intenship/socspace.jpeg" alt="SocSpace Internship" />
              <p><strong>Software Developer Intern</strong></p>
              <p>Worked on machine learning-based solutions for architectural visualization, focusing on
                improving image processing accuracy and model performance.</p>
              <div className={styles.timelineDates}>
                <span>July 2023 - August 2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Journey;
