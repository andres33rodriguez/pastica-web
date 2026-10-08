import Scatter from '../components/Scatter';
import { useLang } from '../i18n/LanguageContext';
import patronAmarilloH from '../assets/patrones/patron-amarillo-horizontal.jpg';
import rabodetoro from '../assets/platos/rabodetoro.jpg';
import carpicciosa from '../assets/carta/carpicciosa.jpg';
import gnocchisima from '../assets/carta/gnocchisima.jpg';
import tequenosqueso from '../assets/carta/tequenosqueso.jpg';
import { albahaca, oreccete, tornillo2 } from '../assets/figuritas';

const DECO = [
  { src: albahaca, top: '2%', right: '3%', size: 224, rotate: 10 },
  { src: oreccete, bottom: '3%', left: '3%', size: 240, rotate: -12, hideMobile: true },
  { src: tornillo2, top: '3%', left: '2%', size: 184, rotate: 16, hideMobile: true },
];

const DISHES = [
  {
    name: 'Croquetas Rabo de Toro',
    price: '8,90€',
    glutenFree: false,
    photo: rabodetoro,
  },
  {
    name: 'Gnocchisima',
    price: '13,00€',
    glutenFree: true,
    photo: gnocchisima,
  },
  {
    name: 'Focaccia Carpicciosa',
    price: '11,00€',
    glutenFree: false,
    photo: carpicciosa,
  },
  {
    name: 'Tequeños de Queso',
    price: '7,90€',
    glutenFree: false,
    photo: tequenosqueso,
  },
];

export default function PlatosEstrella() {
  const { t } = useLang();
  return (
    <section
      className="platos section-pattern"
      style={{ backgroundImage: `url(${patronAmarilloH})` }}
    >
      <Scatter items={DECO} />
      <div className="container">
        <h2 className="platos__title">{t('platos.title')}</h2>

        <div className="platos__grid">
          {DISHES.map((dish) => (
            <article className="dish-card" key={dish.name}>
              <div className="dish-card__photo">
                <img src={dish.photo} alt={dish.name} />
              </div>
              <div className="dish-card__info">
                <h3>{dish.name}</h3>
                <p className="dish-card__price">{dish.price}</p>
                {dish.glutenFree && (
                  <span className="dish-card__tag">{t('platos.glutenFree')}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
