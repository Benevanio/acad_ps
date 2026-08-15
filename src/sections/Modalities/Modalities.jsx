import { modalities } from '../../data/modalities';
import styles from './Modalities.module.css';

export function Modalities() {
  return (
    <section id="modalities" className={styles.modalities}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>ENCONTRE O TREINO QUE COMBINA COM VOCÊ</h2>
        </div>

        <div className={styles.grid}>
          {modalities.map(modality => (
            <div key={modality.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={modality.image} alt={modality.name} loading="lazy" />
                <div className={styles.overlay} />
              </div>
              <div className={styles.cardContent}>
                <h3>{modality.name}</h3>
                <p>{modality.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
