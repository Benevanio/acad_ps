import type { Plan } from '../data/plans';
import { buildWhatsAppLink } from '../utils/whatsapp';

export function PlanCard({ name, price, period, recommended, benefits }: Plan) {
  return (
    <article className={`plan-card ${recommended ? 'recommended' : ''}`}>
      {recommended ? <span className="plan-badge">Mais escolhido</span> : null}
      <div className="plan-header">
        <h3>{name}</h3>
      </div>
      <div className="plan-price">
        <span className="currency">R$</span>
        <span className="value">{price}</span>
        <span className="period">{period}</span>
      </div>
      <ul className="plan-benefits">
        {benefits.map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>
      <a href={buildWhatsAppLink()} className="btn btn-primary plan-cta" target="_blank" rel="noreferrer">
        QUERO ESSE PLANO
      </a>
    </article>
  );
}
