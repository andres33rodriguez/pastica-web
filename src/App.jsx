import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { TransitionProvider } from './context/TransitionContext';
import Preloader from './components/Preloader';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Seo from './components/Seo';
import Home from './pages/Home';
import { pageLoaders, notFoundLoader } from './routes';

const ElMenu = lazy(pageLoaders['/el-menu']);
const Reservas = lazy(pageLoaders['/reservas']);
const ADomicilio = lazy(pageLoaders['/a-domicilio']);
const AvisoLegal = lazy(pageLoaders['/aviso-legal']);
const NotFound = lazy(notFoundLoader);

function PageShell({ children }) {
  return <main className="page-enter">{children}</main>;
}

// Once the page has loaded and the browser is idle, fetch the other pages'
// code so navigating to them stays instant.
function usePrefetchPages() {
  useEffect(() => {
    const prefetch = () => {
      Object.values(pageLoaders).forEach((load) => load());
      notFoundLoader();
    };
    const schedule = () => {
      // A few seconds after load, so it never competes with what the visitor is looking at.
      window.setTimeout(() => {
        if ('requestIdleCallback' in window) window.requestIdleCallback(prefetch, { timeout: 8000 });
        else prefetch();
      }, 3000);
    };
    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });
    return () => window.removeEventListener('load', schedule);
  }, []);
}

export default function App() {
  usePrefetchPages();

  return (
    <TransitionProvider>
      <Seo />
      <Preloader />
      <Nav />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<PageShell><Home /></PageShell>} />
          <Route path="/el-menu" element={<PageShell><ElMenu /></PageShell>} />
          <Route path="/reservas" element={<PageShell><Reservas /></PageShell>} />
          <Route path="/a-domicilio" element={<PageShell><ADomicilio /></PageShell>} />
          <Route path="/carta" element={<Navigate to="/el-menu" replace />} />
          <Route path="/aviso-legal" element={<PageShell><AvisoLegal /></PageShell>} />
          <Route path="*" element={<PageShell><NotFound /></PageShell>} />
        </Routes>
      </Suspense>
      <Footer />
    </TransitionProvider>
  );
}
