import { SectionTitle } from '../components/SectionTitle';
import { modalities } from '../data/modalities';

export function Modalities() {
  return (
    <section id="modalidades" className="modalities-section section-spaced">
      <div className="container">
        <SectionTitle eyebrow="Modalidades" title="ENCONTRE O TREINO QUE COMBINA COM VOCÊ" align="center" />
        <div className="modalities-grid">
          {modalities.map((modality) => (
            <article key={modality.id} className="modality-card">
              <img src={modality.image} alt={modality.title} loading="lazy" />
              <div className="modality-content">
                <h3>{modality.title}</h3>
                <p>{modality.description}</p>
                <a href="#contato">{modality.cta}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
