import { useLang } from '../../i18n/LanguageContext';
import drinksEn from '../../i18n/drinksEn';

/**
 * Flat price list for items that don't need a full DishCard —
 * coffees, soft drinks, beers, spirits… (never photographed).
 * rows: [ [name, price], ... ]
 * In English the name (notes included) comes from drinksEn, keyed by the
 * Spanish name; rows without an entry render as written.
 */
export default function SimpleList({ rows }) {
  const { lang } = useLang();
  return (
    <ul className="simple-list">
      {rows.map(([name, price]) => (
        <li key={name} className="simple-list__row">
          <span className="simple-list__name">
            {(lang === 'en' && drinksEn[name]) || name}
          </span>
          <span className="simple-list__dots" aria-hidden="true" />
          <span className="simple-list__price">{price}</span>
        </li>
      ))}
    </ul>
  );
}
