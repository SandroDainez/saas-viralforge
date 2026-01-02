import { useState, useEffect } from 'react'
import { Language, getTranslation, defaultLanguage } from '../lib/i18n'

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>(defaultLanguage)

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && ['en', 'pt', 'es'].includes(savedLang)) {
      setLanguage(savedLang)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string) => {
    const translation = getTranslation(language)
    return translation[key as keyof typeof translation] || key
  }

  return { t, language, changeLanguage }
}