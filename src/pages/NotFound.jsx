import TLink from '../components/TLink';
import { useLang } from '../i18n/LanguageContext';
import { manoCapisci } from '../assets/mano-capisci';

export default function NotFound() {
  const { t } = useLang();

  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <img src={manoCapisci.rosa} alt="" className="not-found__icon" />
        <h1>{t('notFound.title')}</h1>
        <p>{t('notFound.text')}</p>
        <TLink to="/" className="btn btn-rojo">{t('notFound.back')}</TLink>
      </div>
    </section>
  );
}
