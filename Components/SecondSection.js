"use client"; 

import React from 'react';
import Image from 'next/image';

const instructorImage = '/images/SecondSection.png'; 

const SecondSection = () => {
  return (
    <section className="second-section">
      <div className="start-message">
        <h2 className="section-heading">
          Get Started Today ! <br />
          <span className="highlight-dsb">Embark on your journey to become a</span> <span className="highlight-dsa">DSA  <br />expert</span>. <span className="highlight-dsb"> Subscribe to our</span> <span className="highlight-youtube">YouTube channel</span> <span className="highlight-dsb"> and  <br />start learning now!</span>
        </h2>
      </div>
      
      <div className="instructor-container">
        <div className="instructor-content">
          <h2 className="instructor-heading">Meet Your Instructor</h2>
          <p className="instructor-description">
            Anirudh, who not only founded Code and Debug but also creates content on YouTube, 
            is a computer engineer dedicated to assisting students in preparing for interviews 
            that test their knowledge of Data Structures and Algorithms (DSA) in Python. His 
            expertise and guidance have reached nearly 15,000 students through live sessions, 
            significantly impacting their abilities to successfully navigate the interview process. 
            Anirudh’s training has empowered a substantial number of these students to not only 
            crack their interviews but also to excel in the coding segments of these assessments. 
            His dedication to education and skill development in the realm of computer engineering 
            has made him a pivotal figure for aspiring programmers looking to enhance their 
            competencies in DSA and secure their places in the tech industry.
          </p>
        </div>
        <div className="instructor-image">
          <Image
            src={instructorImage}
            alt="Instructor"
            width={300}  
            height={300} 
            style={{ borderRadius: '10px' }}
          />
        </div>
      </div>

      <style jsx>{`
        .second-section {
          background-color: #0e0b1a;
          color: white;
          padding: 4rem;
          text-align: center;
        }
        .start-message {
          text-align: center;
          margin-bottom: 2rem;
        }
        .section-heading {
          font-size: 2rem; /* Same size for entire heading */
          font-weight: bold;
          color: #0000FF;
          line-height: 1.5;
        }
        .highlight-dsa {
          color: #0000FF; /* Color for "DSA expert" */
        }
        .highlight-dsb {
          color: #fff; /* Color for surrounding text */
        }
        .highlight-youtube {
          color: #0000FF; /* Color for "YouTube channel" */
        }
        .instructor-container {
          display: flex;
          align-items: center;
           background: url(/images/Pattern.png), linear-gradient(107.65deg, #37328f 2.73%, #252078 62.07%);
          border-radius: 10px;
          padding: 4rem;
        
        }
        .instructor-content {
          width: 60%;
          padding: 1rem;
          color: #c2c4e2;
          font-size: 1rem;
          text-align: left; /* Left align text for desktop */
        }
       .instructor-heading {
  font-size: 2rem;
  color: white;
  margin-bottom: 1rem;
  font-weight: bold; /* Makes the heading bold */
}

        .instructor-description {
          line-height: 1.6;
        }
        .instructor-image {
          width: 40%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Mobile-specific styling */
        @media (max-width: 768px) {
          .second-section {
            padding: 2rem;
          }
          .section-heading {
            font-size: 1.5rem;
          }
          .instructor-container {
            flex-direction: column;
            padding: 1.5rem;
          }
          .instructor-content {
            width: 100%;
            padding: 0;
            font-size: 0.9rem;
            text-align: center; /* Center align text for mobile */
          }
          .instructor-image {
            width: 80%;
            margin-top: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SecondSection;
