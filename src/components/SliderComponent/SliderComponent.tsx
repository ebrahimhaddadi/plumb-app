// SliderComponent.js
import React, { useState, useEffect } from 'react';
import styles from './SliderComponent.module.css';

const slides = [
  {
    id: 1,
    icon: (
      <div className={styles.icon}>
        {/* Placeholder for PASS icon - you can replace with actual SVG or image */}
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="60" height="60" rx="10" fill="#FFD700" />
          <circle cx="50" cy="50" r="20" fill="#00FF00" />
          <text x="50" y="55" fontSize="20" textAnchor="middle" fill="black">PASS</text>
        </svg>
      </div>
    ),
    title: 'Get 10-Year Golden Investor Visa',
  },
  {
    id: 2,
    icon: (
      <div className={styles.icon}>
        {/* Placeholder for Palm Jebel Ali icon - you can replace with actual SVG or image */}
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" fill="#A020F0" />
        </svg>
      </div>
    ),
    title: 'Palm Jebel Ali Investment Guide',
  },
  // Add more slides if needed
];

const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds - adjust for slower if needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.gradientBorder}>
        <div className={styles.innerContent}>
          <div className={styles.slideWrapper}>
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
              >
                {slide.icon}
                <h2 className={styles.title}>{slide.title}</h2>
              </div>
            ))}
          </div>
          <button className={styles.button}>
            REQUEST A CALL BACK <span className={styles.arrow}>→</span>
          </button>
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
          >
            •
          </span>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;