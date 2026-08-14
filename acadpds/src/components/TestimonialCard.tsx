import type { Testimonial } from '../data/testimonials';

export function TestimonialCard({ name, text, rating }: Testimonial) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-stars" aria-label={`${rating} de 5 estrelas`}>
        {Array.from({ length: rating }).map((_, index) => (
          <span key={`${name}-${index}`}>★</span>
        ))}
      </div>
      <p className="testimonial-text">“{text}”</p>
      <strong>{name}</strong>
    </article>
  );
}
