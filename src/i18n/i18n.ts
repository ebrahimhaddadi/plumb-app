import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import en from "./en.json"
import fa from "./fa.json"
import ar from "./ar.json"

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            fa: { translation: fa },
            ar: { translation: ar }
        },
        fallbackLng: "fa",
        interpolation: {
            escapeValue: false
        }
    })

export default i18n
