import Chip from './Chip';
import Pic from '../Pic';
import { useLang } from '../../i18n/LanguageContext';
import descriptionsEn from '../../i18n/dishDescriptionsEn';

export default function DishCard({ dish }) {
  const { lang, t } = useLang();
  const desc = (lang === 'en' && descriptionsEn[dish.name]) || dish.desc;
  const price = dish.priceKey ? t(dish.priceKey) : dish.price;  return (
    <article className={`menu-dish ${dish.photo ? 'menu-dish--photo' : ''}`}>
      {dish.photo && (
        <div className="menu-dish__photo">
          <Pic
            pic={dish.photo}
            alt={dish.name}
            sizes="(min-width: 1000px) 340px, (min-width: 700px) 46vw, 92vw"
          />
        </div>
      )}
      <div className="menu-dish__body">
        <div className="menu-dish__head">
          <h3 className="menu-dish__name">{dish.name}</h3>
          <span className="menu-dish__price">{price}</span>
        </div>
        <p className="menu-dish__desc">{desc}</p>
        {dish.chips?.length > 0 && (
          <div className="menu-dish__chips">
            {dish.chips.map((chip, i) => (
              <Chip key={i} icon={chip.icon} text={chip.text} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
