"use client"
import styles from '../(client)/_lib/styles/home.module.css';

const Home = () => {
  const handleViewProjects = () => {
    window.location.href = '/projects';
  };

  const handleContactMe = () => {
    window.location.href = '/contact';
  };

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className={`${styles.homeSection} animate-fadeIn`}>
          <div className={styles.homeContainer}>
            {/* Hero Content */}
            <div className={`${styles.heroContent} animate-slideInLeft`}>
              <h1 className={styles.heroTitle}>
                Hello there! I'm <span className={styles.highlight}>Omkar</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Software Engineer specializing in building scalable full-stack applications that drive business impact.
                I transform complex problems into elegant solutions, delivering high-performance systems used by hundreds
                of users while maintaining clean, maintainable code.
              </p>

              <div className={styles.heroActions}>
                <button className={styles.heroCTA} onClick={handleViewProjects}>
                  View My Work
                </button>
                <button className={styles.heroSecondary} onClick={handleContactMe}>
                  Get In Touch
                </button>
                <a
                  href='/cv/omkarpanchal_resume.pdf'
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadResume}
                >
                  <img className={styles.downloadIcon} src='/assets/icons/file.png' alt='Download icon' />
                  Resume
                </a>
              </div>
            </div>

            {/* Hero Visual */}
            <div className={`${styles.heroVisual} animate-slideInRight`}>
              <img
                src='/assets/images/laptop.svg'
                alt="Developer workspace illustration"
                className={styles.heroImage}
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Production Projects</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>2+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>12+</div>
              <div className={styles.statLabel}>Tech Stack Expertise</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>On-Time Delivery</div>
            </div>
          </div>
        </section>
      </main>
      {/* About Section */}
      <section className={styles.aboutPage}>
        <div className={styles.aboutContainer}>
          <h1>Who Am I? Get to Know Me!</h1>
          <p>
            <strong>Software Engineer at Zodix Health</strong> with a Computer Engineering degree from <strong>Sinhgad Institute, Pune</strong>.
            I build and scale healthcare platforms that serve hundreds of medical professionals daily, focusing on performance,
            reliability, and user-centric design. My approach combines strong technical fundamentals with a deep understanding
            of business requirements to deliver measurable impact.
          </p>
          <p>
            My expertise spans the full development lifecycle—from architecting scalable backend systems and designing intuitive
            frontends to deploying cloud infrastructure and implementing real-time features. I'm passionate about writing clean,
            maintainable code and sharing knowledge with the developer community. Follow me on{' '}
            <a href='https://www.linkedin.com/in/omkarpanchalcse/' target='_blank' rel='noopener noreferrer'>
              LinkedIn
            </a>{' '}for insights on software engineering and modern web technologies.
          </p>
          <p>
            <strong>Currently exploring new opportunities</strong> to work on challenging problems, build impactful products,
            and contribute to teams that value technical excellence and innovation.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skillsSection}>
        <h1 className={styles.skillsTitle}>Technical Skills</h1>
        <div className={styles.skillsContainer}>
          <ul>
            <li>
              <strong>Full-Stack Development:</strong> React.js, Next.js, Node.js, Express.js, HTML5, CSS3, JavaScript (ES6+)
            </li>
            <li>
              <strong>Backend & Database:</strong> RESTful APIs, Microservices, MongoDB, Redis, Database Design, Server-Side Architecture
            </li>
            <li>
              <strong>Cloud & DevOps:</strong> AWS (EC2, S3), Docker, CI/CD Pipelines, GitHub Actions, Nginx, Infrastructure Management
            </li>
            <li>
              <strong>Real-Time Technologies:</strong> WebRTC, Socket.io, Live Streaming, Real-Time Communication, WebSockets
            </li>
            <li>
              <strong>Performance & Security:</strong> Application Security, SEO Optimization, Performance Monitoring, Best Practices
            </li>
            <li>
              <strong>Tools & Methodologies:</strong> Git, GitHub, VS Code, Postman, Agile Development, Code Reviews, Team Collaboration
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
