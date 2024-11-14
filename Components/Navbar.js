// Components/Navbar.js
"use client"; // Ensure this is at the top of the file

import React from 'react';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
          background-color: #0e0b1a;
          z-index: 1000;
        }
        .logo {
          display: flex;
          align-items: center;
          color: white;
          font-weight: bold;
        }
        .logoImage {
          height: 30px;
          margin-right: 0.5rem;
        }
        .navLinks {
          list-style: none;
          display: flex;
          gap: 1.5rem;
        }
        .link {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .link:hover {
          color: #6c63ff;
        }
        .loginButton {
          background-color: #6c63ff;
          color: white;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .loginButton:hover {
          background-color: #5a54e1;
        }
        .mobileMenuButton {
          display: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }
        .mobileNavLinks {
          display: ${isMobileMenuOpen ? 'flex' : 'none'};
          flex-direction: column;
          align-items: center;
          position: absolute;
          top: 4rem;
          left: 0;
          width: 100%;
          background-color: #0e0b1a;
          padding: 1rem 0;
          text-align: center;
          z-index: 999;
        }
        .mobileLink {
          color: white;
          text-decoration: none;
          padding: 0.5rem 1rem;
          font-weight: 500;
          width: 100%;
          text-align: center;
          transition: color 0.3s ease;
        }
        .mobileLink:hover {
          color: #6c63ff;
        }
        /* Media Query for Mobile */
        @media (max-width: 768px) {
          .navLinks {
            display: none;
          }
          .mobileMenuButton {
            display: block;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="logo">
          <img src="/images/Logo.png" alt="logo" className="logoImage" /> 
        </div>
        <div className="mobileMenuButton" onClick={toggleMobileMenu}>
          <span style={{ fontSize: '24px', cursor: 'pointer' }}>☰</span>
        </div>
        <ul className="navLinks">
          <li><Link href="/courses" legacyBehavior><a className="link">Courses</a></Link></li>
          <li><Link href="/about" legacyBehavior><a className="link">About</a></Link></li>
          <li><Link href="/testimonials" legacyBehavior><a className="link">Testimonials</a></Link></li>
          <li><Link href="/contact" legacyBehavior><a className="link">Contact</a></Link></li>
        </ul>
        <ul className="mobileNavLinks">
          <li><Link href="/courses" legacyBehavior><a className="mobileLink">Courses</a></Link></li>
          <li><Link href="/about" legacyBehavior><a className="mobileLink">About</a></Link></li>
          <li><Link href="/testimonials" legacyBehavior><a className="mobileLink">Testimonials</a></Link></li>
          <li><Link href="/contact" legacyBehavior><a className="mobileLink">Contact</a></Link></li>
        </ul>
        <button className="loginButton">LOGIN</button>
      </nav>
      <div style={{ height: '80px' }} /> {/* Spacer to add gap between Navbar and HeroSection */}
    </>
  );
};

export default Navbar;
