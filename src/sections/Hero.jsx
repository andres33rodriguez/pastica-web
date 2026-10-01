import TLink from '../components/TLink';
import Scatter from '../components/Scatter';
import patronAmarillo from '../assets/patrones/patron-amarillo-vertical.jpg';
import { tomate, mariposa, plumita, rigatoni } from '../assets/figuritas';

const DECO = [
  { src: tomate, top: '4%', left: '2%', size: 280, rotate: -14 },
  { src: mariposa, top: '6%', right: '3%', size: 220, rotate: 12 },
  { src: plumita, bottom: '6%', left: '3%', size: 200, rotate: -10, hideMobile: true },
  { src: rigatoni, bottom: '8%', right: '2%', size: 240, rotate: 14, hideMobile: true },
];

export default function Hero() {
  return (
    <section
      className="hero section-pattern"
      style={{ backgroundImage: `url(${patronAmarillo})` }}
    >
      <Scatter items={DECO} />
      <div className="container hero__inner">
        <p className="hero__kicker font-script">pasta, cervecita y lo que surja</p>
        <h1 className="hero__title">pasta fresca, hecha a mano cada día</h1>
        <p className="hero__subtitle">
          Harina, huevo y mucha pasión. Disfruta la auténtica experiencia de una
          trattoria, con un toque moderno y desenfadado.
        </p>
        <TLink to="/el-menu" className="btn btn-rojo hero__cta">
          Ver el menú
        </TLink>
      </div>
    </section>
  );
}
