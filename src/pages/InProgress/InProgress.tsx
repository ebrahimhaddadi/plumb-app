import styles from "./InProgress.module.css";
import BallSvg from "../../assets/icons/notification-bing.svg";
import ProfileImage from "../../assets/img/profile.jpg";
import sampleHouse from "../../assets/img/2.jpg";
import {useNavigate} from "react-router-dom";


const InProgress=()=>{
    const navigate=useNavigate();
    return(
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
                <input type="text" placeholder="فاز تاسیسات مکانیکی" />
                <input type="text" placeholder="فاز تاسیسات برقی" />
                <input className={"bg-dark-500"} type="text" placeholder="اجرای سقف سازه(طبقه)" />
            </div>

            <button
                onClick={()=>navigate("/in-progress-check-list")}
                className={styles.submitBtn}
            >
                ارسال درخواست بازرسی
            </button>


        </div>
    );
}
export  default InProgress