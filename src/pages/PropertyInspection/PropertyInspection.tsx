import styles from './PropertyInspection.module.css';
import BookmarkIcon from '../../assets/icons/archive-tick.svg';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';
import ShareIcon from '../../assets/icons/share.svg';
import {useNavigate,useLocation} from "react-router-dom";

export default function PropertyInspection() {
    const location = useLocation();
    const property = location.state?.property;


    const navigate=useNavigate();
    if (!property) return <p>اطلاعاتی برای نمایش وجود ندارد</p>;
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
                <img src={property.image} alt={property.title} style={{ width: "100%" }} className={styles.image} />
                <div className={styles.dots}>
                    <span className={styles.activeDot}></span>
                    <span></span>
                    <span></span>
                </div>

                <h3 className={styles.title}>{property.title}</h3>
                <p className={styles.address}>
                    {property.address}
                </p>
                <p className={styles.address}>
                    {property.owner}
                </p>
            </div>

            <button className={styles.inspectBtn}>ارسال درخواست بازرسی</button>
        </div>
    );
}
