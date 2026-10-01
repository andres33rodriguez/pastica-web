/**
 * Scatters decorative figuritas (sticker-style illustrations) across a section's
 * background/margins. Positions are hand-tuned per section (see page files) so
 * elements never overlap text or buttons. `hideMobile` drops an item on small
 * screens to keep mobile layouts light.
 *
 * item shape: { src, alt, top, left, right, bottom, size, rotate, hideMobile, z }
 */
export default function Scatter({ items = [] }) {
  return (
    <div className="deco-layer">
      {items.map((item, i) => (
        <img
          key={i}
          src={item.src}
          alt=""
          className={`deco-item ${item.hideMobile ? 'deco-item--hide-mobile' : ''}`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            width: item.size || 64,
            transform: `rotate(${item.rotate || 0}deg)`,
            '--r': `${item.rotate || 0}deg`,
            '--size': `${item.size || 64}px`,
            zIndex: item.z || 1,
          }}
        />
      ))}
    </div>
  );
}
