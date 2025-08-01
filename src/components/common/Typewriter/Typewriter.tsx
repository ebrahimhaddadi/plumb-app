import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number; // تأخیر بین هر کلمه (میلی‌ثانیه)
}

const Typewriter = ({ text, delay = 500 }: TypewriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const words = text.split(' '); // تقسیم متن به کلمات

  useEffect(() => {
    if (wordIndex < words.length) {
      const timer = setTimeout(() => {
        setCurrentText((prev) => prev + (prev ? ' ' : '') + words[wordIndex]);
        setWordIndex(wordIndex + 1);
      }, delay);

      return () => clearTimeout(timer); // پاک کردن تایمر برای جلوگیری از memory leak
    }
  }, [wordIndex, words, delay]);

  return (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight:35,marginTop:1 }} > {/* bg اضافه برای بهتر دیدن، اما اختیاری */}
    <p style={{fontSize: '25px', color: 'white', textAlign: 'center'}}  > {/* max-w و px برای کنترل عرض متن اگر طولانی باشه */}
      {currentText}
    </p>
  </div>
  );
};

export default Typewriter;