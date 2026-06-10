// src/i18n.js
import { createI18n } from 'vue-i18n';
import en from '@/locales/en';
import km from '@/locales/km';

const savedLocale = localStorage.getItem('language') || 'km';

const i18n = createI18n({
    legacy: false, // Use Composition API mode
    locale: savedLocale,
    fallbackLocale: 'km', // Fallback language
    messages: {
        en,
        km
    }
});

export default i18n;