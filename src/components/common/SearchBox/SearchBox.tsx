import styles from './SearchBox.module.css';
import SettingsSvg from "../../../assets/icons/setting-4.svg";
import SearchSvg from "../../../assets/icons/search-normal.svg";

export default function SearchBox() {
    return (
        <div className={styles.container} >
            <div className={styles.circle} >
              <img src={SettingsSvg} />
            </div>
            <div className={styles.searchWrapper} >
                <input className={styles.input} placeholder={"جستجو در همه آگهی ها"} />
                <img src={SearchSvg} style={{marginRight:15}} />

            </div>
        </div>
    );
}
