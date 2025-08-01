// فایل DrawerMenu.tsx - کامپوننت drawer، state ندارد، از prop استفاده می‌کند
import React from 'react';
import styles from './DrawerMenu.module.css';

import PlusSvg from "../../../assets/icons/plus.svg";
import ProfileSvg from "../../../assets/icons/profile.svg";
import HomeSvg from "../../../assets/icons/home.svg";
import ArchiveSvg from "../../../assets/icons/archive.svg";
import MessageSvg from "../../../assets/icons/messages-2.svg";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

interface DrawerMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const DrawerMenu = ({ isOpen, onClose }: DrawerMenuProps) => {
    const navigate = useNavigate();

    return (
        <>
            {/* overlay برای بستن با کلیک خارج */}
            {isOpen && <div className={styles.drawerOverlay} onClick={onClose}>
                <IoMdClose />
                </div>}

            {/* drawer اصلی */}
            <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
                <button className={styles.closeBtn} onClick={onClose}>
                    <IoMdClose />
                </button>
                <div className={`${styles.navVertical} ${isOpen ? styles.visible : ''}`}>
                    <div className={styles.item} onClick={() => { navigate("/profile"); onClose(); }}>
                        {/* <img src={ProfileSvg} alt="پروفایل" /> */}
                        <span>پروفایل</span>
                    </div>
                    <div className={styles.item} onClick={() => { navigate("/favorites"); onClose(); }}>
                        {/* <img src={ArchiveSvg} alt="علاقه‌مندی" /> */}
                        <span>علاقه‌مندی</span>
                    </div>
                    <div className={styles.centerWrapper} onClick={() => { navigate("/register-property", { state: { status: "register" } }); onClose(); }}>
                           <span>ثبت ملک</span>
                    </div>
                    <div className={styles.item} onClick={() => { navigate("/chat"); onClose(); }}>
                        {/* <img src={MessageSvg} alt="گفتگو" /> */}
                        <span>گفتگو</span>
                    </div>
                    <div className={`${styles.item} ${styles.active}`} onClick={() => { navigate("/home"); onClose(); }}>
                        {/* <img src={HomeSvg} alt="خانه" /> */}
                        <span>خانه</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DrawerMenu;