import React from 'react';
import styles from './SearchBox.module.css';
import { IoIosSearch } from "react-icons/io";

const SearchBoxMain = () => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="جستجو براساس وضعیت ارزیابی"
        className={styles.input}
      />
      <button className={styles.searchButton}>
         <IoIosSearch size={25} />
      </button>
    </div>
  );
};

export default SearchBoxMain;