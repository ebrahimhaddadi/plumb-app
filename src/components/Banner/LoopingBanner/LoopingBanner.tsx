import React, { useState, useEffect } from 'react';
import styles from './LoopingBanner.module.css';

const sections = [
  {
    title: "امکان فرصت های سرمایه گذاری هوشمند و بهینه",
    button: 'پدیدار',
    buttonColor: '#3b82f6' // آبی
  },
  {
    title: 'ارزیابی کیفی ساختمان های درحال ساخت و ساخته شده',
    button: 'ارزیاب',
    buttonColor: '#d1f8f5' // فیروزه‌ای
  },
  {
    title: 'چک لیست های مهندسین ناظر نظام مهندسی',
    button: 'مهندسیار',
    buttonColor: '#ec4899' // صورتی
  }
];

const LoopingBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const displayTime = 2000; // 3 ثانیه نمایش
    const fadeOutTime = 500; // 0.5 ثانیه برای fade out
    const delayTime = 500; // نیم ثانیه تأخیر بعد از fade out

    const timer = setTimeout(() => {
      setIsFadingOut(true); // شروع fade out
    }, displayTime);

    const fadeOutTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % sections.length); // تغییر به بخش بعدی
      setIsFadingOut(false); // reset برای fade in بعدی
    }, displayTime + fadeOutTime + delayTime);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeOutTimer);
    };
  }, [currentIndex]);

  const currentSection = sections[currentIndex];

  return (
    <div className={styles.container}>
      <div className={`${styles.content} ${isFadingOut ? styles.fadeOut : styles.fadeIn}`}>
        <h2 className={styles.title}>{currentSection.title}</h2>
        <button className={styles.button} style={{ backgroundColor: currentSection.buttonColor }}>
          {currentSection.button}
        </button>
      </div>
    </div>
  );
};

export default LoopingBanner;