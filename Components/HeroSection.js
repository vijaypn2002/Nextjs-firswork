"use client"; // This makes the component a client component

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faAmazon, faApple, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  const [openWeek, setOpenWeek] = useState(null);

  const toggleWeek = (week) => {
    setOpenWeek(openWeek === week ? null : week);
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '4rem',
      backgroundColor: '#0e0b1a',
      color: 'white',
    },
    leftContent: {
      width: '60%',
      paddingRight: '3rem',
      overflowY: 'auto',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      lineHeight: '1.2',
      fontFamily: 'Poppins, sans-serif',
    },
    description: {
      fontSize: '1rem',
      marginBottom: '1.5rem',
      lineHeight: '1.6',
      fontFamily: 'Poppins, sans-serif',
    },
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      color: '#0e0b1a',
      padding: '0.75rem 1.25rem',
      borderRadius: '10px',
      fontWeight: 'bold',
      textDecoration: 'none',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    buttonIcon: {
      marginLeft: '0.5rem',
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1rem',
      marginTop: '1rem',
      color: '#FFD700',
    },
    stars: {
      display: 'flex',
      margin: '0 0.5rem',
      fontSize: '1.2rem',
    },
    featureList: {
      display: 'flex',
      gap: '0.75rem',
      fontSize: '0.9rem',
      listStyleType: 'none',
      padding: 0,
      flexWrap: 'wrap',
    },
    rightCard: {
      position: 'sticky',
      top: '6rem',
      backgroundColor: '#1c1c28',
      borderRadius: '8px',
      padding: '1.5rem',
      width: '30%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    },
    iconContainer: {
      display: 'flex',
      gap: '0.5rem',
      marginBottom: '1rem',
    },
    icon: {
      fontSize: '1.5rem',
      color: 'white',
    },
    courseCurriculumContainer: {
      marginTop: '3rem',
      padding: '2rem',
      backgroundColor: '#1c1c28',
      borderRadius: '8px',
      color: '#d1d5db',
    },
    curriculumHeading: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    weekContainer: {
      marginBottom: '1rem',
      padding: '1rem',
      backgroundColor: '#2b2f3a',
      borderRadius: '5px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    weekTitle: {
      fontWeight: 'bold',
      fontSize: '1rem',
      color: '#ffffff',
    },
    lessonCount: {
      fontSize: '0.9rem',
      color: '#a1a1b3',
    },
    lessonsList: {
      marginTop: '0.5rem',
      padding: '1rem',
      backgroundColor: '#2e3240',
      borderRadius: '5px',
      fontSize: '0.9rem',
      color: '#a1a1b3',
    },
    lessonItem: {
      padding: '0.3rem 0',
    },
  };

  const curriculumData = [
    {
      week: "Week 1",
      lessons: [
        "Introduction to Python",
        "Variables and DataTypes",
        "Different types of Operators in Python",
        "Introduction to Functions",
      ],
    },
    {
      week: "Week 2",
      lessons: [
        "Conditionals and Loops",
        "Functions and Modules",
        "File Handling",
        "Error and Exception Handling",
      ],
    },
    {
      week: "Week 3",
      lessons: [
        "Data Structures: Lists and Tuples",
        "Data Structures: Sets and Dictionaries",
        "Comprehensions",
        "Lambda and Map Functions",
      ],
    },
    {
      week: "Week 4",
      lessons: [
        "Object-Oriented Programming",
        "Classes and Objects",
        "Inheritance",
        "Polymorphism",
      ],
    },
  ];

  return (
    <section>
      <div style={styles.container}>
        <div style={styles.leftContent}>
          <h1 style={styles.heading}>Free DSA Course: Master Data Structures and Algorithms with LeetCode</h1>
          <p style={styles.description}>
            Unlock your programming potential with our comprehensive Free DSA Course! This course is designed to take you
            from the fundamentals to advanced concepts of Data Structures and Algorithms (DSA), all through engaging
            video lectures on YouTube.
          </p>
          <a href="#syllabus" style={styles.button}>
            DOWNLOAD SYLLABUS <FontAwesomeIcon icon={faDownload} style={styles.buttonIcon} />
          </a>
          <div style={styles.rating}>
            <span>4.5</span>
            <div style={styles.stars}>☆ ☆ ☆ ☆ ☆</div>
            <span>(1,280 students)</span>
          </div>
          <h3>Course Features</h3>
          <ul style={styles.featureList}>
            <li>Free and Accessible</li>
            <li>Hands-On Practice</li>
            <li>Comprehensive Curriculum</li>
            <li>Interview Preparation</li>
            <li>Detailed Explanations</li>
            <li>Community Support</li>
          </ul>

          {/* Course Curriculum Section */}
          <div style={styles.courseCurriculumContainer}>
            <h2 style={styles.curriculumHeading}>Course Curriculum</h2>
            {curriculumData.map((weekData, index) => (
              <div key={index}>
                <div style={styles.weekContainer} onClick={() => toggleWeek(index)}>
                  <div style={styles.weekTitle}>{weekData.week}</div>
                  <div style={styles.lessonCount}>
                    {weekData.lessons.length} LESSONS
                    <FontAwesomeIcon
                      icon={openWeek === index ? faChevronUp : faChevronDown}
                      style={{ marginLeft: '0.5rem' }}
                    />
                  </div>
                </div>
                {openWeek === index && (
                  <div style={styles.lessonsList}>
                    {weekData.lessons.map((lesson, lessonIndex) => (
                      <div key={lessonIndex} style={styles.lessonItem}>
                        {lesson}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Card with Sticky Image */}
        <div style={styles.rightCard}>
          <div style={styles.iconContainer}>
            <FontAwesomeIcon icon={faFacebook} style={styles.icon} />
            <FontAwesomeIcon icon={faAmazon} style={styles.icon} />
            <FontAwesomeIcon icon={faApple} style={styles.icon} />
            <FontAwesomeIcon icon={faYoutube} style={styles.icon} />
            <FontAwesomeIcon icon={faGoogle} style={styles.icon} />
          </div>
          <img src="/images/FirstSection.png" alt="Course Thumbnail" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
          <p style={{ fontSize: '0.9rem', color: '#a1a1b3', marginBottom: '1rem' }}><strong>COST:</strong> Free</p>
          <p style={{ fontSize: '0.9rem', color: '#a1a1b3', marginBottom: '1rem' }}><strong>DURATION:</strong> Self-paced</p>
          <button style={{ ...styles.button, backgroundColor: '#6c63ff', color: 'white' }}>Start Learning</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
