import { useState } from 'react';
import { Lightbox } from '../components/Lightbox';
import { SectionTitle } from '../components/SectionTitle';
import { galleryItems } from '../data/gallery';

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedImage = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  const openGallery = (index: number) => setSelectedIndex(index);
  const closeGallery = () => setSelectedIndex(null);

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % galleryItems.length);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="galeria" className="gallery-section section-spaced">
      <div className="container">
        <SectionTitle eyebrow="Estrutura" title="NOSSA ESTRUTURA" align="center" />
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`gallery-item item-${(index % 5) + 1}`}
              onClick={() => openGallery(index)}
              aria-label={`Abrir imagem ${item.alt}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        isOpen={selectedIndex !== null}
        image={selectedImage?.src ?? null}
        alt={selectedImage?.alt ?? ''}
        onClose={closeGallery}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
}
