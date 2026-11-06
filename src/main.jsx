import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import { pageLoaders, normalizePath } from './routes'

const container = document.getElementById('root')

const app = (
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
)

async function start() {
  const path = normalizePath(window.location.pathname)

  // Pre-rendered pages (scripts/prerender.mjs) carry their route in data-route.
  // Hydrate only when it matches what the router is about to render (for
  // unknown URLs the host serves a bare shell, which is simply rendered).
  if (container.hasChildNodes() && container.dataset.route === path) {
    // Load the page's code first so hydration finds it ready instead of
    // falling back to a Suspense boundary.
    await pageLoaders[path]?.()
    hydrateRoot(container, app)
  } else {
    container.textContent = ''
    createRoot(container).render(app)
  }
}

start()
