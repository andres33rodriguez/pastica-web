// Pre-renders every public route into static HTML (run by `npm run build`).
//
//   vite build                                  → dist/ (client bundle + index.html template)
//   vite build --ssr src/entry-server.jsx       → dist-ssr/ (the app, rendered in Node)
//   node scripts/prerender.mjs                  → dist/<route>/index.html with the content inside
//
// The result is the same React app: the browser hydrates the HTML instead of
// building the page from an empty <div id="root">, and crawlers / link
// previews get real content, titles and Open Graph tags.
import { access, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { ROUTES, getSeo, renderHeadTags } from '../src/seo.js'

const root = path.resolve(import.meta.dirname, '..')
const dist = path.join(root, 'dist')

const { render, heroBackground } = await import(
  pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href
)

const template = await readFile(path.join(dist, 'index.html'), 'utf8')
const manifest = JSON.parse(await readFile(path.join(dist, '.vite', 'manifest.json'), 'utf8'))

// Page module of each lazy route (see src/routes.js).
const ROUTE_MODULE = {
  '/el-menu': 'src/pages/ElMenu.jsx',
  '/reservas': 'src/pages/Reservas.jsx',
  '/a-domicilio': 'src/pages/ADomicilio.jsx',
  '/aviso-legal': 'src/pages/AvisoLegal.jsx',
}

/** modulepreload tags for a route's own chunk (and the chunks it shares), so it isn't a waterfall after the entry. */
function chunkPreloads(route) {
  const key = ROUTE_MODULE[route]
  if (!key || !manifest[key]) return []
  const seen = new Set()
  const walk = (k) => {
    if (seen.has(k) || !manifest[k]) return
    seen.add(k)
    manifest[k].imports?.forEach(walk)
  }
  walk(key)
  // The entry's own static imports are already preloaded by Vite's template.
  const entry = Object.values(manifest).find((m) => m.isEntry)
  const alreadyLoaded = new Set([entry.file, ...(entry.imports ?? []).map((k) => manifest[k].file)])
  return [...seen]
    .map((k) => manifest[k].file)
    .filter((f) => !alreadyLoaded.has(f))
    .map((f) => `<link rel="modulepreload" crossorigin href="/${f}" />`)
}

const fill = (head, body, route) =>
  template
    .replace('<!--app-head-->', () => head)
    .replace('<div id="root"><!--app-html--></div>', () =>
      route ? `<div id="root" data-route="${route}">${body}</div>` : '<div id="root"></div>',
    )

const writeHtml = async (file, html) => {
  await mkdir(path.dirname(file), { recursive: true })
  await writeFile(file, html)
}

const assetsIn = (html) => [...html.matchAll(/\/assets\/[\w.\-@]+/g)].map((m) => m[0])

// Fallback for URLs that aren't real pages (served by the host's rewrite rule):
// an empty shell that the client simply renders (it shows the "not found" page).
const notFoundSeo = getSeo('/nope', 'es')
await writeHtml(
  path.join(dist, 'spa-fallback.html'),
  fill(
    [
      `<title>${notFoundSeo.title}</title>`,
      '<meta name="robots" content="noindex" />',
    ].join('\n    '),
    '',
    null,
  ),
)

const missing = new Set()
for (const route of ROUTES) {
  const body = await render(route)

  const preloads = []
  const bg = heroBackground(route)
  if (bg) preloads.push(`<link rel="preload" as="image" href="${bg}" fetchpriority="high" />`)
  preloads.push(...chunkPreloads(route))

  const html = fill(renderHeadTags(route, { preloads: preloads.join('\n    ') }), body, route)

  for (const url of assetsIn(html)) {
    try {
      await access(path.join(dist, url))
    } catch {
      missing.add(url)
    }
  }

  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route, 'index.html')
  await writeHtml(file, html)
  console.log(`prerendered ${route.padEnd(14)} ${(html.length / 1024).toFixed(1)} KB`)
}

await rm(path.join(dist, '.vite'), { recursive: true, force: true })

if (missing.size) {
  console.error('Pre-rendered HTML references assets that are not in dist/:')
  for (const url of missing) console.error('  ' + url)
  process.exit(1)
}
