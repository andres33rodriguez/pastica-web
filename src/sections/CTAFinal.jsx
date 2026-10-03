import Scatter from '../components/Scatter';
import { useLang } from '../i18n/LanguageContext';
import WhatsAppButton from '../components/WhatsAppButton';
import TLink from '../components/TLink';
import patronAmarillo from '../assets/patrones/patron-amarillo-vertical.jpg';
import { macarron, mariposa } from '../assets/figuritas';

const DECO = [
  { src: macarron, top: '2%', left: '2%', size: 130, rotate: -14, hideMobile: true },
  { src: mariposa, top: '2%', right: '2%', size: 120, rotate: 14, hideMobile: true },
];

export default function CTAFinal() {
  const { t } = useLang();
  return (
    <section
      className="cta-final section-pattern"
      style={{ backgroundImage: `url(${patronAmarillo})` }}
    >
      <Scatter items={DECO} />
      <div className="container cta-final__inner">
        <h2 className="cta-final__title">{t('cta.title')}</h2>
        <p className="cta-final__subtitle">{t('cta.subtitle')}</p>
        <div className="cta-final__actions">
          <WhatsAppButton label={t('cta.whatsapp')} />
          <TLink to="/reservas" className="btn btn-rojo">
            {t('cta.reservations')}
          </TLink>
          <TLink to="/a-domicilio" className="btn btn-rojo">
            {t('cta.delivery')}
          </TLink>
        </div>
      </div>
    </section>
  );
}
