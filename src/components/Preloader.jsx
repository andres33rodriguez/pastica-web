import { useEffect, useState } from 'react';
import { manoCapisciList } from '../assets/mano-capisci';

const SESSION_KEY = 'pastica_preloader_seen';

function readShouldShow() {
  try {
    return sessionStorage.getItem(SESSION_KEY) !== '1';
  } catch {
    return true;
  }
}

export default function Preloader() {
  const [shouldShow] = useState(readShouldShow);
  const [visible, setVisible] = useState(shouldShow);
  const [hidden, setHidden] = useState(!shouldShow);
  const [icon] = useState(() => manoCapisciList[Math.floor(Math.random() * manoCapisciList.length)]);

  useEffect(() => {
    if (!shouldShow) return;

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
  }, [shouldShow]);

  if (hidden) return null;

  return (
    <div className={`preloader ${visible ? '' : 'is-hidden'}`} aria-hidden="true">
      <img src={icon} alt="" className="preloader__icon" />
    </div>
  );
}
