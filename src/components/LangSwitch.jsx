import { useLang } from '../i18n/LanguageContext';

export default function LangSwitch({ className = '' }) {
  const { lang, setLang, t } = useLang();

  return (
    <div className={`lang-switch ${className}`} role="group" aria-label={t('nav.language')}>
      <button
        type="button"
        lang="es"
        className={lang === 'es' ? 'is-active' : ''}
        aria-pressed={lang === 'es'}
        onClick={() => setLang('es')}
      >
        ES
      </button>
      <span className="lang-switch__sep" aria-hidden="true">|</span>
      <button
        type="button"
        lang="en"
        className={lang === 'en' ? 'is-active' : ''}
        aria-pressed={lang === 'en'}
        onClick={() => setLang('en')}
      >
        EN
      </button>
    </div>
  );
}
