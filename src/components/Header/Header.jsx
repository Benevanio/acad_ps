import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../../images/logo.png';
import styles from './Header.module.css';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Academia' },
    { id: 'modalities', label: 'Modalidades' },
    { id: 'plans', label: 'Planos' },
    { id: 'personals', label: 'Personals' },
    { id: 'contact', label: 'Contato' }
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <button
          className={styles.logoButton}
          onClick={() => handleNavClick('home')}
          aria-label="Ir para o início"
        >
          <img
            src={logo}
            alt="Academia Pro Saúde"
            className={styles.logo}
          />
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={styles.navLink}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className={styles.ctaButton}
          onClick={() => handleNavClick('plans')}
        >
          MATRICULE-SE
        </button>

        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  );
}