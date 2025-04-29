import React from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import en from "./en";
import tr from "./tr";

i18n.use(initReactI18next).init({
  resources: {
    en: en,
    tr:tr
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
