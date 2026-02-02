import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

/**
 * i18next configuration
 * Supports multiple languages with automatic detection
 * Loads translation files from /public/locales/{lang}/translation.json
 */
i18n
  .use(HttpBackend) // Load translations using http
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: 'en', // Fallback language if translation not found
    debug: false, // Set to true for debugging
    
    // Supported languages
    supportedLngs: ['en', 'ar', 'fr', 'es', 'ur'],
    
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    
    backend: {
      // Path to translation files
      loadPath: '/locales/{{lng}}/translation.json',
    },
    
    detection: {
      // Order of language detection
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'], // Cache user's language choice
    },
    
    react: {
      useSuspense: true, // Use Suspense for async loading
    },
  });

export default i18n;
