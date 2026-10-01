import { useRef, useState } from 'react';
import { WHEEL_DISHES } from '../../data/menu';

const SLICE = 360 / WHEEL_DISHES.length;
const SPIN_MS = 3200;

export default function MenuWheel() {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [winnerIndex, setWinnerIndex] = useState(null);
  const spinsRef = useRef(0);

  const spin = () => {
    if (spinning) return;
    const targetIndex = Math.floor(Math.random() * WHEEL_DISHES.length);
    spinsRef.current += 1;
    const fullSpins = 5 + spinsRef.current;
    // Bring targetIndex's slot (sitting at i*SLICE from top) exactly to the
    // top pointer (0deg) — always a whole multiple of SLICE, so it always
    // lands centered on one photo, never between two.
    const targetAngle = fullSpins * 360 - targetIndex * SLICE;

    setSpinning(true);
    setWinnerIndex(null);
    setRotation(targetAngle);

    window.setTimeout(() => {
      setSpinning(false);
      setWinnerIndex(targetIndex);
    }, SPIN_MS);
  };

  const winner = winnerIndex !== null ? WHEEL_DISHES[winnerIndex] : null;

  return (
    <section className="menu-wheel">
      <div className="container menu-wheel__inner">
        <p className="eyebrow menu-wheel__eyebrow">¿sigues sin decidirte?</p>
        <h2 className="menu-wheel__title">¿qué me pido hoy?</h2>
        <p className="menu-wheel__subtitle">deja que la ruleta decida por ti</p>

        <div className="menu-wheel__stage">
          <span className="menu-wheel__pointer" aria-hidden="true">▼</span>

          <div
            className="menu-wheel__ring"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <span className="menu-wheel__hub" />
            {WHEEL_DISHES.map((dish, i) => {
              const angle = i * SLICE;
              return (
                <div
                  key={dish.name}
                  className="menu-wheel__slot"
                  style={{ transform: `rotate(${angle}deg) translateY(calc(-1 * var(--wheel-radius)))` }}
                >
                  <img
                    src={dish.photo}
                    alt={dish.name}
                    style={{ transform: `translate(-50%, -50%) rotate(${-angle - rotation}deg)` }}
                    className="menu-wheel__photo"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="btn btn-rojo menu-wheel__btn"
          onClick={spin}
          disabled={spinning}
        >
          {spinning ? 'girando…' : 'girar la ruleta'}
        </button>

        <p className={`menu-wheel__result ${winner ? 'is-visible' : ''}`} aria-live="polite">
          {winner ? `hoy toca: ${winner.name}` : ' '}
        </p>
      </div>
    </section>
  );
}
