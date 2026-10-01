export default function Chip({ icon, text }) {
  return (
    <span className="menu-chip">
      <span className="menu-chip__icon" aria-hidden="true">{icon}</span>
      {text}
    </span>
  );
}
