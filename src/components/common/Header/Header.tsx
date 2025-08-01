import styles from "./Header.module.css";
import menubSvg from "../../../assets/icons/menuH.svg";
import BallSvg from "../../../assets/img/ball.png"
import LanguageSelector from "../LanguageSelector";
import { useTranslation } from "react-i18next";

interface HeaderProps {
    toggleDrawer: () => void; // prop برای toggle
}

const Header = ({ toggleDrawer }: HeaderProps) => {
    const {t}=useTranslation()
    return (
        <div className={styles.header}>
            <button onClick={toggleDrawer} className={styles.menuBtn}>
              <img src={menubSvg} className={styles.menuIcon} style={{ width: 35, height: 35 }} />  
            </button>
            <div style={{display:"flex",flexDirection:"row-reverse",alignItems:"center",justifyContent:"center",marginTop:10 }} >
            {/* <div className={styles.ballContainer} >
                    <img src={BallSvg} />
             </div> */}
                <div className={styles.logoText} >
                    {/* {t("shaghoul")} */}
                    شاقول
                    </div>
              {/* <LanguageSelector/> */}
            </div>
          
            
        </div>
    );
};

export default Header;