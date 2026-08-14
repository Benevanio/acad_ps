import { SectionTitle } from '../components/SectionTitle';

const differentials = [
  { title: 'Equipamentos de qualidade', description: 'Estrutura pensada para treinos seguros, eficientes e completos.' },
  { title: 'Ambiente completo', description: 'Muay',
  },
  { title: 'Profissionais qualificados', description: 'Equipe experiente e focada no seu progresso.' },
  { title: 'Acompanhamento personalizado', description: 'Orientação para cada objetivo e nível de condicionamento.' },
  { title: 'Horários flexíveis', description: 'Planeje sua rotina com praticidade e liberdade.' },
  { title: 'Estrutura para diferentes objetivos', description: 'Atendimento para emagrecimento, hipertrofia e performance.' },
];

export function Differentials() {
  return (
    <section className="differentials-section section-spaced">
      <div className="container">
        <SectionTitle eyebrow="Diferenciais" title="POR QUE TREINAR NA PRO SAÚDE?" align="center" />
        <div className="differentials-grid">
          {differentials.map((item) => (
            <article key={item.title} className="differential-item">
              <span className="differential-icon" aria-hidden="true">•</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
