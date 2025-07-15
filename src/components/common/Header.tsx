import LanguageSelector from "./LanguageSelector.tsx";

export default function Header() {
    return (
        <header className="w-full bg-transparent py-4 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                {/* آیکون‌ها یا لوگو سمت چپ یا راست */}
                <div className="flex items-center gap-4">
                    {/* آیکون‌ها */}
                </div>

                {/* ناوبری */}
                <nav className="flex items-center gap-6 text-sm font-medium">
                    <a href="/" className="text-blue-500">خانه</a>
                    {/* لینک‌های دیگه */}
                </nav>

                {/* کمبوباکس زبان */}
                <div className="flex items-center">
                    <LanguageSelector />
                </div>
            </div>
        </header>
    )
}
