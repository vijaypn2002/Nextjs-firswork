
"use client";

import React from 'react';
import Image from 'next/image';

const certificateImage = '/images/Certificate.png'; 

const FifthSection = () => {
  return (
    <section className="fifth-section">
      <div className="content-container">
        <h2 className="section-title">Get Certified from <span className="highlight">Code & Debug</span></h2>
        <p className="section-description">
          Upon successful completion of this course, we will provide the course completion certificate.
        </p>
      </div>
      <div className="certificate-container">
        <Image src={certificateImage} alt="Certificate of Completion" width={600} height={400} className="certificate-image" />
      </div>

      <style jsx>{`
        .fifth-section {
          padding: 4rem 2rem;
          background-color: #0e0b1a;
          text-align: center;
          color: #ffffff;
        }

        .content-container {
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 2rem;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .highlight {
          color: #6c63ff;
        }

        .section-description {
          color: #c2c4e2;
          font-size: 1rem;
          margin-bottom: 2rem;
        }

        .certificate-container {
          display: flex;
          justify-content: center;
        }

        .certificate-image {
          border-radius: 10px;
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
        }

        /* Mobile-specific styling */
        @media (max-width: 768px) {
          .section-title {
            font-size: 1.5rem;
          }

          .section-description {
            font-size: 0.9rem;
          }

          .certificate-image {
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default FifthSection;
