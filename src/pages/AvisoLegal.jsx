import { useLang } from '../i18n/LanguageContext';

const EMAIL = 'anavalentina@pastica.com';

// The title font has no numerals, so the "1." prefix is drawn in the body font.
function SectionTitle({ children }) {
  const match = /^(\d+\.)\s*(.*)$/.exec(children);
  if (!match) return <h2>{children}</h2>;
  return (
    <h2>
      <span className="legal-num">{match[1]}</span> {match[2]}
    </h2>
  );
}

export default function AvisoLegal() {
  const { t } = useLang();

  return (
    <section className="aviso-legal">
      <div className="container aviso-legal__inner">
        <h1>{t('legal.title')}</h1>

        <SectionTitle>{t('legal.s1')}</SectionTitle>
        <p>{t('legal.p1')}</p>
        <ul>
          <li><strong>{t('legal.tradeName')}:</strong> Pastica</li>
          <li><strong>{t('legal.taxId')}:</strong> B27533421</li>
          <li><strong>{t('legal.address')}:</strong> Plaza de Cascorro, 21, Centro, 28005 Madrid</li>
          <li><strong>{t('legal.email')}:</strong> {EMAIL}</li>
        </ul>

        <SectionTitle>{t('legal.s2')}</SectionTitle>
        <p>{t('legal.p2')}</p>

        <SectionTitle>{t('legal.s3')}</SectionTitle>
        <p>{t('legal.p3')}</p>

        <SectionTitle>{t('legal.s4')}</SectionTitle>
        <p>
          {t('legal.p4')} <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </div>
    </section>
  );
}
