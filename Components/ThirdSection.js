// Components/ThirdSection.js
"use client";

import React from 'react';
import Image from 'next/image';

const codeImage = '/images/ThirdSection.png'; // Adjust this path if necessary

const ThirdSection = () => {
  return (
    <section className="third-section">
      <div className="section-header">
        <h2 className="header-title">
          Trusted by <span className="highlight">product</span> and <span className="highlight">engineering</span> teams worldwide
        </h2>
        <p className="header-description">
          Anirudh, who not only founded Code and Debug but also creates content on YouTube, is a computer engineer dedicated to assisting.
        </p>
        <div className="button-group">
          <button className="action-button watch-video">Watch Video</button>
          <button className="action-button request-callback">Request a Callback</button>
        </div>
      </div>
      <div className="content-container">
        <div className="image-container">
          <Image src={codeImage} alt="Code Interface" width={500} height={400} />
        </div>
        <div className="features-list">
          <div className="feature-item">
            <div className="feature-icon"></div>
            <p><strong>Comprehensive 16-Week Curriculum :</strong> Master Python, Data Structures, Algorithms, and more with our structured, in-depth syllabus.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"></div>
            <p><strong>Live Daily Sessions :</strong> Engage in 1.5-hour live classes Monday to Friday with real-time expert guidance and interaction.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"></div>
            <p><strong>Daily Doubt Solving :</strong> Participate in daily sessions to clarify concepts and stay on track.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"></div>
            <p><strong>Hands-On Practice :</strong> Solve 300+ LeetCode problems and advanced coding challenges to build problem-solving skills.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"></div>
            <p><strong>Sunday Contests :</strong> Compete with peers in weekly contests to solidify your learning.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"></div>
            <p><strong>Recorded Content Access :</strong> Access session recordings and bonus topics for continuous learning.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .third-section {
          background-color: #0e0b1a;
          color: #c2c4e2;
          padding: 4rem;
          text-align: center;
        }
        .section-header {
          margin-bottom: 3rem;
        }
        .header-title {
          font-size: 2.5rem;
          font-weight: bold;
        }
        .highlight {
          color: #6c63ff;
        }
        .header-description {
          margin: 1rem 0 2rem;
        }
        .button-group {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        .action-button {
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          border-radius: 10px;
          cursor: pointer;
        }
        .watch-video {
          background-color: #6c63ff;
          color: white;
          border: none;
        }
        .request-callback {
          background-color: transparent;
          color: #6c63ff;
          border: 2px solid #6c63ff;
        }
        .content-container {
          display: flex;
          gap: 2rem;
          margin-top: 3rem;
          align-items: flex-start;
        }
        .image-container {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        .features-list {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .feature-item {
          display: flex;
          align-items: flex-start;
          padding: 1rem;
          border-radius: 10px;
          font-size: 1rem;
          text-align: left;
          color: white;
        }
        .feature-icon {
          font-size: 1.5rem;
          margin-right: 1rem;
          color: #6c63ff;
        }

        /* Mobile-specific styling */
        @media (max-width: 768px) {
          .section-header {
            margin-bottom: 2rem;
          }
          .header-title {
            font-size: 1.8rem;
          }
          .content-container {
            flex-direction: column;
          }
          .features-list {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .image-container {
            margin-bottom: 2rem;
          }
          .action-button {
            width: 100%;
            padding: 1rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ThirdSection;
