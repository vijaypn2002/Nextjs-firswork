// Components/Footer.js
"use client";

import React from 'react';
import Image from 'next/image';
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="logo-section">
            <Image src="/images/Logo.png" alt="Code & Debug Logo" width={120} height={40} />
            <p className="description">
              Join our live classes to become the best at coding. These fun and easy sessions help
              you do well in hard interviews and succeed. Get ready to be creative and do better than ever!
            </p>
            <div className="subscribe-section">
              <input type="email" placeholder="Enter your email address" />
              <button>Subscribe</button>
            </div>
            <div className="social-icons">
              <FaTwitter />
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
              <FaLinkedin />
            </div>
          </div>

          <div className="footer-links">
            <div className="company">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Refunds Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
            <div className="contact">
              <h4>Contact</h4>
              <p>No. 3, Old Madras Rd, Sadanandanagar, Bennigana Halli, Bengaluru, Karnataka 560016</p>
              <p>Email: code&debug@gmail.com</p>
              <p>Phone: +91 8200090909</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Code&Debug Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #0e0b1a;
          color: #ffffff;
          padding: 2rem 0;
          width: 100%;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .footer-top {
          display: flex;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .logo-section {
          flex: 1.5;
          min-width: 300px;
        }
        .description {
          color: #c2c4e2; /* Gray color for description */
          margin: 1rem 0;
          font-size: 0.9rem;
          max-width: 400px;
        }
        .subscribe-section {
          display: flex;
          gap: 0.5rem;
          margin: 1rem 0;
        }
        .subscribe-section input {
          padding: 0.5rem;
          border-radius: 5px;
          border: none;
          font-size: 0.9rem;
          flex: 1;
          color: #333;
        }
        .subscribe-section input::placeholder {
          color: #c2c4e2; /* Gray color for placeholder text */
        }
        .subscribe-section button {
          background-color: #5a5dd6;
          color: #ffffff;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          font-size: 0.9rem;
        }
        .social-icons {
          display: flex;
          gap: 0.75rem;
          font-size: 1.2rem;
          margin-top: 1rem;
        }
        .footer-links {
          display: flex;
          flex: 1;
          justify-content: space-between;
          gap: 2rem;
          min-width: 300px;
        }
        .footer-links h4 {
          font-size: 1rem;
          color: #ffffff; /* Pure white for section headers */
          margin-bottom: 0.5rem;
        }
        .footer-links a {
          display: block;
          font-size: 0.9rem;
          color: #c2c4e2; /* Gray color for links */
          text-decoration: none;
          margin: 0.3rem 0;
        }
        .footer-links a:hover {
          color: #5a5dd6;
        }
        .contact p {
          color: #c2c4e2; /* Gray color for contact information */
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .footer-bottom {
          text-align: center;
          margin-top: 2rem;
          border-top: 1px solid #333;
          padding-top: 1rem;
          font-size: 0.8rem;
          color: #8183a5;
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .footer-links {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
          .logo-section,
          .footer-links {
            text-align: center;
          }
          .subscribe-section input {
            width: 100%;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
