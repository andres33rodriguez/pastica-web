// Code-split pages: each one is its own chunk, so the home page doesn't ship
// the menu, the legal text, etc. The loaders live here (not inline in App) so
// the entry point can load the chunk of the page it is about to hydrate, and so
// the other chunks can be prefetched once the page is idle.
export const pageLoaders = {
  '/el-menu': () => import('./pages/ElMenu'),
  '/reservas': () => import('./pages/Reservas'),
  '/a-domicilio': () => import('./pages/ADomicilio'),
  '/aviso-legal': () => import('./pages/AvisoLegal'),
};

export const notFoundLoader = () => import('./pages/NotFound');

/** Trailing slashes don't change the route: "/el-menu/" → "/el-menu". */
export const normalizePath = (pathname) => (pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname);
