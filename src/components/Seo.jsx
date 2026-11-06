import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import { canonicalUrl, getSeo, isKnownRoute } from '../seo';

// The prerendered HTML already carries the Spanish tags for each route; this
// keeps title/description/Open Graph in sync when the visitor navigates inside
// the app or switches language.
function setTag(selector, attr, value, create) {
  let el = document.head.querySelector(selector);
  if (!el) {
    if (!create) return;
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const meta = (key, name) => () => {
  const el = document.createElement('meta');
  el.setAttribute(key, name);
  return el;
};

export default function Seo() {
  const { pathname } = useLocation();
  const { lang } = useLang();

  useEffect(() => {
    const { title, description } = getSeo(pathname, lang);
    const url = canonicalUrl(pathname);

    document.title = title;
    setTag('meta[name="description"]', 'content', description, meta('name', 'description'));
    setTag('meta[property="og:title"]', 'content', title, meta('property', 'og:title'));
    setTag('meta[property="og:description"]', 'content', description, meta('property', 'og:description'));
    setTag('meta[name="twitter:title"]', 'content', title, meta('name', 'twitter:title'));
    setTag('meta[name="twitter:description"]', 'content', description, meta('name', 'twitter:description'));
    if (isKnownRoute(pathname)) {
      setTag('meta[property="og:url"]', 'content', url, meta('property', 'og:url'));
      setTag('link[rel="canonical"]', 'href', url, () => {
        const el = document.createElement('link');
        el.setAttribute('rel', 'canonical');
        return el;
      });
    } else {
      // Unknown URLs (the "not found" page) have no canonical.
      document.head.querySelector('link[rel="canonical"]')?.remove();
      document.head.querySelector('meta[property="og:url"]')?.remove();
    }
    setTag('meta[property="og:locale"]', 'content', lang === 'en' ? 'en_GB' : 'es_ES');
  }, [pathname, lang]);

  return null;
}
