import { stats } from '../../data/contact';
import styles from './About.module.css';

export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.image}>
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=700&fit=crop&q=80"
              alt="Academia Pro Saúde"
              loading="lazy"
            />
          </div>

          <div className={styles.content}>
            <h2>MAIS QUE UMA ACADEMIA. UM LUGAR PARA EVOLUIR.</h2>
            
            <p>
              A Academia Pro Saúde é muito mais que apenas um lugar para treinar. Somos um espaço dedicado ao seu crescimento pessoal, com estrutura completa, equipamentos de ponta e profissionais qualificados que realmente se importam com seus resultados.
            </p>

            <p>
              Contamos com uma equipe de personal trainers especialistas em diferentes modalidades, desde musculação e hipertrofia até treinamento funcional e preparação cardiovascular. Cada detalhe do nosso ambiente foi pensado para proporcionar a melhor experiência possível.
            </p>

            <p>
              Oferecemos acompanhamento personalizado, avaliação física completa e programas de treino adaptados aos seus objetivos específicos. Seja você um iniciante ou um atleta experiente, encontrará aqui tudo o que precisa para alcançar seus resultados.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.number}>{stats.students}</div>
                <div className={styles.label}>Alunos</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.number}>{stats.experience}</div>
                <div className={styles.label}>Anos</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.number}>{stats.modalities}</div>
                <div className={styles.label}>Modalidades</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.number}>{stats.professionals}</div>
                <div className={styles.label}>Profissionais</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
