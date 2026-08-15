import { contact } from '../../data/contact';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './Contact.module.css';

export function Contact() {
  const handleWhatsApp = () => {
    const phone = contact.whatsapp.replace(/\D/g, '');
    window.open(`https://wa.me/55${phone}`, '_blank');
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2>ENTRE EM CONTATO</h2>
        
        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <FiMapPin size={24} />
              </div>
              <div>
                <h3>Endereço</h3>
                <p>{contact.address}</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <FiPhone size={24} />
              </div>
              <div>
                <h3>Telefone</h3>
                <p>{contact.phone}</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <FaWhatsapp size={24} />
              </div>
              <div>
                <h3>WhatsApp</h3>
                <button onClick={handleWhatsApp} className={styles.link}>
                  {contact.whatsapp}
                </button>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <FiMail size={24} />
              </div>
              <div>
                <h3>Horário</h3>
                <p>Segunda a Sexta: {contact.hours.monday}</p>
                <p>Fim de Semana: {contact.hours.saturday}</p>
              </div>
            </div>
          </div>

          <div className={styles.mapWrapper}>
            <iframe
              title="Localização Academia Pro Saúde"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.4662405309926!2d${contact.longitude}!3d${contact.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zAcKzMAkzOCc%206.36" N,IMzgEIzOCcuMTciIFc!5e0!3m2!1spt-BR!2sbr!4v`}
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '4px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className={styles.cta}>
          <button className={styles.ctaButton} onClick={handleWhatsApp}>
            <FaWhatsapp size={24} />
            CONVERSAR NO WHATSAPP
          </button>
        </div>
      </div>
    </section>
  );
}
