export default function CategoryTabs({ categories, active, onChange }) {
  return (
    <div className="menu-tabs" role="tablist" aria-label="Categorías de la carta">
      {categories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          role="tab"
          aria-selected={active === cat.id}
          className={`menu-tabs__btn ${active === cat.id ? 'is-active' : ''}`}
          onClick={() => onChange(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
