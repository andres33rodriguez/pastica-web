import { Routes, Route } from 'react-router-dom';
import { TransitionProvider } from './context/TransitionContext';
import Preloader from './components/Preloader';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import ElMenu from './pages/ElMenu';
import Reservas from './pages/Reservas';
import ADomicilio from './pages/ADomicilio';
import AvisoLegal from './pages/AvisoLegal';
import NotFound from './pages/NotFound';

function PageShell({ children }) {
  return <main className="page-enter">{children}</main>;
}

export default function App() {
  return (
    <TransitionProvider>
      <Preloader />
      <Nav />
      <Routes>
        <Route path="/" element={<PageShell><Home /></PageShell>} />
        <Route path="/el-menu" element={<PageShell><ElMenu /></PageShell>} />
        <Route path="/reservas" element={<PageShell><Reservas /></PageShell>} />
        <Route path="/a-domicilio" element={<PageShell><ADomicilio /></PageShell>} />
        <Route path="/aviso-legal" element={<PageShell><AvisoLegal /></PageShell>} />
        <Route path="*" element={<PageShell><NotFound /></PageShell>} />
      </Routes>
      <Footer />
    </TransitionProvider>
  );
}
