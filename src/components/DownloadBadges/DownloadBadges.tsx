// DownloadBadges.js
import React from 'react';
import styles from './DownloadBadges.module.css';
import googleImg from "../../assets/img/google.png";
import appleImg from "../../assets/img/apple.png";

const DownloadBadges = () => {
  return (
    <div className={styles.container}>
      <a href="#" className={styles.badge}>
        <img src={googleImg} /> 
      </a>
      <a href="#" className={styles.badge}>
        <img src={appleImg} />
      </a>
    </div>
  );
};

export default DownloadBadges;