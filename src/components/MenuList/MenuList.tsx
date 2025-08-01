import React from 'react';
import styles from './MenuList.module.css';

const MenuList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.iconWrapper} style={{ backgroundColor: '#a855f7' }}> {/* بنفش برای اولین */}
          <span className={styles.icon}>📷</span> {/* آیکون دوربین */}
        </div>
        <span className={styles.text}>Villas Market Map</span>
      </div>
      <div className={styles.item}>
        <div className={styles.iconWrapper} style={{ backgroundColor: '#3b82f6' }}> {/* آبی برای دوم */}
          <span className={styles.icon}>🏢</span> {/* آیکون ساختمان */}
        </div>
        <span className={styles.text}>Dubai Projects Analysis</span>
      </div>
      <div className={styles.item}>
        <div className={styles.iconWrapper} style={{ backgroundColor: '#2563eb' }}> {/* آبی تیره برای سوم */}
          <span className={styles.icon}>🏛️</span> {/* آیکون ساختمان کلاسیک */}
        </div>
        <span className={styles.text}>Top Selling Projects</span>
      </div>
      <div className={styles.item}>
        <div className={styles.iconWrapper} style={{ backgroundColor: '#1d4ed8' }}> {/* آبی خیلی تیره برای چهارم */}
          <span className={styles.icon}>⏳</span> {/* آیکون ساعت شنی */}
        </div>
        <span className={styles.text}>Slow Moving Projects</span>
      </div>
    </div>
  );
};

export default MenuList;