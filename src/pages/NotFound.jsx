import TLink from '../components/TLink';
import { manoCapisci } from '../assets/mano-capisci';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <img src={manoCapisci.rosa} alt="" className="not-found__icon" />
        <h1>esto no estaba en la carta</h1>
        <p>la página que buscas no existe. probablemente se la comió alguien.</p>
        <TLink to="/" className="btn btn-rojo">Volver al inicio</TLink>
      </div>
    </section>
  );
}
