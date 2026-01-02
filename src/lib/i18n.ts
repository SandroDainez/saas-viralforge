import en from '../../en-15.json'
import pt from '../../pt-14.json'
import es from '../../es-13.json'

export type Language = 'en' | 'pt' | 'es'

export const translations = {
  en,
  pt,
  es
}

export const getTranslation = (lang: Language) => translations[lang]

export const defaultLanguage: Language = 'pt'