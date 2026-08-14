import { PlanCard } from '../components/PlanCard';
import { SectionTitle } from '../components/SectionTitle';
import { plans } from '../data/plans';

export function Plans() {
  return (
    <section id="planos" className="plans-section section-spaced">
      <div className="container">
        <SectionTitle eyebrow="Planos" title="ESCOLHA SEU PLANO" align="center" />
        <div className="plans-grid">
          {plans.map((plan) => (
            <PlanCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
