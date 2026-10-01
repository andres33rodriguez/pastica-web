/**
 * Flat price list for items that don't need a full DishCard —
 * coffees, soft drinks, beers, spirits… (never photographed).
 * rows: [ [name, price], ... ]
 */
export default function SimpleList({ rows }) {
  return (
    <ul className="simple-list">
      {rows.map(([name, price]) => (
        <li key={name} className="simple-list__row">
          <span className="simple-list__name">{name}</span>
          <span className="simple-list__dots" aria-hidden="true" />
          <span className="simple-list__price">{price}</span>
        </li>
      ))}
    </ul>
  );
}
