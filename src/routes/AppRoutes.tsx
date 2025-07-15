
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import ContactUs from "../pages/ContactUs.tsx"
import MainLayout from "../components/layout/MainLayout.tsx";

const routeList = [
    { path: "/", element: <Home />, name: "خانه" },
    { path: "/contact", element: <ContactUs />, name: "تماس با ما" },
    // بعداً راحت اضافه کن → { path: "/about", element: <About />, name: "درباره ما" }
]

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout/>}>


            {routeList.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
            </Route>
        </Routes>
    )
}
