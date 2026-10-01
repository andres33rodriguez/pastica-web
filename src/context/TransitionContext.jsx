import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { manoCapisci } from '../assets/mano-capisci';

const ROUTE_COLOR = {
  '/': 'amarillo',
  '/el-menu': 'azul',
  '/reservas': 'rojo',
  '/a-domicilio': 'celeste',
};

const TransitionContext = createContext(null);

export function TransitionProvider({ children }) {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [color, setColor] = useState('amarillo');

  const goTo = useCallback((path) => {
    if (path === window.location.pathname) return;

    // El Menú has its own entrance interaction (the pasta curtain) instead
    // of the mano-capisci icon transition — skip straight there.
    if (path === '/el-menu') {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
      return;
    }

    const colorKey = ROUTE_COLOR[path] || 'amarillo';
    setColor(colorKey);
    setActive(true);
    window.setTimeout(() => {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    }, 340);
    window.setTimeout(() => {
      setActive(false);
    }, 620);
  }, [navigate]);

  const value = useMemo(() => ({ goTo, active, color }), [goTo, active, color]);

  return (
    <TransitionContext.Provider value={value}>
      {children}
      <div className={`route-overlay ${active ? 'is-active' : ''}`} aria-hidden="true">
        <img src={manoCapisci[color]} alt="" className="route-overlay__icon" />
      </div>
    </TransitionContext.Provider>
  );
}

export function usePageTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error('usePageTransition must be used within TransitionProvider');
  return ctx;
}
