// Build-time entry used by scripts/prerender.mjs (built with `vite build --ssr`).
import { prerender } from 'react-dom/static'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import patronAmarillo from './assets/patrones/patron-amarillo-vertical.jpg?bg'
import patronAzul from './assets/patrones/patron-azul-vertical.jpg?bg'

// The hero background of each route is what paints first (it is the likely
// LCP element), so it is preloaded from the <head>.
const HERO_BACKGROUND = {
  '/': patronAmarillo,
  '/el-menu': patronAzul,
  '/reservas': patronAmarillo,
}

export const heroBackground = (url) => HERO_BACKGROUND[url] ?? null

export async function render(url) {
  const { prelude } = await prerender(
    <StaticRouter location={url}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StaticRouter>,
  )
  return new Response(prelude).text()
}
