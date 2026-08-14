import type { PersonalTrainer } from '../data/personalTrainers';

export function PersonalCard({ name, specialty, description, instagram, whatsapp, image }: PersonalTrainer) {
  return (
    <article className="personal-card">
      <div className="personal-image-wrap">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="personal-content">
        <h3>{name}</h3>
        <span>{specialty}</span>
        <p>{description}</p>
        <div className="personal-links">
          <a href={instagram} target="_blank" rel="noreferrer" aria-label={`Instagram de ${name}`}>
            Instagram
          </a>
          <a href={whatsapp} target="_blank" rel="noreferrer" aria-label={`WhatsApp de ${name}`}>
            WhatsApp
          </a>
        </div>
        <a href={whatsapp} className="btn btn-primary" target="_blank" rel="noreferrer">
          CONTRATAR PERSONAL
        </a>
      </div>
    </article>
  );
}
