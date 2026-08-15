import { personals } from '../../data/personals';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from './PersonalTrainers.module.css';

export function PersonalTrainers() {
  const handleWhatsApp = (whatsapp) => {
    const phone = whatsapp.replace(/\D/g, '');
    window.open(`https://wa.me/55${phone}`, '_blank');
  };

  const handleInstagram = (instagram) => {
    window.open(`https://instagram.com/${instagram.replace('@', '')}`, '_blank');
  };

  return (
    <section id="personals" className={styles.personals}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>TREINE COM ACOMPANHAMENTO PROFISSIONAL</h2>
          <p>Conheça nossos Personal Trainers especializados</p>
        </div>

        <div className={styles.grid}>
          {personals.map(trainer => (
            <div key={trainer.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={trainer.image} alt={trainer.name} loading="lazy" />
                <div className={styles.socialOverlay}>
                  <button
                    className={styles.socialButton}
                    onClick={() => handleInstagram(trainer.instagram)}
                    aria-label="Instagram"
                  >
                    <FaInstagram size={20} />
                  </button>
                  <button
                    className={styles.socialButton}
                    onClick={() => handleWhatsApp(trainer.whatsapp)}
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp size={20} />
                  </button>
                </div>
              </div>
              
              <div className={styles.content}>
                <h3>{trainer.name}</h3>
                <p className={styles.specialty}>{trainer.specialty}</p>
                <p className={styles.description}>{trainer.description}</p>
                
                <button
                  className={styles.hireButton}
                  onClick={() => handleWhatsApp(trainer.whatsapp)}
                >
                  CONTRATAR PERSONAL
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
