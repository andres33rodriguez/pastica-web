import Scatter from '../components/Scatter';
import WhatsAppButton from '../components/WhatsAppButton';
import TLink from '../components/TLink';
import patronAmarillo from '../assets/patrones/patron-amarillo-vertical.jpg';
import { macarron, mariposa } from '../assets/figuritas';

const DECO = [
  { src: macarron, top: '2%', left: '2%', size: 130, rotate: -14, hideMobile: true },
  { src: mariposa, top: '2%', right: '2%', size: 120, rotate: 14, hideMobile: true },
];

export default function CTAFinal() {
  return (
    <section
      className="cta-final section-pattern"
      style={{ backgroundImage: `url(${patronAmarillo})` }}
    >
      <Scatter items={DECO} />
      <div className="container cta-final__inner">
        <h2 className="cta-final__title">es hora de comer.</h2>
        <p className="cta-final__subtitle">
          reserva mesa, pide para llevar o pídelo a domicilio — tú eliges
        </p>
        <div className="cta-final__actions">
          <WhatsAppButton label="Reservar por WhatsApp" />
          <TLink to="/reservas" className="btn btn-rojo">
            Reservas
          </TLink>
          <TLink to="/a-domicilio" className="btn btn-rojo">
            A domicilio
          </TLink>
        </div>
      </div>
    </section>
  );
}
