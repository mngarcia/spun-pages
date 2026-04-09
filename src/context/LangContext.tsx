import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Lang } from '../i18n/translations'

interface LangContextValue {
  lang: Lang
  toggleLang: () => void
}

const LangContext = createContext<LangContextValue>({ lang: 'en', toggleLang: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const toggleLang = () => setLang(l => (l === 'en' ? 'es' : 'en'))
  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
