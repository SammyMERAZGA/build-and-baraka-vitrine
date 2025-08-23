import { createI18n } from 'vue-i18n'

// Import messages
import fr from './locales/fr.json'
import en from './locales/en.json'
import ar from './locales/ar.json'

const messages = {
  fr,
  en,
  ar
}

const i18n = createI18n({
  legacy: false,
  locale: 'fr', // default locale
  fallbackLocale: 'en',
  messages,
  globalInjection: true
})

export default i18n