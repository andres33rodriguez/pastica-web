import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

// Image presets, picked per import with a bare query flag, e.g.
//   import cannoli from '../assets/carta/cannoli.jpg?photo'
// Photos are always shown in square (or 4:3) boxes cropped around the centre
// (object-fit: cover), so they are cropped the same way at build time: same
// framing, fewer bytes.
// `as=picture` gives { sources: { webp: 'url 480w, url 960w' }, img: { src, w, h } }
// (used by <Pic>); `as=url` gives a plain URL (CSS backgrounds).
const PRESETS = {
  photo: 'w=480;960&aspect=1&fit=cover&withoutEnlargement&format=webp&q=80&as=picture', // dish / Instagram photos
  local: 'w=480;788&aspect=4:3&fit=cover&withoutEnlargement&format=webp&q=75&as=picture', // restaurant photos
  poster: 'w=420;840&format=webp&q=82&as=picture', // daily-menu poster
  deco: 'w=320;560&format=webp&q=80&as=picture', // figuritas
  icon: 'w=280&format=webp&q=85&as=picture', // mano-capisci icons
  logo: 'w=240&format=webp&q=90&as=picture',
  partner: 'w=440&format=webp&q=85&as=picture', // Glovo / Uber Eats logos
  bg: 'w=1920&format=webp&q=80&as=url', // section background patterns
}

// https://vite.dev/config/
export default defineConfig({
  // The manifest lets scripts/prerender.mjs preload each route's chunk.
  build: { manifest: true },
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        for (const [flag, directives] of Object.entries(PRESETS)) {
          if (url.searchParams.has(flag)) return new URLSearchParams(directives)
        }
        return new URLSearchParams()
      },
    }),
  ],
})
