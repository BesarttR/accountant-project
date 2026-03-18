import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation JSON files
import en from "./locales/en.json";
import mk from "./locales/mk.json";
import sq from "./locales/sq.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      mk: { translation: mk },
      sq: { translation: sq },
    },
    lng: "en",        // default language
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;