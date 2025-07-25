import styles from './RegisterProperty.module.css';
import sampleHouse from '../../assets/img/2.jpg'; // عکس خانه

import BallSvg from "../../assets/icons/notification-bing.svg";
import ProfileImage from "../../assets/img/profile.jpg";
import { useNavigate, useLocation } from "react-router-dom";

export default function RegisterProperty() {
        const navigate=useNavigate();
    const location = useLocation();
    const status = location.state?.status || 'listing';
    const isInspection = status === 'inspection';

    console.log("status", status, "isInspection", isInspection);
    return (
        <div className={styles.container}>
            <div className={styles.topContainer} >
                <div className={styles.ballContainer} >
                    <img src={BallSvg} />
                </div>
                <div className={styles.imageContainer}>
                    <h4 className={styles.customerText}  >مشتری 1</h4>
                    <img src={ProfileImage}/>
                </div>
            </div>

            <img src={sampleHouse} className={styles.houseImage} alt="house" />

            <div className={styles.addBtn}>
              <div>
                  اضافه کردن ساختمان
              </div>
            <div>+</div>
            </div>

            <div className={styles.tabList}>
                <button className={`${styles.tab} ${styles.active}`}>مسکونی</button>
                <button className={styles.tab}>تجاری</button>
                <button className={styles.tab}>اداری</button>
                <button className={styles.tab}>سایر</button>
            </div>

            <div className={styles.inputs}>
                <input type="text" placeholder="* عنوان " />
                <input type="text" placeholder="* آدرس " />
                <input type="text" placeholder="* متراژ" />
                <input type="text" placeholder="طبقه" />
                <input type="text" placeholder="واحد" />
                <input type="text" placeholder="سال ساخت" />
                <input type="text" placeholder="منطقه" />
            </div>

            <button
                onClick={() => navigate(isInspection ? "/build-check-list" : "/home")}
                className={styles.submitBtn}
            >
                {isInspection ? "ارسال درخواست بازرسی" : "ثبت ملک"}
            </button>


        </div>
    );
}
