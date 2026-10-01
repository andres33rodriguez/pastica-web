const WHATSAPP_URL =
  'https://wa.me/34696903534?text=Hola%2C%20quisiera%20hacer%20una%20reserva%2C%20pedir%20online%20o%20recibir%20informaci%C3%B3n%20%F0%9F%98%8A';

export default function WhatsAppButton({ label = 'Escríbenos por WhatsApp', className = '' }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-whatsapp ${className}`}
    >
      {label}
    </a>
  );
}
