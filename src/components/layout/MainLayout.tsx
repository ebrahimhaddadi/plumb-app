import Header from "../common/Header/Header.tsx";
import Footer from "../common/Footer/Footer.tsx";
import { Outlet } from "react-router-dom";
// import styles from "./MainLayout.module.css"

export default function MainLayout() {
    return (
        <div>

            <Header />

            <main >
                <Outlet />
            </main>

            <Footer />

        </div>
    )
}
