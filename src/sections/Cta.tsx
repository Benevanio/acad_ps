import { Button } from '../components/Button';
import { buildWhatsAppLink } from '../utils/whatsapp';

export function Cta() {
  return (
    <section className="cta-section section-spaced">
      <div className="container cta-box">
        <div>
          <span className="eyebrow">Pronto para mudar?</span>
          <h2>PRONTO PARA COMEÇAR?</h2>
          <p>Venha conhecer a Academia Pro Saúde e encontre o treino ideal para você.</p>
        </div>
        <div className="cta-actions">
          <Button variant="primary" href={buildWhatsAppLink()} target="_blank" rel="noreferrer" ariaLabel="Falar no WhatsApp">
            FALE NO WHATSAPP
          </Button>
          <Button variant="secondary" href="#planos" ariaLabel="Ver planos da Academia Pro Saúde">
            VER PLANOS
          </Button>
        </div>
      </div>
    </section>
  );
}
