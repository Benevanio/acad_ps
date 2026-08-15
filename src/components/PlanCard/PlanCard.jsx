import { FiCheck } from 'react-icons/fi';
import styles from './PlanCard.module.css';

export function PlanCard({ plan, onSelect }) {
  return (
    <div className={`${styles.card} ${plan.featured ? styles.featured : ''}`}>
      {plan.featured && (
        <div className={styles.badge}>MAIS POPULAR</div>
      )}
      
      <h3>{plan.name}</h3>
      
      <div className={styles.price}>
        <span className={styles.amount}>R$ {plan.price}</span>
        <span className={styles.period}>{plan.period}</span>
      </div>

      <ul className={styles.benefits}>
        {plan.benefits.map((benefit, i) => (
          <li key={i}>
            <FiCheck size={18} />
            {benefit}
          </li>
        ))}
      </ul>

      <button className={`${styles.button} ${plan.featured ? styles.featured : ''}`} onClick={onSelect}>
        QUERO ESSE PLANO
      </button>
    </div>
  );
}
