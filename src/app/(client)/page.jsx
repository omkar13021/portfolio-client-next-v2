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
                A Full Stack Developer and Blogger focused on developing software applications and building 
                modules that lead to the success of the overall product. I design and code beautifully 
                simple things, and I love what I do.
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
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Projects Completed</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>3+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>25+</div>
              <div className={styles.statLabel}>Happy Clients</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Client Satisfaction</div>
            </div>
          </div>
        </section>
      </main>
        {/* About Section */}
        <section className={styles.aboutPage}>
          <div className={styles.aboutContainer}>
            <h1>Who Am I? Get to Know Me!</h1>
            <p>
              I am a Computer Engineering graduate from <strong>Sinhgad Institute, Pune</strong>, and currently working as an 
              <strong> Associate Software Engineer at AsIndia Innovations</strong>, while also taking on freelance projects 
              as a programmer specializing in web development and cloud hosting/deployment. 
            </p>
            <p>
              I enjoy sharing the technology-related knowledge I've gained over the years to help others in the developer 
              community. Check out some of my blogs in the Blog section, and feel free to connect or follow me on{' '}
              <a href='https://www.linkedin.com/in/omkarpanchalcse/' target='_blank' rel='noopener noreferrer'>
                LinkedIn
              </a>, where I post useful content related to programming.
            </p>
            <p>
              <strong>I am open to freelance projects</strong>, so if you have a project that matches my skills, 
              please feel free to contact me!
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className={styles.skillsSection}>
          <h1 className={styles.skillsTitle}>Technical Skills</h1>
          <div className={styles.skillsContainer}>
            <ul>
              <li>
                <strong>Frontend Development:</strong> HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, 
                Responsive Design, UI/UX Design Principles
              </li>
              <li>
                <strong>Backend Development:</strong> Node.js, Express.js, RESTful APIs, MongoDB, 
                Redis, Database Design
              </li>
              <li>
                <strong>DevOps & Deployment:</strong> Docker, GitHub Actions, AWS Services, Nginx, 
                CI/CD Pipelines, Server Management
              </li>
              <li>
                <strong>Real-Time Technologies:</strong> WebRTC, Socket.io, Real-time Communication, 
                Live Streaming Applications
              </li>
              <li>
                <strong>Cloud & Infrastructure:</strong> AWS EC2, Domain Management, SEO Optimization, 
                Performance Monitoring, Security Best Practices
              </li>
              <li>
                <strong>Development Tools:</strong> Git, GitHub, VS Code, Postman, Chrome DevTools, 
                Agile Methodologies
              </li>
            </ul>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className={styles.internshipSection}>
          <h1 className={styles.experienceTitle}>Professional Journey</h1>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h2>AsIndia Innovations</h2>
                <img src="/assets/images/img-intenship/asindia.svg" alt="AsIndia Innovations" />
                <p><strong>Associate Software Engineer</strong></p>
                <p>Developing scalable web applications and contributing to innovative software solutions.</p>
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
                <p>Worked on social media platform features and gained experience in full-stack development.</p>
                <div className={styles.timelineDates}>
                  <span>July 2023 - August 2023</span>
                </div>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h2>Oasis Infobyte</h2>
                <img src="/assets/images/img-intenship/oasis.jpg" alt="Oasis Internship" />
                <p><strong>Web Designer & Development Intern</strong></p>
                <p>Focused on creating responsive web designs and implementing modern UI/UX principles.</p>
                <div className={styles.timelineDates}>
                  <span>July 2022</span>
                </div>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h2>ACMC Technologies</h2>
                <img src="/assets/images/img-intenship/acmcgrade.jpg" alt="ACMC Internship" />
                <p><strong>Web Development Intern</strong></p>
                <p>Started my professional journey learning web development fundamentals and best practices.</p>
                <div className={styles.timelineDates}>
                  <span>April 2022 - June 2022</span>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Home;
