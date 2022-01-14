import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import translationIT from "./locales/it/translationIT.json"

// contient les dictionnaires hardcoded
const resources = {
  en: {
    translation: {
      "hello":"Good morning"
    }
  },
  fr: {
    translation: {
      "hello":"Bonjour"
    }
  },
  it: {
    translation: translationIT
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr"
  })

export default i18n