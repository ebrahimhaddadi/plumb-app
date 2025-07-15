import { useState } from "react"
import { useTranslation } from "react-i18next"
import { FaGlobe } from "react-icons/fa"

const LANGS = [
    { code: "en", label: "English" },
    { code: "ar", label: "عربي" },
    { code: "fa", label: "فارسی" },
]

export default function LanguageSelector() {
    const { i18n } = useTranslation()
    const [open, setOpen] = useState(false)

    const handleChange = (lang: string) => {
        i18n.changeLanguage(lang)
        document.documentElement.lang = lang
        document.documentElement.dir = ["fa", "ar"].includes(lang) ? "rtl" : "ltr"
        setOpen(false)
    }

    return (
        <div className="relative inline-block text-right">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-center px-3 py-2 bg-white text-gray-800 rounded-lg border shadow w-36 hover:bg-gray-100 transition-all"
            >
                <FaGlobe className="mr-2" />
                زبان
            </button>

            {open && (
                <div className="absolute mt-2 right-0 w-36 bg-white rounded-lg shadow-lg z-50 border">
                    <div className="flex flex-col py-2 px-2 space-y-1">
                        {LANGS.map(({ code, label }) => (
                            <button
                                key={code}
                                onClick={() => handleChange(code)}
                                className="w-full text-sm text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-right transition"
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
