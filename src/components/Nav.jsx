import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TLink from './TLink';
import logoAmarillo from '../assets/logos/logo-amarillo.png';

const LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/el-menu', label: 'El Menú' },
  { to: '/reservas', label: 'Reservas' },
  { to: '/a-domicilio', label: 'A domicilio' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

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
        <TLink to="/" className="nav__brand" aria-label="Pastica — inicio">
          <img src={logoAmarillo} alt="Pastica" className="nav__brand-wordmark" />
        </TLink>

        <nav className="nav__links" aria-label="Navegación principal">
          {LINKS.map((link) => (
            <TLink
              key={link.to}
              to={link.to}
              className={`nav__link ${location.pathname === link.to ? 'is-active' : ''}`}
            >
              {link.label}
            </TLink>
          ))}
        </nav>

        <button
          type="button"
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
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
            {link.label}
          </TLink>
        ))}
      </div>
    </header>
  );
}
