import Pic from './Pic';

/**
 * Scatters decorative figuritas (sticker-style illustrations) across a section's
 * background/margins. Positions are hand-tuned per section (see page files) so
 * elements never overlap text or buttons. `hideMobile` drops an item on small
 * screens to keep mobile layouts light.
 *
 * item shape: { src, top, left, right, bottom, size, rotate, hideMobile, z }
 * (`src` is a figurita imported from assets/figuritas). Pass `eager` for the
 * first section of a page, so its figuritas aren't lazy-loaded.
 */
export default function Scatter({ items = [], eager = false }) {
  return (
    <div className="deco-layer">
      {items.map((item, i) => (
        <Pic
          key={i}
          pic={item.src}
          sizes={`(max-width: 640px) min(${(item.size || 64) * 1.2}px, 34vw), ${item.size || 64}px`}
          loading={eager ? 'eager' : 'lazy'}
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
