import { SectionTitle } from '../components/SectionTitle';
import { statistics } from '../data/statistics';

export function About() {
  return (
    <section id="sobre" className="about-section">
      <div className="container about-grid">
        <div className="about-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
            alt="Pessoas treinando em academia"
            loading="lazy"
          />
        </div>

        <div className="about-content">
          <SectionTitle eyebrow="Sobre a academia" title="MAIS QUE UMA ACADEMIA. UM LUGAR PARA EVOLUIR." />
          <p>
            A Academia Pro Saúde foi criada para quem busca estrutura real, acompanhamento sério e ambiente motivador. Aqui você encontra equipamentos de qualidade, profissionais preparados e uma rotina pensada para resultados consistentes.
          </p>
          <p>
            Seja para ganho de massa, emagrecimento, condicionamento ou performance, o foco é entregar uma experiência completa, com atenção individual e suporte para cada etapa da sua evolução.
          </p>

          <div className="statistics-grid">
            {statistics.map((stat) => (
              <div key={stat.label} className="stat-item">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
