import { useEffect, useState } from 'react';
import { useLang } from '../../i18n/LanguageContext';

const STRAND_COUNT = 22;

export default function PastaCurtain({ onDone }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = hidden ? '' : 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [hidden]);

  const reveal = () => {
    if (open) return;
    setOpen(true);
    window.setTimeout(() => {
      setHidden(true);
      onDone?.();
    }, 900);
  };

  if (hidden) return null;

  const strands = Array.from({ length: STRAND_COUNT }, (_, i) => i);
  const mid = (STRAND_COUNT - 1) / 2;

  return (
    <button
      type="button"
      className={`pasta-curtain ${open ? 'is-open' : ''}`}
      onClick={reveal}
      aria-label={t('curtain.aria')}
    >
      {strands.map((i) => {
        const fromCenter = i - mid;
        const side = fromCenter < 0 ? -1 : 1;
        const delay = Math.abs(fromCenter) * 18;
        return (
          <span
            key={i}
            className={`pasta-curtain__strand ${i % 2 === 0 ? 'is-pale' : ''}`}
            style={{
              left: `${(i / STRAND_COUNT) * 100}%`,
              width: `${100 / STRAND_COUNT + 0.6}%`,
              transitionDelay: `${delay}ms`,
              '--swing': `${side * (55 + Math.abs(fromCenter) * 6)}deg`,
              '--travel': `${side * (60 + Math.abs(fromCenter) * 14)}vw`,
            }}
          />
        );
      })}

      <span className="pasta-curtain__hint">
        <span className="pasta-curtain__hint-tap">{t('curtain.enter')}</span>
      </span>
    </button>
  );
}
