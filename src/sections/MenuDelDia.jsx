import Scatter from '../components/Scatter';
import Pic from '../components/Pic';
import { useLang } from '../i18n/LanguageContext';
import menuDelDia from '../assets/platos/menudeldia.jpg?poster';
import { macarron, albahaca } from '../assets/figuritas';

const DECO = [
  { src: macarron, top: '8%', left: '4%', size: 200, rotate: -12, hideMobile: true },
  { src: albahaca, bottom: '10%', right: '4%', size: 220, rotate: 10, hideMobile: true },
];

/**
 * Single hero image with the daily menu — already fully designed
 * (price + copy baked in). To update: replace src/assets/platos/menudeldia.jpg
 * with the new file, same name.
 */
export default function MenuDelDia() {
  const { t } = useLang();
  return (
    <section className="menu-dia">
      <Scatter items={DECO} />
      <div className="container menu-dia__inner">
        <Pic
          pic={menuDelDia}
          alt={t('menuDia.alt')}
          className="menu-dia__image"
          sizes="(min-width: 480px) 420px, 92vw"
        />
      </div>
    </section>
  );
}
