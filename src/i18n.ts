import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import es from "./locales/es.json";

i18n
  .use(LanguageDetector) // Detects the browser's language
  .use(initReactI18next)
  .init({
    fallbackLng: i18n.language, // Default language
    debug: true, // Enables logs in the console
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
  });

export default i18n;
