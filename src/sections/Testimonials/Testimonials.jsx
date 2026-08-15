import { testimonials } from '../../data/testimonials';
import styles from './Testimonials.module.css';

export function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2>QUEM TREINA, RECOMENDA</h2>

        <div className={styles.grid}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className={styles.card}>
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className={styles.star}>★</span>
                ))}
              </div>
              
              <p className={styles.text}>"{testimonial.text}"</p>
              
              <div className={styles.author}>
                <h4>{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
