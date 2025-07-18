import {useState} from "react";
import styles from './Home.module.css';
import img1 from '../../assets/img/1.jpg';

import SearchBox from "../../components/common/SearchBox/SearchBox.tsx";
import BallSvg from "../../assets/icons/notification-bing.svg";
import ProfileImage from "../../assets/img/profile.jpg";
import Building3Svg from "../../assets/icons/building-3.svg";
import Building4Svg from "../../assets/icons/building-4.svg";
import BuildingsSvg from "../../assets/icons/buildings.svg";
import Card from "../../components/card/Card.tsx";
import {Link} from "react-router-dom";



export default function Home() {
    const [active, setActive] = useState('خانه ویلایی');
    const properties = [
        {
            id: 1,
            owner: 'فرشته آینده نگر',
            city: 'تهران، زعفرانیه',
            avatar:ProfileImage,
            image: img1,
            title: 'خانه ویلایی مدرن',
            price: '۲ میلیارد تومان',
            address: 'تهران، زعفرانیه، خیابان مقدس اردبیلی، کوچه نسترن',
            rooms: 6,
            baths: 3,
            area: 800,
        },
        {
            id: 2,
            owner: 'علی ملکی',
            city: 'کرج، گوهردشت',
            avatar: ProfileImage,
            image: img1,
            title: 'آپارتمان لوکس',
            price: '۱٫۵ میلیارد تومان',
            address: 'کرج، بلوار اصلی، پلاک ۲۲',
            rooms: 3,
            baths: 2,
            area: 120,
        },
        {
            id: 2,
            owner: 'علی ملکی',
            city: 'کرج، گوهردشت',
            avatar: ProfileImage,
            image: img1,
            title: 'آپارتمان لوکس',
            price: '۱٫۵ میلیارد تومان',
            address: 'کرج، بلوار اصلی، پلاک ۲۲',
            rooms: 3,
            baths: 2,
            area: 120,
        },
        {
            id: 2,
            owner: 'علی ملکی',
            city: 'کرج، گوهردشت',
            avatar: ProfileImage,
            image: img1,
            title: 'آپارتمان لوکس',
            price: '۱٫۵ میلیارد تومان',
            address: 'کرج، بلوار اصلی، پلاک ۲۲',
            rooms: 3,
            baths: 2,
            area: 120,
        },

    ];


    const categories = [
        { id: 1, label: 'خانه ویلایی', icon: Building3Svg },
        { id: 2, label: 'مجتمع', icon:BuildingsSvg },
        { id: 3, label: 'مجتمع', icon:BuildingsSvg },
        { id: 4, label: 'مجتمع', icon:BuildingsSvg },
        { id: 5, label: 'آپارتمان', icon: Building4Svg},
    ];
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
            <SearchBox/>
             <div className={styles.buttonsWrapper} >

                     {categories.map((cat) => (
                         <button
                             key={cat.id}
                             className={`${styles.tab} ${active === cat.label ? styles.active : ''}`}
                             onClick={() => setActive(cat.label)}
                         >
                             {cat.label}
                             <img src={cat.icon} />

                         </button>
                     ))}

             </div>
            <div className={styles.containerNew} >
                <button className={styles.showAll}>
                    دیدن همه
                </button>
                <h4  >جدیدترین ها</h4>
            </div>
            <div className={styles.latestSection}>

                <div className={styles.cardsWrapper}>
                    <div className={styles.cards}>
                        {properties.map(property => (
                            <Card key={property.id} {...property} />
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.buttonsContainer}>
                <button className={styles.requestBtn}>درخواست بازرسی</button>
                <button className={styles.registerBtn}>
                    <Link to="/register-property">
                        ثبت ملک
                    </Link>
                    </button>
            </div>
        </div>
    );
}