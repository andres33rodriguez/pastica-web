import platos from '../assets/instagram/platos.jpg';
import pareja from '../assets/instagram/pareja.jpg';
import mesa from '../assets/instagram/mesa.jpg';
import pasta from '../assets/instagram/pasta.jpg';
import comiendo from '../assets/instagram/comiendo.jpg';
import ana2 from '../assets/instagram/ana2.jpg';
import { manoCapisci } from '../assets/mano-capisci';

const IG_URL = 'https://www.instagram.com/pastica.es/';

const PHOTOS = [platos, pareja, mesa, pasta, comiendo, ana2];

/**
 * Curated-by-hand IG feed (no API/token). To swap a photo later, replace the
 * matching file in src/assets/instagram/ — same name, same spot in PHOTOS.
 */
export default function InstagramFeed({ compact = false }) {
  return (
    <div className={`ig-feed ${compact ? 'ig-feed--compact' : ''}`}>
      {!compact && (
        <div className="ig-feed__header">
          <div className="ig-feed__who">
            <img src={manoCapisci.rojo} alt=""className="ig-feed__avatar-deco" />
            <div>
              <p className="ig-feed__handle">@pastica.es</p>
              <p className="ig-feed__followers">síguenos para más pasta y más lío</p>
            </div>
          </div>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-crema ig-feed__follow"
          >
            Follow
          </a>
        </div>
      )}

      <div className="ig-feed__grid">
        {PHOTOS.map((photo, i) => (
          <a
            key={i}
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ig-tile"
            aria-label="Ver publicación en Instagram"
          >
            <img src={photo} alt="" className="ig-tile__photo" loading="lazy" />
          </a>
        ))}
      </div>

      {compact && (
        <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="ig-feed__handle-link">
          @pastica.es — síguenos
        </a>
      )}
    </div>
  );
}
