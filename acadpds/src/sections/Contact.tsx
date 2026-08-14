import { FiExternalLink } from 'react-icons/fi';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';
import { contact } from '../data/contact';
import { buildWhatsAppLink } from '../utils/whatsapp';
export function Contact() {
  return (
    <section id="contato" className="contact-section section-spaced">
      <div className="container contact-grid">
        <div className="contact-copy">
          <SectionTitle eyebrow="Contato" title="FALE COM A PRO SAÚDE" />
          <div className="contact-list">
            <div>
              <strong>Endereço</strong>
              <p>{contact.address}</p>
            </div>
            <div>
              <strong>Telefone</strong>
              <p>{contact.phone}</p>
            </div>
            <div>
              <strong>WhatsApp</strong>
              <p>{contact.whatsapp}</p>
            </div>
           <div>
        <div>
            <strong>Instagram</strong>
            <p>
                <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
                >
                Acessar Instagram
                <FiExternalLink aria-hidden="true" />
                </a>
            </p>
            </div>
        </div>
      </div>

          <div className="contact-actions">
            <Button variant="primary" href={buildWhatsAppLink()} target="_blank" rel="noreferrer" ariaLabel="Abrir WhatsApp da Academia Pro Saúde">
              ABRIR NO WHATSAPP
            </Button>
            <Button variant="secondary" href="https://maps.google.com/?q=Academia+Pro+Saude" target="_blank" rel="noreferrer" ariaLabel="Abrir localização da Academia Pro Saúde">
              VER LOCALIZAÇÃO
            </Button>
          </div>
        </div>

        <div className="contact-panel">
          <h3>Horários de funcionamento</h3>
          <ul className="hours-list">
            <li><span>Segunda</span><strong>{contact.openingHours.monday}</strong></li>
            <li><span>Terça</span><strong>{contact.openingHours.tuesday}</strong></li>
            <li><span>Quarta</span><strong>{contact.openingHours.wednesday}</strong></li>
            <li><span>Quinta</span><strong>{contact.openingHours.thursday}</strong></li>
            <li><span>Sexta</span><strong>{contact.openingHours.friday}</strong></li>
            <li><span>Sábado</span><strong>{contact.openingHours.saturday}</strong></li>
            <li><span>Domingo</span><strong>{contact.openingHours.sunday}</strong></li>
          </ul>
        </div>
      </div>
      <div className="container map-wrap">
        <iframe
          title="Localização da Academia Pro Saúde"
          src="https://www.google.com/maps?q=Brazil&z=5&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
