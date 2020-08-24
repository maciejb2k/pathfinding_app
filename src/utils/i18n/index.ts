import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translation_pl from "./translations/pl.json";
import translation_en from "./translations/en.json";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  pl: {
    translation: translation_pl,
  },
  en: {
    translation: translation_en,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "pl",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
