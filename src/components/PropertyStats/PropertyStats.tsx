import React from 'react';
import styles from './PropertyStats.module.css';

const PropertyStats = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}> {/* div داخلی برای محتوا با بکگراند سیاه */}
        <div className={styles.stat}>
          <div className={styles.number}>393.5B</div>
          <div className={styles.label}>تعداد</div>
          <div className={styles.change}>↑ 37% YoY</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.number}>119.3K</div>
          <div className={styles.label}>امتیاز</div>
          <div className={styles.change}>↑ 22% YoY</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.number}>1.6K</div>
          <div className={styles.label}>کاربر</div>
          <div className={styles.change}>↑ 6% YoY</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyStats;