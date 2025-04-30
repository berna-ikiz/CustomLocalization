import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import tr from "./tr.json";
import de from "./de.json";
import es from "./es.json";
import fr from "./fr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    tr: {
      translation: tr,
    },
    de: {
      translation: de,
    },
    es: {
      translation: es,
    },
    fr: {
      translation: fr,
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
