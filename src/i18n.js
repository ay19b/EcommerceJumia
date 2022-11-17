import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
const availableLanguages = ['fr', 'ar',]



const languages = [
    {
      code: 'fr',
      name: 'Français',
      country_code: 'fr'
    },
    {
      code: 'ar',
      name: 'العربية',
      country_code: 'ly',
      dir: 'rtl'
    }
  ]

const option = {
  order:['navigator', 'htmlTag', 'path', 'subdomail'],
  checkWhitelist:true
}
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
	lng: localStorage.getItem("lng") || "en",
    debug: true,
    whitelist:languages,
    detection:option,
    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;