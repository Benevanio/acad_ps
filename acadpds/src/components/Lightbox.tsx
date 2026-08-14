import { useEffect } from 'react';

type LightboxProps = {
  isOpen: boolean;
  image: string | null;
  alt: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export function Lightbox({ isOpen, image, alt, onClose, onNext, onPrev }: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNext();
      if (event.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !image) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={alt}>
      <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="lightbox-close" onClick={onClose} aria-label="Fechar imagem ampliada">
          ×
        </button>
        <button type="button" className="lightbox-arrow left" onClick={onPrev} aria-label="Imagem anterior">
          ‹
        </button>
        <img src={image} alt={alt} />
        <button type="button" className="lightbox-arrow right" onClick={onNext} aria-label="Próxima imagem">
          ›
        </button>
      </div>
    </div>
  );
}
