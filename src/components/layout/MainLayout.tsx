import Header from "../common/Header/Header.tsx";
import Footer from "../common/Footer/Footer.tsx";
import { Outlet } from "react-router-dom";
import DrawerMenu from "../common/Drawer/DrawerMenu.tsx";
import { useState } from "react";
import styles from "./MainLayout.module.css";
// import styles from "./MainLayout.module.css"

export default function MainLayout() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };
    return (
        <div className={styles.fullWrapper} >

            <Header toggleDrawer={toggleDrawer} /> {/* prop برای toggle به هدر پاس می‌دهیم */}

            <DrawerMenu isOpen={isDrawerOpen} onClose={closeDrawer} /> {/* prop برای open/close به drawer */}

            <main className={styles.centerContent}>
                <Outlet />
            </main>

            {/* <Footer /> */}
            

        </div>
    )
}
