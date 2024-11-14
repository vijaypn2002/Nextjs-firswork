// Components/TestimonialsSection.js
"use client";

import React, { useState } from 'react';

const testimonials = [
  { text: "★★★ This course is fantastic. I learned a lot! The instructors were knowledgeable and supportive throughout.", user: "User 1" },
  { text: "★★ Really insightful content, well-organized and thorough! I felt prepared for every concept covered.", user: "User 2" },
  { text: "★★★★★  I highly recommend this to all beginners. This course gave me the confidence to start coding.", user: "User 3" },
  { text: "★  Great course with excellent support. The interactive sessions and Q&A were really helpful!", user: "User 4" },
  { text: "★★★  Best investment in my learning journey. This course has exceeded my expectations in every way.", user: "User 5" },
  { text: "★★★★  Thoroughly enjoyed the interactive classes. I feel much more confident in my coding skills.", user: "User 6" },
  { text: "★★★  Helped me gain confidence in coding. I loved the project-based approach which made learning fun.", user: "User 7" },
  { text: "★★★★★  The mentors were very supportive and always available for doubts. A great learning experience!", user: "User 8" },
  { text: "★★  Loved the pace and structure of the course. The practical exercises made a huge difference.", user: "User 9" },
  { text: "★★★ Would highly recommend to others! This course has everything you need to succeed in coding.", user: "User 10" }
];

const TestimonialsSection = () => {
  const [isPausedTop, setIsPausedTop] = useState(false);
  const [isPausedBottom, setIsPausedBottom] = useState(false);

  return (
    <section className="testimonials-section">
      <div className="header">
        <h2 className="section-subtitle">TESTIMONIALS</h2>
        <h1 className="section-title">
          Hear it from <span className="highlight">Your Peers</span>
        </h1>
      </div>
      <div className="testimonials-container">
        
        {/* Top Row */}
        <div 
          className={`row top-row ${isPausedTop ? 'paused' : ''}`}
          onMouseEnter={() => setIsPausedTop(true)}
          onMouseLeave={() => setIsPausedTop(false)}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card"
            >
              <p>{testimonial.text}</p>
              <span>- {testimonial.user}</span>
            </div>
          ))}
        </div>
        
        {/* Bottom Row */}
        <div 
          className={`row bottom-row ${isPausedBottom ? 'paused' : ''}`}
          onMouseEnter={() => setIsPausedBottom(true)}
          onMouseLeave={() => setIsPausedBottom(false)}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index + testimonials.length} 
              className="testimonial-card"
            >
              <p>{testimonial.text}</p>
              <span>- {testimonial.user}</span>
            </div>
          ))}
        </div>

      </div>
      <style jsx>{`
        .testimonials-section {
          text-align: center;
          padding: 2rem 0;
          position: relative;
          overflow: hidden;
          background-color: #0e0b1a;
        }
        .section-subtitle {
          font-size: 1rem;
          color: #8183a5;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          margin-bottom: 0.5rem;
        }
        .section-title {
          font-size: 2.5rem;
          color: #ffffff;
          margin-bottom: 1rem;
          font-weight: bold;
        }
        .highlight {
          background: linear-gradient(to right, #5a5dd6, #aa66d5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .testimonials-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          overflow: hidden;
          position: relative;
          padding: 1.5rem;
        }

        .row {
          display: flex;
          gap: 2rem;
          white-space: nowrap;
          animation: scroll 80s linear infinite;
        }
        
        .top-row {
          animation-direction: normal;
        }
        
        .bottom-row {
          animation-direction: reverse;
        }

        .paused {
          animation-play-state: paused !important;
        }

        .testimonial-card {
          background-color: #1c1e28;
          padding: 2rem;
          border-radius: 12px;
          color: #c2c4e2;
          min-width: 300px;
          max-width: 400px;
          height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: left;
          word-wrap: break-word;
          transition: transform 0.3s ease;
        }
        
        .testimonial-card:hover {
          transform: scale(1.05);
        }

        .testimonial-card p {
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: normal;
        }

        .testimonial-card span {
          display: block;
          margin-top: 0.5rem;
          font-size: 0.9rem;
          color: #888;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        /* Adding gradient transparency on edges */
        .testimonials-section::before, .testimonials-section::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 200px;
          background: linear-gradient(to right, #0e0b1a, transparent);
          z-index: 1;
        }
        
        .testimonials-section::before {
          left: 0;
        }
        
        .testimonials-section::after {
          right: 0;
          transform: rotate(180deg);
        }

        /* Mobile-specific styling */
        @media (max-width: 768px) {
          .testimonial-card {
            width: 250px;
            height: 200px;
          }
          .section-title {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
