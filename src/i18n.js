import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import navbar_es from "./locales/navbar/navbar_es.json";
import navbar_en from "./locales/navbar/navbar_en.json";
import navbar_pt from "./locales/navbar/navbar_pt.json";
import about_es from "./locales/about/about_es.json";
import about_en from "./locales/about/about_en.json";
import about_pt from "./locales/about/about_pt.json";
import home_es from "./locales/home/home_es.json";
import home_en from "./locales/home/home_en.json";
import home_pt from "./locales/home/home_pt.json";
import projects_es from "./locales/projects/projects_es.json";
import projects_en from "./locales/projects/projects_en.json";
import projects_pt from "./locales/projects/projects_pt.json";
import experience_es from "./locales/experience/experience_es.json";
import experience_en from "./locales/experience/experience_en.json";
import experience_pt from "./locales/experience/experience_pt.json";
import contact_es from "./locales/contact/contact_es.json";
import contact_en from "./locales/contact/contact_en.json";
import contact_pt from "./locales/contact/contact_pt.json";
import socialLinks_es from "./locales/socialLinks/socialLinks_es.json";
import socialLinks_en from "./locales/socialLinks/socialLinks_en.json";
import socialLinks_pt from "./locales/socialLinks/socialLinks_pt.json";

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
        home: home_es,
        projects: projects_es,
        experience: experience_es,
        contact: contact_es,
        socialLinks: socialLinks_es,
      },
      en: {
        navbar: navbar_en,
        about: about_en,
        home: home_en,
        projects: projects_en,
        experience: experience_en,
        contact: contact_en,
        socialLinks: socialLinks_en,
      },
      pt: {
        navbar: navbar_pt,
        about: about_pt,
        home: home_pt,
        projects: projects_pt,
        experience: experience_pt,
        contact: contact_pt,
        socialLinks: socialLinks_pt,
      },
    },
  });

export default i18n;
