import { differentials } from '../../data/differentials';
import { FiCheck } from 'react-icons/fi';
import styles from './Differentials.module.css';

export function Differentials() {
  return (
    <section className={styles.differentials}>
      <div className={styles.container}>
        <h2>POR QUE ESCOLHER A ACADEMIA PRO SAÚDE</h2>

        <div className={styles.grid}>
          {differentials.map(diff => (
            <div key={diff.id} className={styles.item}>
              <div className={styles.icon}>
                <FiCheck size={24} />
              </div>
              <h3>{diff.title}</h3>
              <p>{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
