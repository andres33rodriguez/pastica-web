import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TLink from './TLink';
import LangSwitch from './LangSwitch';
import { useLang } from '../i18n/LanguageContext';
import logoAmarillo from '../assets/logos/logo-amarillo.png';

const LINKS = [
  { to: '/', key: 'nav.home' },
  { to: '/el-menu', key: 'nav.menu' },
  { to: '/reservas', key: 'nav.reservations' },
  { to: '/a-domicilio', key: 'nav.delivery' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useLang();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="nav">
      <div className="nav__inner container">
        <TLink to="/" className="nav__brand" aria-label={t('nav.homeAria')}>
          <img src={logoAmarillo} alt="Pastica" className="nav__brand-wordmark" />
        </TLink>

        <nav className="nav__links" aria-label={t('nav.main')}>
          {LINKS.map((link) => (
            <TLink
              key={link.to}
              to={link.to}
              className={`nav__link ${location.pathname === link.to ? 'is-active' : ''}`}
            >
              {t(link.key)}
            </TLink>
          ))}
          <LangSwitch className="nav__lang" />
        </nav>

        <button
          type="button"
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label={open ? t('nav.close') : t('nav.open')}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'is-open' : ''}`}>
        {LINKS.map((link) => (
          <TLink
            key={link.to}
            to={link.to}
            className={`nav__mobile-link ${location.pathname === link.to ? 'is-active' : ''}`}
            onClick={() => setOpen(false)}
          >
            {t(link.key)}
          </TLink>
        ))}
        <div className="nav__mobile-lang">
          <LangSwitch />
        </div>
      </div>
    </header>
  );
}
