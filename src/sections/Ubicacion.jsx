import Scatter from '../components/Scatter';
import patronAzul from '../assets/patrones/patron-azul-vertical.jpg';
import { tomate, plumita } from '../assets/figuritas';

const DECO = [
  { src: tomate, top: '4%', right: '3%', size: 232, rotate: 12 },
  { src: plumita, bottom: '4%', left: '3%', size: 200, rotate: -10, hideMobile: true },
];

const MAPS_SRC =
  'https://www.google.com/maps?q=Plaza+de+Cascorro,+21,+Centro,+28005+Madrid&output=embed';

const HORARIO = [
  ['Lunes a jueves', '13:00 – 23:30'],
  ['Viernes y sábado', '13:00 – 00:30'],
  ['Domingo', '10:00 – 23:30'],
];

export default function Ubicacion() {
  return (
    <section
      className="ubicacion section-pattern"
      style={{ backgroundImage: `url(${patronAzul})` }}
    >
      <Scatter items={DECO} />
      <div className="container ubicacion__inner">
        <div className="ubicacion__info">
          <h2 className="ubicacion__title">encuéntranos</h2>
          <p className="ubicacion__address">Plaza de Cascorro, 21, Centro, 28005 Madrid</p>

          <table className="ubicacion__horario">
            <tbody>
              {HORARIO.map(([day, hours]) => (
                <tr key={day}>
                  <td>{day}</td>
                  <td>{hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="ubicacion__note font-script">los domingos nos da por madrugar</p>
        </div>

        <div className="ubicacion__map">
          <iframe
            src={MAPS_SRC}
            title="Ubicación de Pastica en Google Maps"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
