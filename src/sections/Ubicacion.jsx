import Scatter from '../components/Scatter';
import { useLang } from '../i18n/LanguageContext';
import patronAzul from '../assets/patrones/patron-azul-vertical.jpg';
import { tomate, plumita } from '../assets/figuritas';

const DECO = [
  { src: tomate, top: '4%', right: '3%', size: 232, rotate: 12 },
  { src: plumita, bottom: '4%', left: '3%', size: 200, rotate: -10, hideMobile: true },
];

const MAPS_SRC =
  'https://www.google.com/maps?q=Plaza+de+Cascorro,+21,+Centro,+28005+Madrid&output=embed';

const HORARIO_KEYS = ['monThu', 'friSat', 'sun'];

export default function Ubicacion() {
  const { t } = useLang();
  return (
    <section
      className="ubicacion section-pattern"
      style={{ backgroundImage: `url(${patronAzul})` }}
    >
      <Scatter items={DECO} />
      <div className="container ubicacion__inner">
        <div className="ubicacion__info">
          <h2 className="ubicacion__title">{t('ubicacion.title')}</h2>
          <p className="ubicacion__address">Plaza de Cascorro, 21, Centro, 28005 Madrid</p>

          <table className="ubicacion__horario">
            <tbody>
              {HORARIO_KEYS.map((key) => (
                <tr key={key}>
                  <td>{t(`ubicacion.days.${key}`)}</td>
                  <td>{t(`ubicacion.hours.${key}`)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="ubicacion__note font-script">{t('ubicacion.note')}</p>
        </div>

        <div className="ubicacion__map">
          <iframe
            src={MAPS_SRC}
            title={t('ubicacion.mapTitle')}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
