import Scatter from '../components/Scatter';
import glovoLogo from '../assets/delivery/glovo.png';
import uberEatsLogo from '../assets/delivery/ubereats.png';
import { spaguetti, tomate, macarron } from '../assets/figuritas';

const GLOVO_URL = 'https://glovoapp.com/es/es/madrid/stores/pastica-madrid';
const UBEREATS_URL = 'https://www.ubereats.com/es/store/pastica/mrLpMha0Xv6vLwZX17Qiqg';

const DECO = [
  { src: spaguetti, top: '5%', right: '3%', size: 240, rotate: 14 },
  { src: tomate, bottom: '6%', left: '3%', size: 216, rotate: -12, hideMobile: true },
  { src: macarron, top: '46%', left: '2%', size: 184, rotate: 10, hideMobile: true },
];

export default function ADomicilio() {
  return (
    <section className="a-domicilio">
      <Scatter items={DECO} />
      <div className="container a-domicilio__inner">
        <p className="eyebrow">pastica en tu sofá</p>
        <h1 className="a-domicilio__title">a domicilio</h1>
        <p className="a-domicilio__subtitle">
          pide en dos clics y nosotros nos encargamos de que llegue ALWAYSSSS al dente.
        </p>

        <div className="a-domicilio__buttons">
          <a
            href={GLOVO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="delivery-btn delivery-btn--glovo"
          >
            <img src={glovoLogo} alt="Pedir en Glovo" />
          </a>
          <a
            href={UBEREATS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="delivery-btn delivery-btn--ubereats"
          >
            <img src={uberEatsLogo} alt="Pedir en Uber Eats" />
          </a>
        </div>
      </div>
    </section>
  );
}
