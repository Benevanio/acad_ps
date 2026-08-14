import { PersonalCard } from '../components/PersonalCard';
import { SectionTitle } from '../components/SectionTitle';
import { personalTrainers } from '../data/personalTrainers';

export function PersonalTrainers() {
  return (
    <section id="personal-trainers" className="personal-section section-spaced">
      <div className="container">
        <SectionTitle eyebrow="Personal trainers" title="TREINE COM ACOMPANHAMENTO PROFISSIONAL" align="center" />
        <div className="personal-grid">
          {personalTrainers.map((trainer) => (
            <PersonalCard key={trainer.id} {...trainer} />
          ))}
        </div>
      </div>
    </section>
  );
}
