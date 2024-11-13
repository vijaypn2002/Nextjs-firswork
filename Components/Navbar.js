// Components/Navbar.js
"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const styles = {
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      backgroundColor: '#0e0b1a',
      zIndex: 1000,
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 'bold',
    },
    logoImage: {
      height: '30px',
      marginRight: '0.5rem',
    },
    navLinks: {
      listStyle: 'none',
      display: 'flex',
      gap: '1.5rem',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: '500',
    },
    loginButton: {
      backgroundColor: '#6c63ff',
      color: 'white',
      padding: '0.5rem 1rem',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    mobileMenuButton: {
      display: 'none',
      color: 'white',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    mobileNavLinks: {
      display: isMobileMenuOpen ? 'flex' : 'none',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'absolute',
      top: '4rem',
      left: 0,
      width: '100%',
      backgroundColor: '#0e0b1a',
      padding: '1rem 0',
      textAlign: 'center',
      zIndex: 999,
    },
    mobileLink: {
      color: 'white',
      textDecoration: 'none',
      padding: '0.5rem 1rem',
      fontWeight: '500',
      width: '100%',
      textAlign: 'center',
    },
    // Media Query for Mobile
    '@media (max-width: 768px)': {
      navLinks: {
        display: 'none', // Hide navLinks in mobile view
      },
      mobileMenuButton: {
        display: 'block', // Show mobile menu button
      },
      navbar: {
        justifyContent: 'space-between', // Adjust layout for mobile
      },
    },
  };

  return (
    <>
      <nav style={styles.navbar}>
        <div style={styles.logo}>
          <img src="/images/logo.png" alt="logo" style={styles.logoImage} /> 
        </div>
        <div style={styles.mobileMenuButton} onClick={toggleMobileMenu}>
          <span style={{ fontSize: '24px', cursor: 'pointer' }}>☰</span>
        </div>
        <ul style={styles.navLinks} className="desktop-nav">
          <li><Link href="/courses" legacyBehavior><a style={styles.link}>Courses</a></Link></li>
          <li><Link href="/about" legacyBehavior><a style={styles.link}>About</a></Link></li>
          <li><Link href="/testimonials" legacyBehavior><a style={styles.link}>Testimonials</a></Link></li>
          <li><Link href="/contact" legacyBehavior><a style={styles.link}>Contact</a></Link></li>
        </ul>
        <ul style={styles.mobileNavLinks}>
          <li><Link href="/courses" legacyBehavior><a style={styles.mobileLink}>Courses</a></Link></li>
          <li><Link href="/about" legacyBehavior><a style={styles.mobileLink}>About</a></Link></li>
          <li><Link href="/testimonials" legacyBehavior><a style={styles.mobileLink}>Testimonials</a></Link></li>
          <li><Link href="/contact" legacyBehavior><a style={styles.mobileLink}>Contact</a></Link></li>
        </ul>
        <button style={styles.loginButton}>LOGIN</button>
      </nav>
      <div style={{ height: '80px' }} /> {/* Spacer to add gap between Navbar and HeroSection */}
    </>
  );
};

export default Navbar;
