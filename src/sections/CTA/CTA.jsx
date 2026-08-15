import { contact } from '../../data/contact';
import styles from './CTA.module.css';

export function CTA() {
  const handleWhatsApp = () => {
    const phone = contact.whatsapp.replace(/\D/g, '');
    window.open(`https://wa.me/55${phone}?text=Olá! Tenho interesse em conhecer a Academia Pro Saúde.`, '_blank');
  };

  const handlePlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.cta}>
      <div
        className={styles.bg}
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=600&fit=crop&q=80)',
        }}
      />

      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <h2>PRONTO PARA COMEÇAR?</h2>
          <p>Venha conhecer a Academia Pro Saúde e encontre o treino ideal para você.</p>
          
          <div className={styles.buttons}>
            <button className={`${styles.button} ${styles.primary}`} onClick={handleWhatsApp}>
              FALE NO WHATSAPP
            </button>
            <button className={`${styles.button} ${styles.secondary}`} onClick={handlePlans}>
              VER PLANOS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
