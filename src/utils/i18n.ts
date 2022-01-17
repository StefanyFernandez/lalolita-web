import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  fallbackLng: 'en',
  ns: ['common'],
  fallbackNS: 'common',
  defaultNS: 'common',
  keySeparator: false,
  debug: false,
});

document.documentElement.lang = i18next.language;
