import Scatter from '../components/Scatter';
import patronRosaAmarillo from '../assets/patrones/patron-rosa-amarillo-vertical.jpg';
import { spaguetti, tornillo3, mariposa } from '../assets/figuritas';
import entrada from '../assets/local/entrada.jpg';
import barra from '../assets/local/barra.jpg';
import salon from '../assets/local/salon.jpg';

const DECO = [
  { src: spaguetti, top: '3%', left: '2%', size: 256, rotate: -16 },
  { src: tornillo3, bottom: '3%', right: '3%', size: 216, rotate: 14, hideMobile: true },
  { src: mariposa, top: '4%', right: '2%', size: 184, rotate: 8, hideMobile: true },
];

const PHOTOS = [
  { label: 'La entrada', src: entrada },
  { label: 'La barra', src: barra },
  { label: 'El salón', src: salon },
];

export default function FotosLocal() {
  return (
    <section
      className="local section-pattern"
      style={{ backgroundImage: `url(${patronRosaAmarillo})` }}
    >
      <Scatter items={DECO} />
      <div className="container">
        <h2 className="local__title">así es pastica por dentro</h2>
        <div className="local__grid">
          {PHOTOS.map((p) => (
            <div className="local__photo" key={p.label}>
              <img src={p.src} alt={p.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
