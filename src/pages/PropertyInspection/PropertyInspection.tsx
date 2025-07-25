import styles from './PropertyInspection.module.css';
import BookmarkIcon from '../../assets/icons/archive-tick.svg';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';
import ShareIcon from '../../assets/icons/share.svg';
import HomeImage from '../../assets/img/2.jpg';
import {useNavigate} from "react-router-dom";

export default function PropertyInspection() {
    const navigate=useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.topContainer}>

                    <div>
                        <img src={BookmarkIcon} alt={"bookmark"}/>
                        <img src={ShareIcon} alt={"share"}/>
                    </div>
                    <div onClick={()=>navigate("/home")} className={styles.homeContainer}>
                        <div>خانه</div>
                        <img src={ArrowRightIcon} alt={"arrow right"}/>

                    </div>
                </div>
                <img src={HomeImage} alt="home" className={styles.image} />
                <div className={styles.dots}>
                    <span className={styles.activeDot}></span>
                    <span></span>
                    <span></span>
                </div>

                <h3 className={styles.title}>آپارتمان ۷۰ متری مهرشهر، نوساز</h3>
                <p className={styles.address}>
                    تهران، زعفرانیه، خیابان مقدس اردبیلی، کوچه نسترن، پلاک ۱۲، خانه مسکونی، طبقه همکف
                </p>
            </div>

            <button className={styles.inspectBtn}>درخواست بازرسی</button>
        </div>
    );
}
