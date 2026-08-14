import { SectionTitle } from '../components/SectionTitle';
import { TestimonialCard } from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';

export function Testimonials() {
  return (
    <section className="testimonials-section section-spaced">
      <div className="container">
        <SectionTitle eyebrow="Depoimentos" title="QUEM TREINA, RECOMENDA" align="center" />
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
