import { Button } from '../components/Button';
import { buildWhatsAppLink } from '../utils/whatsapp';

export function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-background" aria-hidden="true" />
      <div className="container hero-content">
        <div className="hero-copy">
          <span className="eyebrow light">Seu melhor investimento</span>
          <h1>SEU TREINO. SUA EVOLUÇÃO. SEU RESULTADO.</h1>
          <p>
            Treine com estrutura, acompanhamento profissional e tudo o que você precisa para alcançar seus objetivos.
          </p>
          <div className="hero-actions">
            <Button variant="primary" href="#planos" ariaLabel="Conheça nossos planos">
              CONHEÇA NOSSOS PLANOS
            </Button>
            <Button variant="secondary" href={buildWhatsAppLink()} target="_blank" rel="noreferrer" ariaLabel="Fale com a academia pelo WhatsApp">
              FALE CONOSCO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
