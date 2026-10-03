import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import es from './es';
import en from './en';

const DICTIONARIES = { es, en };
const STORAGE_KEY = 'pastica_lang';

const LanguageContext = createContext(null);

function readStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'en' || stored === 'es' ? stored : 'es';
  } catch {
    return 'es';
  }
}

function resolve(dict, key) {
  return key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), dict);
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable — choice just won't persist */
    }
  }, []);

  const t = useCallback(
    (key) => resolve(DICTIONARIES[lang], key) ?? resolve(DICTIONARIES.es, key) ?? key,
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
