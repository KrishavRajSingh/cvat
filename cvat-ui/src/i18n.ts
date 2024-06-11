// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        supportedLngs: ['en', 'es'],
        ns: ['translations'],
        interpolation: {
            escapeValue: false, // React already escapes by default
        },
        backend: {
            loadPath: 'http://localhost:3000/api/locales/{{lng}}/{{ns}}.json', // Adjust this path based on your project structure
        },
    });

export default i18n;
