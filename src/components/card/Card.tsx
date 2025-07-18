import  styles from "./Card.module.css";
import ArchiveSvg from "../../assets/icons/archive.svg";
import GallerySvg from "../../assets/icons/gallery.svg";


interface PropertyCardProps {
    owner: string;
    city: string;
    avatar: string;
    image: string;
    title: string;
    price: string;
    address: string;
    rooms: number;
    baths: number;
    area: number;
}

export default function Card(props: PropertyCardProps) {
    const {
        owner, city, avatar, image,
        title, price, address,
        rooms, baths, area
    } = props;

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div>
                    <p className={styles.owner}>{owner}</p>
                    <p className={styles.city}>{city}</p>
                </div>
                <img className={styles.avatar} src={avatar} alt={owner} />
            </div>

            <div className={styles.imageWrapper}>
                <img src={image} alt={title} className={styles.image} />
                <span className={styles.imageCount}>+8 تصویر دیگر</span>
                <button className={styles.bookmark}>
                    <img src={ArchiveSvg}/>
                </button>
            </div>

            <div className={styles.titleRow}>
                <p className={styles.price}>از {price}</p>
                <p className={styles.title}>{title}</p>
            </div>

            <div className={styles.address}>
                <img src={GallerySvg} className={styles.icon} />
                <span>{address}</span>
            </div>

            <div className={styles.features}>
                <span> {rooms} اتاق خواب</span>
                <span> {baths} سرویس</span>
                <span>{area} مترمربع</span>
            </div>
        </div>
    );
}
