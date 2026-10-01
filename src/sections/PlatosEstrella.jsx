import Scatter from '../components/Scatter';
import patronAmarilloH from '../assets/patrones/patron-amarillo-horizontal.jpg';
import rabodetoro from '../assets/platos/rabodetoro.jpg';
import pistachona from '../assets/platos/pistachona.jpg';
import carpicciosa from '../assets/carta/carpicciosa.jpg';
import carbopastica from '../assets/carta/carbopastica.jpg';
import { albahaca, oreccete, tornillo2 } from '../assets/figuritas';

const DECO = [
  { src: albahaca, top: '2%', right: '3%', size: 224, rotate: 10 },
  { src: oreccete, bottom: '3%', left: '3%', size: 240, rotate: -12, hideMobile: true },
  { src: tornillo2, top: '3%', left: '2%', size: 184, rotate: 16, hideMobile: true },
];

const DISHES = [
  {
    name: 'Croquetas Rabo de Toro',
    price: '7,90€',
    tag: null,
    photo: rabodetoro,
  },
  {
    name: 'La Pistachona',
    price: '12,50€',
    tag: 'opción sin gluten',
    photo: pistachona,
  },
  {
    name: 'Focaccia Carpicciosa',
    price: '10,90€',
    tag: null,
    photo: carpicciosa,
  },
  {
    name: 'Carbopastica',
    price: '11,90€',
    tag: 'opción sin gluten',
    photo: carbopastica,
  },
];

export default function PlatosEstrella() {
  return (
    <section
      className="platos section-pattern"
      style={{ backgroundImage: `url(${patronAmarilloH})` }}
    >
      <Scatter items={DECO} />
      <div className="container">
        <h2 className="platos__title">nuestros platos estrella</h2>

        <div className="platos__grid">
          {DISHES.map((dish) => (
            <article className="dish-card" key={dish.name}>
              <div className="dish-card__photo">
                <img src={dish.photo} alt={dish.name} />
              </div>
              <div className="dish-card__info">
                <h3>{dish.name}</h3>
                <p className="dish-card__price">{dish.price}</p>
                {dish.tag && <span className="dish-card__tag">{dish.tag}</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
