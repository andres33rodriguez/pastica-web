import Scatter from '../components/Scatter';
import menuDelDia from '../assets/platos/menudeldia.png';
import { macarron, albahaca } from '../assets/figuritas';

const DECO = [
  { src: macarron, top: '8%', left: '4%', size: 200, rotate: -12, hideMobile: true },
  { src: albahaca, bottom: '10%', right: '4%', size: 220, rotate: 10, hideMobile: true },
];

/**
 * Single hero image with the daily menu — already fully designed
 * (price + copy baked in). To update: replace src/assets/platos/menudeldia.png
 * with the new file, same name.
 */
export default function MenuDelDia() {
  return (
    <section className="menu-dia">
      <Scatter items={DECO} />
      <div className="container menu-dia__inner">
        <img
          src={menuDelDia}
          alt="Menú del día — 13,90€ — Alwaysssss al dente"
          className="menu-dia__image"
        />
      </div>
    </section>
  );
}
