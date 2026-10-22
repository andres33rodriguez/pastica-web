import mortadelaAna from '../assets/instagram/mortadela-ana.jpg';
import pareja from '../assets/instagram/pareja.jpg';
import mesa from '../assets/instagram/mesa.jpg';
import pasta from '../assets/instagram/pasta.jpg';
import anaCanolli from '../assets/instagram/ana-canolli.jpg';
import fotoTradizionale from '../assets/instagram/foto-tradizionale.jpg';
import { manoCapisci } from '../assets/mano-capisci';
import { useLang } from '../i18n/LanguageContext';

const IG_URL = 'https://www.instagram.com/pastica.es/';

const PHOTOS = [mortadelaAna, pareja, mesa, pasta, anaCanolli, fotoTradizionale];

/**
 * Curated-by-hand IG feed (no API/token). To swap a photo later, replace the
 * matching file in src/assets/instagram/ — same name, same spot in PHOTOS.
 */
export default function InstagramFeed({ compact = false }) {
  const { t } = useLang();
  return (
    <div className={`ig-feed ${compact ? 'ig-feed--compact' : ''}`}>
      {!compact && (
        <div className="ig-feed__header">
          <div className="ig-feed__who">
            <img src={manoCapisci.rojo} alt=""className="ig-feed__avatar-deco" />
            <div>
              <p className="ig-feed__handle">@pastica.es</p>
              <p className="ig-feed__followers">{t('instagram.followers')}</p>
            </div>
          </div>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-crema ig-feed__follow"
          >
            {t('instagram.follow')}
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
            aria-label={t('instagram.postAria')}
          >
            <img src={photo} alt="" className="ig-tile__photo" loading="lazy" />
          </a>
        ))}
      </div>

      {compact && (
        <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="ig-feed__handle-link">
          {t('instagram.handleLink')}
        </a>
      )}
    </div>
  );
}
