import React, { useState } from 'react';
import styles from './DrawerMenu.module.css';

import PlusSvg from "../../../assets/icons/plus.svg";
import ProfileSvg from "../../../assets/icons/profile.svg";
import HomeSvg from "../../../assets/icons/home.svg";
import ArchiveSvg from "../../../assets/icons/archive.svg";
import MessageSvg from "../../../assets/icons/messages-2.svg";
import { useNavigate } from "react-router-dom";

const DrawerMenu = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const closeDrawer = () => {
        setIsOpen(false);
    };

    return (
        <div className={styles.container}> {/* به جای footer، یک div ساده برای wrapper */}
            {/* دکمه برای باز کردن drawer - می‌توانید آن را در هدر بگذارید یا هرجا */}
            <button onClick={toggleDrawer} className={styles.menuBtn}>☰</button> {/* آیکون همبرگر ساده */}

            {/* overlay برای بستن با کلیک خارج */}
            {isOpen && <div className={styles.drawerOverlay} onClick={closeDrawer}></div>}

            {/* drawer اصلی */}
            <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
                <button className={styles.closeBtn} onClick={closeDrawer}>×</button>
                <div className={styles.navVertical}>
                    <div className={styles.item} onClick={() => { navigate("/profile"); closeDrawer(); }}>
                        <img src={ProfileSvg} alt="پروفایل" />
                        <span>پروفایل</span>
                    </div>
                    <div className={styles.item} onClick={() => { navigate("/favorites"); closeDrawer(); }}>
                        <img src={ArchiveSvg} alt="علاقه‌مندی" />
                        <span>علاقه‌مندی</span>
                    </div>
                    <div className={styles.centerWrapper}>
                        <button onClick={() => { navigate("/register-property", { state: { status: "register" } }); closeDrawer(); }} className={styles.addBtn}>
                            {/* <img src={PlusSvg} alt="ثبت ملک" /> */}
                        </button>
                        <span className={styles.centerLabel}>ثبت ملک</span>
                    </div>
                    <div className={styles.item} onClick={() => { navigate("/chat"); closeDrawer(); }}>
                        <img src={MessageSvg} alt="گفتگو" />
                        <span>گفتگو</span>
                    </div>
                    <div className={`${styles.item} ${styles.active}`} onClick={() => { navigate("/home"); closeDrawer(); }}>
                        <img src={HomeSvg} alt="خانه" />
                        <span>خانه</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrawerMenu;