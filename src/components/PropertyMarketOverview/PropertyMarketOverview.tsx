import React from 'react';
import styles from './PropertyMarketOverview.module.css';

const PropertyMarketOverview = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>ارزیابی ساختمان در یک نگاه</h4>
      <div className={styles.tabsRow}>
        <button className={`${styles.tab} ${styles.active}`}>درحال ساخت</button>
        <button className={styles.tab}>ساخته شده</button>
      </div>
      <div className={styles.tabsRow}>
        <button className={`${styles.tab} ${styles.active}`}>هفتگی</button>
        <button className={styles.tab}>ماهانه</button>
        <button className={styles.tab}>سالانه</button>
      </div>
    </div>
  );
};

export default PropertyMarketOverview;