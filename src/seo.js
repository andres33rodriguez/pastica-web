// SEO data shared by the build-time prerender (scripts/prerender.mjs) and the
// client (src/components/Seo.jsx). Plain JS with no imports so Node can load it.
//
// Everything here comes from facts already on the site (name, address, hours,
// WhatsApp number, booking/delivery links, Instagram). Nothing is invented.

export const SITE_URL = 'https://www.pastica.com';
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

// Public, indexable routes (also the sitemap and the prerender list).
export const ROUTES = ['/', '/el-menu', '/reservas', '/a-domicilio', '/aviso-legal'];

const SEO = {
  '/': {
    es: {
      title: 'Pastica, restaurante italiano en Madrid — Pasta fresca, hecha a mano cada día',
      description:
        'Pastica, restaurante italiano en la Plaza de Cascorro, Madrid: pasta fresca, hecha a mano cada día. Mira la carta, reserva mesa o pide a domicilio.',
    },
    en: {
      title: 'Pastica, Italian restaurant in Madrid — Fresh pasta, handmade every day',
      description:
        'Pastica, Italian restaurant at Plaza de Cascorro, Madrid: fresh pasta, handmade every day. See the menu, book a table or order delivery.',
    },
  },
  '/el-menu': {
    es: {
      title: 'La carta de Pastica — Pasta fresca italiana en Madrid',
      description:
        'La carta de Pastica, restaurante italiano en la Plaza de Cascorro, Madrid: entrantes, focaccias, pasta fresca, postres, bebidas, desayunos y menú del día.',
    },
    en: {
      title: 'The menu at Pastica — Fresh Italian pasta in Madrid',
      description:
        'The Pastica menu, Italian restaurant at Plaza de Cascorro, Madrid: starters, focaccias, fresh pasta, desserts, drinks, breakfast and the daily menu.',
    },
  },
  '/reservas': {
    es: {
      title: 'Reservar mesa en Pastica — Restaurante italiano en Madrid',
      description:
        'Reserva tu mesa en Pastica, restaurante italiano de pasta fresca en la Plaza de Cascorro, Madrid. Reserva online o escríbenos por WhatsApp.',
    },
    en: {
      title: 'Book a table at Pastica — Italian restaurant in Madrid',
      description:
        'Book your table at Pastica, an Italian fresh pasta restaurant at Plaza de Cascorro, Madrid. Reserve online or message us on WhatsApp.',
    },
  },
  '/a-domicilio': {
    es: {
      title: 'Pastica a domicilio — Pasta fresca italiana en Madrid',
      description:
        'Pide la pasta fresca de Pastica a domicilio en Madrid con Glovo o Uber Eats. Restaurante italiano en la Plaza de Cascorro.',
    },
    en: {
      title: 'Pastica delivery — Fresh Italian pasta in Madrid',
      description:
        'Order Pastica fresh pasta for delivery in Madrid with Glovo or Uber Eats. Italian restaurant at Plaza de Cascorro.',
    },
  },
  '/aviso-legal': {
    es: {
      title: 'Aviso legal — Pastica, restaurante italiano en Madrid',
      description:
        'Aviso legal de Pastica, restaurante italiano de pasta fresca en la Plaza de Cascorro, 21, Madrid.',
    },
    en: {
      title: 'Legal notice — Pastica, Italian restaurant in Madrid',
      description:
        'Legal notice of Pastica, an Italian fresh pasta restaurant at Plaza de Cascorro, 21, Madrid.',
    },
  },
};

const NOT_FOUND = {
  es: { title: 'Página no encontrada — Pastica', description: SEO['/'].es.description },
  en: { title: 'Page not found — Pastica', description: SEO['/'].en.description },
};

const normalize = (pathname) => (pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname);

/** True for the public pages (anything else is the "not found" page). */
export const isKnownRoute = (pathname) => normalize(pathname) in SEO;

/** Route → { title, description } in the given language (falls back to "not found"). */
export function getSeo(pathname, lang = 'es') {
  return (SEO[normalize(pathname)] || NOT_FOUND)[lang] || NOT_FOUND.es;
}

/**
 * The one address of a page: absolute, https + www, no trailing slash except
 * the home page ("https://www.pastica.com/"). Also what sitemap.xml lists.
 */
export function canonicalUrl(pathname) {
  const path = normalize(pathname);
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const WHATSAPP_NUMBER = '+34696903534'; // from the wa.me link used across the site

/** JSON-LD (Restaurant) for the home page. */
export const RESTAURANT_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${SITE_URL}/#restaurant`,
  name: 'Pastica',
  url: `${SITE_URL}/`,
  image: OG_IMAGE,
  description: SEO['/'].es.description,
  servesCuisine: ['Italian', 'Pasta'],
  hasMenu: `${SITE_URL}/el-menu`,
  acceptsReservations: 'https://reservation.dish.co/shortlink/346474',
  telephone: WHATSAPP_NUMBER,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plaza de Cascorro, 21',
    addressLocality: 'Madrid',
    postalCode: '28005',
    addressCountry: 'ES',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '13:00',
      closes: '23:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday'],
      opens: '13:00',
      closes: '00:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '10:00',
      closes: '23:30',
    },
  ],
  sameAs: [
    'https://www.instagram.com/pastica.es/',
    'https://glovoapp.com/es/es/madrid/stores/pastica-madrid',
    'https://www.ubereats.com/es/store/pastica/mrLpMha0Xv6vLwZX17Qiqg',
  ],
};

/**
 * The <head> tags that differ per route (title, description, canonical,
 * Open Graph, Twitter, JSON-LD). `preloads` are extra tags for that route
 * (e.g. the LCP background image), already rendered as HTML.
 */
export function renderHeadTags(pathname, { preloads = '' } = {}) {
  const { title, description } = getSeo(pathname, 'es');
  const url = canonicalUrl(pathname);
  const t = escapeHtml(title);
  const d = escapeHtml(description);
  const lines = [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Pastica" />`,
    `<meta property="og:locale" content="es_ES" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Pastica — restaurante italiano de pasta fresca en Madrid" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  ];
  if (pathname === '/') {
    lines.push(
      `<script type="application/ld+json">${JSON.stringify(RESTAURANT_JSON_LD)}</script>`,
    );
  }
  if (preloads) lines.push(preloads);
  return lines.join('\n    ');
}
