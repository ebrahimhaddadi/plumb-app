import Header from "../common/Header.tsx";
import Footer from "../common/Footer.tsx";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Header />

            <main className="flex-grow container ">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}
