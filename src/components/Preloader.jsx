import { useEffect, useRef, useState } from 'react';
import Pic from './Pic';
import { manoCapisciList } from '../assets/mano-capisci';

const SESSION_KEY = 'pastica_preloader_seen';

function readShouldShow() {
  try {
    return sessionStorage.getItem(SESSION_KEY) !== '1';
  } catch {
    return true;
  }
}

const pickIcon = () => manoCapisciList[Math.floor(Math.random() * manoCapisciList.length)];

/**
 * The pre-rendered HTML always contains the preloader (so the first paint is
 * the same for everyone); whether to keep it is decided after hydration. For
 * returning visitors in the same session an inline script in index.html hides
 * it via CSS (`.no-preloader`) before first paint, and the effect removes it.
 * The icon is fixed during hydration and randomized right after, once the
 * preloader is actually going to show.
 */
export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [icon, setIcon] = useState(manoCapisciList[0]);
  // Read the session flag once: StrictMode re-runs effects, and by then the
  // flag is already written.
  const shouldShow = useRef(null);

  useEffect(() => {
    if (shouldShow.current === null) shouldShow.current = readShouldShow();
    if (!shouldShow.current) {
      setHidden(true);
      return;
    }

    setIcon(pickIcon());

    try {
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      /* sessionStorage unavailable — preloader will just show every time */
    }

    const fadeTimer = window.setTimeout(() => setVisible(false), 1200);
    const removeTimer = window.setTimeout(() => setHidden(true), 1700);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`preloader ${visible ? '' : 'is-hidden'}`} aria-hidden="true">
      <Pic pic={icon} className="preloader__icon" loading="eager" />
    </div>
  );
}
