import TLink from './TLink';
import InstagramFeed from './InstagramFeed';
import Scatter from './Scatter';
import { useLang } from '../i18n/LanguageContext';
import logoAzul from '../assets/logos/logo-azul.png';
import { rigatoni, plumita } from '../assets/figuritas';

const DECO = [
  { src: rigatoni, top: '4%', left: '3%', size: 176, rotate: -14, hideMobile: true },
  { src: plumita, top: '5%', right: '3%', size: 160, rotate: 12, hideMobile: true },
];

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Scatter items={DECO} />
      <div className="container footer__inner">
        <img src={logoAzul} alt="Pastica" className="footer__logo" />

        <InstagramFeed compact />

        <div className="footer__bottom">
          <p>© {year} Pastica · Plaza de Cascorro, 21, Centro, 28005 Madrid</p>
          <TLink to="/aviso-legal" className="footer__legal-link">{t('footer.legal')}</TLink>
        </div>
      </div>
    </footer>
  );
}
