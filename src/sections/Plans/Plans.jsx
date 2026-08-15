import { plans } from '../../data/plans';
import { PlanCard } from '../../components/PlanCard/PlanCard';
import styles from './Plans.module.css';

export function Plans() {
  const handleSelectPlan = () => {
    const phone = '85' + '98765-4321'.replace(/\D/g, '');
    window.open(`https://wa.me/55${phone}?text=Olá! Tenho interesse em um dos planos.`, '_blank');
  };

  return (
    <section id="plans" className={styles.plans}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>ESCOLHA SEU PLANO</h2>
          <p>Encontre o plano perfeito para seus objetivos</p>
        </div>

        <div className={styles.grid}>
          {plans.map(plan => (
            <PlanCard
              key={plan.id}
              plan={plan}
              onSelect={handleSelectPlan}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
