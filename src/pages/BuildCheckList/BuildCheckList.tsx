import styles from "./BuildCheckList.module.css";
import BookmarkIcon from "../../assets/icons/archive-tick.svg";
import ShareIcon from "../../assets/icons/share.svg";
import Image2 from "../../assets/img/2.jpg";
import ArrowRightIcon from "../../assets/icons/arrow-right.svg";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import ToastNotifier, {showToast} from '../../components/ToastNotifier/ToastNotifier';

const BuildCheckList = () => {
    const navigate = useNavigate();
    const [showPrice, setShowPrice] = useState<boolean>(false);
  

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.topContainer}>

                    <div>
                        <img src={BookmarkIcon} alt={"bookmark"}/>
                        <img src={ShareIcon} alt={"share"}/>
                    </div>
                    <div onClick={() => navigate("/home")} className={styles.homeContainer}>
                        <div>خانه</div>
                        <img src={ArrowRightIcon} alt={"arrow right"}/>

                    </div>
                </div>
                <img src={Image2} alt={""} style={{width: "100%"}} className={styles.image}/>
                <div className={styles.dots}>
                    <span className={styles.activeDot}></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.check_lists}>
                    <div className={styles.check_list}>
                        <p className={styles.text}>تاسیسات مکانیکی</p>
                        <input type={"checkbox"}/>
                    </div>
                    <div className={styles.check_list}>
                        <p className={styles.text}>تاسیسات برقی</p>
                        <input type={"checkbox"}/>
                    </div>
                    <div className={styles.check_list}>
                        <p className={styles.text}>سقف</p>
                        <input type={"checkbox"}/>
                    </div>
                    <div className={styles.check_list}>
                        <p className={styles.text}>در و پنجره </p>
                        <input type={"checkbox"}/>
                    </div>
                    <div className={styles.check_list}>
                        <p className={styles.text}>پارکینگ</p>
                        <input type={"checkbox"}/>
                    </div>
                    <div className={styles.check_list}>
                        <p className={styles.text}>انباری</p>
                        <input type={"checkbox"}/>
                    </div>
                    <div className={styles.check_list}>
                        <p className={styles.text}>سیسیتم گرمایش / سرمایش</p>
                        <input type={"checkbox"}/>
                    </div>
                    <div className={styles.check_list}>
                        <p className={styles.text}>سرویس های بهداشتی</p>
                        <input type={"checkbox"}/>
                    </div>
                </div>

            </div>
            <div className={styles.btnContainer}>
                <button onClick={() => setShowPrice(true)} className={styles.cost}>
                    محاسبه هزینه
                </button>
                <div className={styles.price}>
                    {showPrice && <p>
                        100000000
                    </p>}
                </div>


            </div>

            <button onClick={() => {
                showToast({text: 'عملیات با موفقیت انجام شد', type: 'success'})
                setTimeout(() => navigate("/home"), 4000)
            }} className={styles.inspectBtn}>پرداخت و ثبت درخواست
            </button>

            <ToastNotifier/>
        </div>
    );
}
export default BuildCheckList;