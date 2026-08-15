import styles from './Hero.module.css';

export function Hero() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div
        className={styles.bg}
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop&q=80)',
        }}
      />
      
      <div className={styles.overlay} />
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            SEU TREINO.
            <br />
            SUA EVOLUÇÃO.
            <br />
            SEU RESULTADO.
          </h1>
          
          <p className={styles.subtitle}>
            Treine com estrutura, acompanhamento profissional e tudo o que você precisa para alcançar seus objetivos.
          </p>
          
          <div className={styles.buttons}>
            <button
              className={`${styles.button} ${styles.primary}`}
              onClick={() => handleScroll('plans')}
            >
              CONHEÇA NOSSOS PLANOS
            </button>
            <button
              className={`${styles.button} ${styles.secondary}`}
              onClick={() => handleScroll('contact')}
            >
              FALE CONOSCO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
