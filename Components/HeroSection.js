"use client"; 

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faAmazon, faApple, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  const [openWeek, setOpenWeek] = useState(null);

  const toggleWeek = (week) => {
    setOpenWeek(openWeek === week ? null : week);
  };

  const curriculumData = [
    {
      week: "Week 1",
      lessons: [
        "Time and Space Complexity: Understand how to evaluate the efficiency of algorithms.",
        "Basic Maths Logic Buildup: Solve problems involving digit counting, reversing numbers, checking palindromes, calculating GCD/HCF, identifying Armstrong numbers, and more.",
        "Recursion Basics: Learn the principles of recursion through practical problems like printing sequences, calculating factorials, reversing arrays, and checking string palindromes.",
        "Hashing Techniques: Get introduced to hashing, count frequencies within ranges, and find elements with the highest or lowest frequency."
      ]
    },
    {
      week: "Week 2",
      lessons: [
        "Master different sorting techniques such as Selection Sort, Bubble Sort, Insertion Sort, Merge Sort, and Quick Sort.",
        "Implement recursive versions of Bubble Sort and Insertion Sort."
      ]
    },
    {
      week: "Week 3",
      lessons: [
        "Easy Level: Merge sorted arrays, find missing numbers, and identify maximum consecutive ones.",
        "Medium Level: Tackle 2Sum problems, Kadane's Algorithm for maximum subarray sum, stock buy and sell problems, container with most water, and matrix manipulations like rotation and spiral printing.",
        "Hard Level: Solve complex problems like 3Sum and maximum product subarrays."
      ]
    },
    {
      week: "Week 4",
      lessons: [
        "Apply binary search on 1D arrays to find elements, implement lower and upper bounds, and search in rotated sorted arrays.",
        "Find minimum elements in rotated arrays and count occurrences in sorted arrays."
      ]
    },
    {
      week: "Week 5",
      lessons: [
        "Easy Level: Check for anagrams and group them efficiently.",
        "Medium Level: Find the longest palindromic substring without using dynamic programming."
      ]
    },
    {
      week: "Week 6",
      lessons: [
        "Singly Linked Lists: Learn operations like insertion, deletion, searching, and design of linked lists.",
        "Doubly Linked Lists: Understand how to insert, delete, and reverse nodes.",
        "Medium Level Problems: Find the middle of a linked list, reverse linked lists both iteratively and recursively, detect and find loops, merge sorted lists, reorder lists, and remove Nth nodes from the end."
      ]
    },
    {
      week: "Week 7",
      lessons: [
        "Basics: Check set bits, determine odd or even numbers, verify powers of two, count set bits, and perform bit-level swaps.",
        "Problems: Flip bits to convert numbers, find numbers appearing odd times, sum integers without arithmetic operators, and reverse bits."
      ]
    },
    {
      week: "Week 8",
      lessons: [
        "Generate binary strings without consecutive ones, generate parentheses combinations, and print all subsequences or power sets.",
        "Solve combination sum problems and tackle word search and word break challenges."
      ]
    },
    {
      week: "Week 9",
      lessons: [
        "Implement stacks and queues using arrays and linked lists.",
        "Design stacks using queues and vice versa.",
        "Check for balanced parentheses and implement a Min Stack."
      ]
    },
    {
      week: "Week 10",
      lessons: [
        "Medium Level: Find the longest substring without repeating characters and perform character replacement tasks.",
        "Hard Level: Work on problems like the longest substring with at most K distinct characters and the minimum window substring."
      ]
    },
    {
      week: "Week 11",
      lessons: [
        "Introduction: Learn about priority queues, min heaps, and max heaps.",
        "Medium Level Problems: Find the Kth largest and smallest elements, and merge M sorted lists.",
        "Hard Level Problems: Find the median from a data stream and identify K most frequent elements."
      ]
    },
    {
      week: "Week 12",
      lessons: [
        "Easy Level: Assign cookies optimally, solve the fractional knapsack problem, find minimum coins, and handle change-making scenarios.",
        "Medium/Hard Level: Schedule meetings, solve jump game problems, calculate minimum platforms needed, perform job sequencing, and merge intervals."
      ]
    },
    {
      week: "Week 13",
      lessons: [
        "Traversals: Learn pre-order, in-order, post-order, and level-order traversals both recursively and iteratively.",
        "Medium Level Problems: Determine tree height, check for balance, calculate diameter, find maximum path sums, and invert binary trees.",
        "Hard Level Problems: Construct binary trees from traversals, serialize and deserialize trees, and identify subtrees."
      ]
    },
    {
      week: "Week 14",
      lessons: [
        "Introduction: Understand BST properties and basic operations like searching, finding min/max, insertion, and deletion.",
        "Practice Problems: Implement ceil and floor functions, find Kth smallest/largest elements, validate BSTs, find lowest common ancestors, and construct BSTs from preorder traversals."
      ]
    },
    {
      week: "Week 15",
      lessons: [
        "Introduction: Learn about graph types, representations, and connected components.",
        "Traversals: Perform BFS and DFS on graphs.",
        "Advanced Problems: Solve challenges involving water flow, rotten oranges, flood fill algorithms, and detect cycles using topological sorting."
      ]
    },
    {
      week: "Week 16",
      lessons: [
        "1D DP: Solve climbing stairs problems, maximize sums of non-adjacent elements, and handle house robber scenarios.",
        "2D/3D DP and Grids: Navigate grid paths and unique path problems with obstacles.",
        "DP on Subsequences: Tackle subset sums and coin change problems.",
        "DP on Strings: Find longest common subsequences and substrings, and decode ways.",
        "DP on Stocks: Optimize stock buying and selling strategies across various scenarios.",
        "DP on Longest Increasing Subsequence: Identify and print the longest increasing subsequences."
      ]
    },
    {
      week: "Week 17",
      lessons: [
        "Basics: Implement Trie data structures for insert, search, and prefix functionalities.",
        "Advanced Problems: Find the longest string with all prefixes, count distinct substrings, and solve maximum XOR problems."
      ]
    },
  ];

  return (
    <section className="hero-container">
      <div className="left-content">
        <h1 className="hero-heading">Free DSA Course: Master Data <br />Structures and Algorithms with<br /> LeetCode</h1>
        <p className="hero-description">
          Unlock your programming potential with our comprehensive Free DSA Course!<br /> This course is designed to take you from the fundamentals to advanced concepts of Data Structures<br /> and Algorithms (DSA), all through engaging video lectures on YouTube. Each topic is <br />meticulously covered with detailed theory explanations and hands-on practice using<br /> LeetCode problems, ensuring you're well-prepared for technical interviews and real-world <br />coding challenges
        </p>
        <a href="#syllabus" className="download-button">
          DOWNLOAD SYLLABUS <FontAwesomeIcon icon={faDownload} className="button-icon" />
        </a>
        <div className="rating">
          <span>4.5</span>
          <div className="stars">☆ ☆ ☆ ☆ ☆</div>
          <span>(1,280 students)</span>
        </div>
        <h3 className="course-features-heading">Course Features</h3>
<ul className="feature-list">
  <li>Free and Accessible</li>
  <li>Hands-On Practice</li>
  <li>Comprehensive Curriculum</li>
  <li>Interview Preparation</li>
  <li>Detailed Explanations</li>
  <li>Community Support</li>
</ul>

       
        <div className="course-curriculum-container">
          <h2 className="curriculum-heading">Course Curriculum</h2>
          {curriculumData.map((weekData, index) => (
            <div key={index} className="week-section">
              <div
                className="week-container"
                onClick={() => toggleWeek(index)}
              >
                <span className="week-title">
                  {openWeek === index ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />} {weekData.week}
                </span>
                <span className="lesson-count">{weekData.lessons.length} LESSONS</span>
              </div>
              {openWeek === index && (
                <div className="lessons-list">
                  {weekData.lessons.map((lesson, lessonIndex) => (
                    <div key={lessonIndex} className="lesson-item">
                      {lesson}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="right-card">
        <div className="icon-container">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
          <FontAwesomeIcon icon={faAmazon} className="icon" />
          <FontAwesomeIcon icon={faApple} className="icon" />
          <FontAwesomeIcon icon={faYoutube} className="icon" />
          <FontAwesomeIcon icon={faGoogle} className="icon" />
        </div>
        <img
          src="/images/FirstSection.png"
          alt="Course Thumbnail"
          className="course-thumbnail"
        />
        <p className="card-info"><strong>COST:</strong> Free</p>
        <p className="card-info"><strong>DURATION:</strong> Self-paced</p>
        <button className="start-button">Start Learning</button>
      </div>

    
      <style jsx>{`
        .hero-container {
          display: flex;
          justify-content: space-between;
          padding: 4rem;
          background-color: #0e0b1a;
          color: white;
        }

        .left-content {
          width: 65%;
          padding-right: 2rem;
          max-height: 600px; /* Adjust the max-height as needed */
          overflow-y: auto;
        }

        .left-content::-webkit-scrollbar {
          width: 0;
          background: transparent;
        }

        .left-content {
          scrollbar-width: none; /* Firefox */
        }

        .hero-heading {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .hero-description {
          font-size: 1rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .download-button {
          display: inline-flex;
          align-items: center;
          background-color: #ffffff;
          color: #3A4BD5;
          padding: 0.75rem 1.25rem;
          border-radius: 20px;
          font-weight: bold;
          text-decoration: none;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          margin-bottom: 1.5rem;
        }

        .rating {
          display: flex;
          align-items: center;
          font-size: 1rem;
          margin-top: 1rem;
          color: #ffd700;
        }

        .stars {
          display: flex;
          margin: 0 0.5rem;
          font-size: 1.2rem;
        }

        .course-features-heading {
          font-size: 1.5rem;
          margin-top: 2rem;
        }
.feature-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 1.5rem;
    font-size: 1rem;
    padding: 0;
    list-style: none;
    color: #a1a1b3;
    margin-top: 1rem;
  }

  .feature-list li {
    position: relative;
    padding: 0 1.5rem; /* Add space on both sides */
  }

  /* Adding dots on both sides except for the first and last items */
    .feature-list li:not(:first-child)::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #a1a1b3;
  }



        .right-card {
          position: sticky;
          top: 1rem;
          right: 2rem;
          width: 30%;
          border-radius: 8px;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
        }

        .icon-container {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .icon {
          font-size: 1.5rem;
          color: white;
        }

        .course-thumbnail {
          width: 100%;
          border-radius: 8px;
          margin-bottom: 1rem;
        }

        .card-info {
          font-size: 1rem;
          color: #a1a1b3;
          margin-bottom: 0.5rem;
        }

        .start-button {
          background-color: #6c63ff;
          color: white;
          padding: 0.75rem 1.25rem;
          border-radius: 10px;
          font-weight: bold;
          text-decoration: none;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          width: 100%;
        }

        /* Course Curriculum Styling */
        .course-curriculum-container {
          margin-top: 3rem;
          color: #d1d5db;
        }

        .curriculum-heading {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .week-container {
          margin-bottom: 1rem;
          padding: 1rem;
          background-color: #2b2f3a;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background-color 0.3s;
        }

        .week-title {
          font-weight: bold;
          font-size: 1rem;
          color: #ffffff;
        }

        .lesson-count {
          font-size: 0.9rem;
          color: #a1a1b3;
        }

        .lessons-list {
          margin-top: 0.5rem;
          padding: 1rem;
          background-color: #2e3240;
          border-radius: 8px;
          font-size: 0.9rem;
          color: #a1a1b3;
          line-height: 1.6;
        }

        .lesson-item {
          padding: 0.3rem 0;
        }

        /* Mobile-specific styling */
        @media (max-width: 768px) {
          .hero-container {
            flex-direction: column;
            padding: 1.5rem;
          }

          .left-content,
          .right-card {
            width: 100%;
            padding-right: 0;
            margin-bottom: 2rem;
            position: static;
          }

          .hero-heading {
            font-size: 2rem;
            text-align: center;
          }

          .hero-description {
            font-size: 0.9rem;
            text-align: center;
          }

          .download-button {
            width: 100%;
            justify-content: center;
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
