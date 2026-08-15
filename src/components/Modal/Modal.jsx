import { FiX } from 'react-icons/fi';
import styles from './Modal.module.css';

export function Modal({ isOpen, image, onClose }) {
  if (!isOpen || !image) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Fechar">
          <FiX size={28} />
        </button>
        <img src={image.image} alt={image.title} />
        <h3>{image.title}</h3>
      </div>
    </div>
  );
}
