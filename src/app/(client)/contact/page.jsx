"use client";
import axios from "axios";
import { useState } from "react";
import styles from '../_lib/styles/contact.module.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await axios.post('/api/message', { name, email, message });
            setSuccess('Message sent successfully! I\'ll get back to you soon.');
            console.log(response);
        } catch (error) {
            setError('Error sending message. Please try again.');
            console.error('Error sending message:', error);
        } finally {
            setLoading(false);
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/omkarpanchalcse',
            icon: '/assets/icons/linkedin.png',
            color: '#0077B5'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/omkar755292',
            icon: '/assets/icons/github.png',
            color: '#333'
        },
        {
            name: 'Twitter',
            url: 'https://x.com/omkar15183788',
            icon: '/assets/icons/twitter.png',
            color: '#1DA1F2'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/onkaar._',
            icon: '/assets/icons/instagram.png',
            color: '#E4405F'
        },
        {
            name: 'Email',
            url: 'mailto:omkarpanchal.cse@gmail.com',
            icon: '/assets/icons/email.png',
            color: '#EA4335'
        }
    ];

    return (
        <main className={styles.contactPage}>
            {/* Header Section */}
            <section className={styles.contactHeader}>
                <div className={styles.headerContent}>
                    <div className={styles.headerText}>
                        <h1 className={styles.pageTitle}>Contact Me</h1>
                        <p className={styles.pageDescription}>
                            Get in touch for project collaborations, questions, or just to say hello.
                        </p>
                    </div>
                    <div className={styles.avatarContainer}>
                        <img src="/assets/images/avatar.svg" alt="Omkar Panchal Avatar" className={styles.avatar} />
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className={styles.contactSection}>
                <div className={styles.contactContainer}>
                    {/* Contact Info */}
                    <div className={styles.contactInfo}>
                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div>
                                <h3>Phone</h3>
                                <p>Available for calls</p>
                                <a href="tel:+91-9011261543">+91-9011261543</a>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div>
                                <h3>Email</h3>
                                <p>Send me an email</p>
                                <a href="mailto:omkarpanchal.cse@gmail.com">omkarpanchal.cse@gmail.com</a>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div>
                                <h3>Location</h3>
                                <p>Based in</p>
                                <span>Pune, Maharashtra, India</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className={styles.socialSection}>
                            <h3>Connect with me</h3>
                            <div className={styles.socialLinks}>
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialLink}
                                        title={social.name}
                                        style={{ animationDelay: `${2.2 + index * 0.1}s` }}
                                    >
                                        <img src={social.icon} alt={social.name} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={styles.contactFormContainer}>
                        <div className={styles.formHeader}>
                            <h2>Send me a message</h2>
                            <p>Fill out the form below and I'll get back to you as soon as possible.</p>
                        </div>

                        <form className={styles.contactForm} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows="6"
                                    placeholder="Tell me about your project or just say hello!"
                                    required
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className={styles.submitButton}
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span className={styles.spinner}></span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <polygon points="22,2 15,22 11,13 2,9 22,2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </>
                                )}
                            </button>

                            {error && (
                                <div className={styles.message + ' ' + styles.error}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                    {error}
                                </div>
                            )}

                            {success && (
                                <div className={styles.message + ' ' + styles.success}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <polyline points="22,4 12,14.01 9,11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    {success}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;
