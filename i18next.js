import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import i18nextBrowserLanguagedetector from "i18next-browser-languagedetector";
// import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector/cjs";

i18next
  .use(initReactI18next)
  .use(i18nextBrowserLanguagedetector)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          welcome: "Welcome to Assets mogul",
        },
      },
    },
  });
