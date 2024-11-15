"use client";

import React, { useState } from 'react';

const faqData = [
  {
    question: "I have no prior programming experience. Can I still register for classes?",
    answer: "The teaching style is awesome, making complex concepts easy to understand. The teacher's approach was not only informative but also engaging, keeping me hooked throughout the entire duration of the class. I highly recommend Code and Debug to anyone looking to expand their knowledge in DSA with Python. The class environment is very cool, where questions are encouraged and every student feels supported in their learning journey."
  },
  {
    question: "Is this class live or pre-recorded?",
    answer: "The classes are live with interactive sessions, providing a real-time learning experience with the instructor."
  },
  {
    question: "Do I need any prerequisites before starting the classes?",
    answer: "No prerequisites are needed! The classes are beginner-friendly and start from the basics."
  },
  {
    question: "What if I miss a live session? Can I catch up?",
    answer: "Recordings of live sessions are available to students, allowing you to review any material you may have missed."
  },
  {
    question: "Is there a refund available?",
    answer: "Yes, we offer a refund policy if you are not satisfied within the first week of the course."
  },
  {
    question: "Can I pay in installments (EMIs)?",
    answer: "Yes, we offer installment options to make payments easier for students."
  },
  {
    question: "Will the classes be in Hindi or English?",
    answer: "The classes are conducted in English to cater to a diverse group of learners."
  },
  // Additional FAQs
  {
    question: "What kind of support is available during the course?",
    answer: "Our instructors and support team are available to help you with any questions or issues you encounter."
  },
  {
    question: "How do I access the course materials?",
    answer: "All course materials are provided online through our learning management system."
  },
  {
    question: "Are there any assignments or projects?",
    answer: "Yes, each module includes hands-on projects to apply what you've learned."
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [seeMore, setSeeMore] = useState(false);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-left-column">
          <h2 className="section-subtitle">FAQs</h2>
          <h1 className="section-title">Frequently Asked Questions</h1>
        </div>
        <div className="faq-right-column">
          {(seeMore ? faqData : faqData.slice(0, 5)).map((item, index) => (
            <div key={index} className="question" onClick={() => toggleAnswer(index)}>
              <h3>
                {activeIndex === index ? "−" : "+"} {item.question}
              </h3>
              {activeIndex === index && <p>{item.answer}</p>}
            </div>
          ))}
          <div className="see-more" onClick={toggleSeeMore}>
            <span>{seeMore ? "See Less" : "See More"}</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .faq-section {
          padding: 2rem 0;
          background-color: #0e0b1a;
          color: #ffffff;
        }
        .faq-container {
          display: flex;
          gap: 5rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }
        .faq-left-column {
          flex: 1;
          position: sticky;
          top: 2rem;
          align-self: flex-start;
          padding-right: 1rem;
        }
        .faq-right-column {
          flex: 2;
          text-align: left;
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
          font-weight: bold;
        }
        .question {
          margin-bottom: 1rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .question h3 {
          font-size: 1.2rem;
          color: #ffffff;
        }
        .question h3:hover {
          color: #5a5dd6;
        }
        .question p {
          margin-top: 0.5rem;
          font-size: 1rem;
          color: #c2c4e2;
          line-height: 1.6;
        }
        .see-more {
          margin-top: 1.5rem;
          color: #5a5dd6;
          cursor: pointer;
        }
        .see-more span:hover {
          text-decoration: underline;
        }
        @media (max-width: 768px) {
          .faq-container {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }
          .faq-left-column {
            position: static;
            text-align: left;
            width: 100%;
            margin-bottom: 1rem;
          }
          .section-title {
            font-size: 1.8rem;
          }
          .question h3 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
