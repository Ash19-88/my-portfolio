import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import navbar_es from "./locales/navbar/navbar_es.json";
import navbar_en from "./locales/navbar/navbar_en.json";
import navbar_pt from "./locales/navbar/navbar_pt.json";
import about_es from "./locales/about/about_es.json";
import about_en from "./locales/about/about_en.json";
import about_pt from "./locales/about/about_pt.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      es: {
        navbar: navbar_es,
        about: about_es,
      },
      en: {
        navbar: navbar_en,
        about: about_en,
      },
      pt: {
        navbar: navbar_pt,
        about: about_pt,
      },
    },
  });

export default i18n;
