import { contact } from '../data/contact';
import { modalities } from '../data/modalities';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">APS</span>
            <span className="brand-text">Academia Pro Saúde</span>
          </div>
          <p className="footer-description">
            Estrutura completa, profissionais dedicados e ambiente pensado para você evoluir com segurança e resultados.
          </p>
        </div>

        <div>
          <h3>Links rápidos</h3>
          <ul className="footer-links">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Academia</a></li>
            <li><a href="#modalidades">Modalidades</a></li>
            <li><a href="#planos">Planos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div>
          <h3>Modalidades</h3>
          <ul className="footer-links">
            {modalities.slice(0, 5).map((modality) => (
              <li key={modality.id}><a href="#modalidades">{modality.title}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contato</h3>
          <ul className="footer-links contact-list">
            <li>{contact.address}</li>
            <li>{contact.phone}</li>
            <li>{contact.instagram}</li>
          </ul>
        </div>

        <div>
          <h3>Horários</h3>
          <ul className="footer-links">
            <li>Seg - Sáb: {contact.openingHours.monday}</li>
            <li>Dom: {contact.openingHours.sunday}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Academia Pro Saúde © 2026 — Todos os direitos reservados.</p>
        <p>Desenvolvido por <a href="https://www.linkedin.com/in/bene-tesla/" target="_blank" rel="noreferrer"> © Bene Tesla</a></p>
      </div>
    </footer>
  );
}
