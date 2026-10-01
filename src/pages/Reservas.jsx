import { useEffect, useRef } from 'react';
import Scatter from '../components/Scatter';
import WhatsAppButton from '../components/WhatsAppButton';
import patronAmarillo from '../assets/patrones/patron-amarillo-vertical.jpg';
import { tornillo2, oreccete } from '../assets/figuritas';

const RESERVAS_URL = 'https://reservation.dish.co/shortlink/346474';

const DECO = [
  { src: tornillo2, top: '5%', left: '3%', size: 224, rotate: -16, hideMobile: true },
  { src: oreccete, bottom: '5%', right: '3%', size: 240, rotate: 14, hideMobile: true },
];

export default function Reservas() {
  const opened = useRef(false);

  useEffect(() => {
    if (opened.current) return;
    opened.current = true;
    window.open(RESERVAS_URL, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <section
      className="reservas section-pattern"
      style={{ backgroundImage: `url(${patronAmarillo})` }}
    >
      <Scatter items={DECO} />
      <div className="container reservas__inner">
        <h1 className="reservas__title">te llevamos a reservar</h1>
        <p className="reservas__subtitle">
          se te abrió (o está a punto de abrirse) una pestaña nueva con nuestro sistema
          de reservas. si tu navegador la bloqueó, dale al botón.
        </p>
        <a
          href={RESERVAS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-crema"
        >
          Ir a reservar
        </a>
        <p className="reservas__or">o si lo prefieres, más directo todavía:</p>
        <WhatsAppButton label="Escríbenos por WhatsApp" />
      </div>
    </section>
  );
}
