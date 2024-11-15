
"use client";

import React from "react";
import Image from "next/image";

const leftLogos = [
  "/images/swiggy.png",
  "/images/deloitte.png",
  "/images/zepto.png",
  "/images/cred.png",
];

const rightLogos = [
  "/images/flipkart.png",
  "/images/google.png",
  "/images/coindcx.png",
  "/images/amazon.png",
  "/images/microsoft.png",
  "/images/paytm.png",
];

const FourthSection = () => {
  return (
    <section className="fourth-section">
      <div className="content">
        <h2 className="title">
          Trusted by <span className="highlight">product</span> and{" "}
          <span className="highlight">engineering</span> teams worldwide
        </h2>
        <div className="stats">
          <div className="stat-item">
            <h3>15k+</h3>
            <p>students enrolled</p>
          </div>
          <div className="stat-item">
            <h3>320k+</h3>
            <p>instagram followers</p>
          </div>
          <div className="stat-item">
            <h3>15k+</h3>
            <p>youtube followers</p>
          </div>
        </div>
        <button className="testimonials-button">View Testimonials</button>
      </div>

      <div className="logos">
        {/* Left Logos Column */}
        <div className="logos-column left-logos">
          {[...leftLogos, ...leftLogos].map((src, index) => (
            <div key={index} className="logo">
              <Image src={src} alt="Logo" width={100} height={50} />
            </div>
          ))}
        </div>

        {/* Right Logos Column */}
        <div className="logos-column right-logos">
          {[...rightLogos, ...rightLogos].map((src, index) => (
            <div key={index} className="logo">
              <Image src={src} alt="Logo" width={100} height={50} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .fourth-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #0e0b1a;
          color: white;
          padding: 4rem;
          overflow: hidden;
          position: relative;
        }
        .content {
          max-width: 50%;
        }
        .title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }
        .highlight {
          color: #6c63ff;
        }
        .stats {
          display: flex;
          gap: 2rem;
          margin-top: 1rem;
        }
        .stat-item {
          text-align: center;
        }
        .stat-item h3 {
          font-size: 2rem;
          color: orange;
        }
        .testimonials-button {
          background-color: #6c63ff;
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          margin-top: 1.5rem;
        }
        .logos {
          display: flex;
          gap: 2rem;
          position: relative;
        }
        .logos-column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: relative;
          overflow: hidden;
          height: 300px;
        }
        .left-logos .logo {
          animation: scrollUp 10s linear infinite;
          opacity: 1;
          transition: opacity 1s ease;
        }
        .right-logos .logo {
          animation: scrollDown 10s linear infinite;
          opacity: 1;
          transition: opacity 1s ease;
        }
        .logo {
          background-color: #1a1b41;
          padding: 1rem;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
        }

        @keyframes scrollUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        /* Mobile-specific styling */
        @media (max-width: 768px) {
          .fourth-section {
            flex-direction: column;
            padding: 2rem;
          }
          .content {
            max-width: 100%;
            text-align: center;
          }
          .logos {
            display: flex;
            justify-content: center;
            margin-top: 2rem;
          }
          .stats {
            flex-direction: column;
            gap: 1rem;
          }
          .title {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FourthSection;
