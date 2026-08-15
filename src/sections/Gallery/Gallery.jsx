import { useState } from 'react';
import { gallery } from '../../data/gallery';
import { Modal } from '../../components/Modal/Modal';
import { FiZoomIn } from 'react-icons/fi';
import styles from './Gallery.module.css';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>ESTRUTURA DA ACADEMIA</h2>
          <p>Conheça nossas instalações modernas</p>
        </div>

        <div className={styles.grid}>
          {gallery.map(image => (
            <div
              key={image.id}
              className={styles.item}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.image} alt={image.title} loading="lazy" />
              <div className={styles.overlay}>
                <FiZoomIn size={32} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedImage} image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
}
