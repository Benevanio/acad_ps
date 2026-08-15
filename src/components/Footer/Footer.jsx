import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import { contact } from '../../data/contact';
import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h4>Academia Pro Saúde</h4>
            <p>Seu lugar para evoluir e alcançar seus objetivos.</p>
          </div>

          <div className={styles.section}>
            <h4>Links Rápidos</h4>
            <ul>
              <li><button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>Início</button></li>
              <li><button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>Academia</button></li>
              <li><button onClick={() => document.getElementById('modalities').scrollIntoView({ behavior: 'smooth' })}>Modalidades</button></li>
              <li><button onClick={() => document.getElementById('plans').scrollIntoView({ behavior: 'smooth' })}>Planos</button></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Contato</h4>
            <div className={styles.contactItem}>
              <FiPhone size={16} />
              <span>{contact.phone}</span>
            </div>
            <div className={styles.contactItem}>
              <FiMapPin size={16} />
              <span>{contact.address.split(' - ')[0]}</span>
            </div>
          </div>

          <div className={styles.section}>
            <h4>Redes Sociais</h4>
            <div className={styles.socials}>
              <a href={`https://instagram.com/${contact.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href={`https://wa.me/55${contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Academia Pro Saúde. Todos os direitos reservados.</p><p>
  Desenvolvido por{" "}
  <a
    href="https://www.linkedin.com/in/bene-tesla/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn de Benevanio (Bene)"
  >
    <FaLinkedin aria-hidden="true" />
    Benevanio (Bene)
  </a>
</p>
        </div>
      </div>
    </footer>
  );
}
