// Components/TestimonialsSection.js
"use client";

import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">TESTIMONIALS</h2>
      <h3 className="testimonials-subtitle">Hear it from <span className="highlight">Your Peers</span></h3>

      <div className="testimonials-container">
        {/* Row 1 */}
        <div className="testimonial-row row-right">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="testimonial-card">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac bibendum erat, eget auctor sem.</p>
              <p><strong>John Doe</strong></p>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="testimonial-row row-left">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="testimonial-card">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac bibendum erat, eget auctor sem.</p>
              <p><strong>Jane Smith</strong></p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          padding: 4rem;
          text-align: center;
          background-color: #0e0b1a;
          color: #fff;
        }
        .testimonials-title {
          font-size: 1.2rem;
          color: #6c63ff;
          letter-spacing: 0.1rem;
        }
        .testimonials-subtitle {
          font-size: 2.5rem;
          margin: 0.5rem 0 2rem;
        }
        .highlight {
          color: #6c63ff;
        }
        .testimonials-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          overflow: hidden;
        }
        .testimonial-row {
          display: flex;
          gap: 1rem;
          animation: scroll 60s linear infinite;
        }
        .row-right {
          animation-direction: normal;
        }
        .row-left {
          animation-direction: reverse;
        }
        .testimonial-card {
          flex: 0 0 18%;
          background-color: #1a1b41;
          border-radius: 10px;
          padding: 1.5rem;
          color: #c2c4e2;
          text-align: left;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
        }

        /* Infinite scrolling effect */
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(calc(-100% - 10rem));
          }
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .testimonial-row {
            display: block;
          }
          .testimonial-card {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
