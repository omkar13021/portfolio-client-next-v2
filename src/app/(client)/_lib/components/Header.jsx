"use client"
import Link from "next/link";
import styles from '../styles/header.module.css';
import { useState, useEffect } from "react";
import Head from "next/head";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleBooking = () => {
        window.open('https://calendly.com/omkarpanchal-cse/30min-business-consultation', '_blank');
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Omkar Panchal",
                            "url": "https://omkarcodes.online",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "Business Inquiry",
                                "url": "https://calendly.com/omkarpanchal-cse/30min-business-consultation"
                            },
                            "potentialAction": {
                                "@type": "CommunicateAction",
                                "target": "https://calendly.com/omkarpanchal-cse/30min-business-consultation",
                                "name": "Business Inquiry"
                            }
                        }),
                    }}
                />
            </Head>
            
            {/* Header */}
            <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
                <nav className={styles.navbar}>
                    {/* Logo */}
                    <Link href="/" className={styles.logo}>
                        <img src="/assets/images/logo.svg" alt="Omkar Panchal Logo" />
                        <span>Omkar</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={styles.navlink}>
                        <Link href="/" aria-label="Home">Home</Link>
                        <Link href="/blogs" aria-label="Blogs">Blogs</Link>
                        <Link href="/projects" aria-label="Projects">Projects</Link>
                        <Link href="/contact" aria-label="Contact Me">Contact Me</Link>
                    </div>

                    {/* CTA Button */}
                    <button className={styles.businessInquiryButton} onClick={handleBooking}>
                        Business Inquiry
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className={`${styles.mobileMenuToggle} ${isMobileMenuOpen ? styles.open : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            <div 
                className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.open : ''}`}
                onClick={closeMobileMenu}
            />

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                <div className={styles.mobileMenuHeader}>
                    <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
                        <img src="/assets/images/logo.svg" alt="Omkar Panchal Logo" />
                        <span>Omkar</span>
                    </Link>
                    <button 
                        className={styles.mobileMenuClose}
                        onClick={closeMobileMenu}
                        aria-label="Close mobile menu"
                    >
                        ×
                    </button>
                </div>

                <nav className={styles.mobileNavLinks}>
                    <Link href="/" onClick={closeMobileMenu}>Home</Link>
                    <Link href="/about" onClick={closeMobileMenu}>About Me</Link>
                    <Link href="/blogs" onClick={closeMobileMenu}>Blogs</Link>
                    <Link href="/projects" onClick={closeMobileMenu}>Projects</Link>
                    <Link href="/contact" onClick={closeMobileMenu}>Contact Me</Link>
                </nav>

                <button 
                    className={styles.businessInquiryButton} 
                    onClick={() => {
                        handleBooking();
                        closeMobileMenu();
                    }}
                    style={{ width: '100%' }}
                >
                    Business Inquiry
                </button>
            </div>
        </>
    );
};

export default Header;