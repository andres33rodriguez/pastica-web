import mortadelaAna from '../assets/instagram/mortadela-ana.jpg?photo';
import pareja from '../assets/instagram/pareja.jpg?photo';
import mesa from '../assets/instagram/mesa.jpg?photo';
import pasta from '../assets/instagram/pasta.jpg?photo';
import anaCanolli from '../assets/instagram/ana-canolli.jpg?photo';
import fotoTradizionale from '../assets/instagram/foto-tradizionale.jpg?photo';
import Pic from './Pic';
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
            <Pic pic={manoCapisci.rojo} className="ig-feed__avatar-deco" />
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
            <Pic
              pic={photo}
              sizes={compact ? '100px' : '(min-width: 700px) 361px, 46vw'}
              className="ig-tile__photo"
            />
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
