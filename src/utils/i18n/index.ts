import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translation_pl from "./translations/pl.json";
import translation_en from "./translations/en.json";

const resources = {
  pl: {
    translation: translation_pl,
  },
  en: {
    translation: translation_en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pl",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
