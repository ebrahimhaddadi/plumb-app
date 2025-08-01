import React from 'react';
import styles from './UserCountContainer.module.css';

const UserCountContainer = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.imagesWrapper}>
          <img
            src="https://images.unsplash.com/photo-1721332155433-3a4b5446bcd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDF8MXhzZWFyY2h8MXx8bWFufGVufDB8fHx8MTcyMjUzMjg4NHww&ixlib=rb-4.0.3&q=80&w=400" // مرد اول (از Unsplash)
            alt="User 1"
            className={styles.userImage}
          />
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8d29tYW58ZW58MHx8fHwxNzIyNTMyOTQyfDA&ixlib=rb-4.0.3&q=80&w=400" // زن (از Unsplash)
            alt="User 2"
            className={styles.userImage}
          />
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bWFufGVufDB8fHx8MTcyMjUzMzAwOHww&ixlib=rb-4.0.3&q=80&w=400" // مرد دوم (از Unsplash)
            alt="User 3"
            className={styles.userImage}
          />
        </div>
        <span className={styles.text}>کاربران فعال بیش از 2000 نفر</span>
      </div>
    </div>
  );
};

export default UserCountContainer;