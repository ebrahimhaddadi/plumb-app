import styles from './Footer.module.css';

import PlusSvg from "../../../assets/icons/plus.svg";
import ProfileSvg from "../../../assets/icons/profile.svg";
import HomeSvg from "../../../assets/icons/home.svg";
import ArchiveSvg from "../../../assets/icons/archive.svg";
import MessageSvg from "../../../assets/icons/messages-2.svg";
import {useNavigate} from "react-router-dom";

const Footer = () => {
    const navigate=useNavigate()
    return (
        <footer className={styles.wrapper}>
            <div className={styles.nav}>
                <div className={styles.item}>
                    <img src={ProfileSvg} alt="پروفایل" />
                    <span>پروفایل</span>
                </div>
                <div style={{marginRight:25}} className={styles.item}>
                    <img src={ArchiveSvg} alt="علاقه‌مندی" />
                    <span>علاقه‌مندی</span>
                </div>

                <div className={styles.centerWrapper}>
                    <button className={styles.addBtn}>
                        <img src={PlusSvg} alt="ثبت آگهی" />
                    </button>
                    <span className={styles.centerLabel}>ثبت آگهی</span>
                </div>

                <div style={{marginLeft:25}} className={styles.item}>
                    <img src={MessageSvg} alt="گفتگو" />
                    <span>گفتگو</span>
                </div>
                <div onClick={()=>navigate("/")} className={`${styles.item} ${styles.active}`}>

                    <img src={HomeSvg} alt="خانه" />
                    <span>خانه</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
