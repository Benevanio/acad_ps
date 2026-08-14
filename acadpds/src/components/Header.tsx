import { useState } from 'react';
import { Button } from './Button';

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Academia', href: '#sobre' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Planos', href: '#planos' },
  { label: 'Personal Trainers', href: '#personal-trainers' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#inicio" className="brand" aria-label="Academia Pro Saúde home">
          <span className="brand-mark">APS</span>
          <span className="brand-text">Academia Pro Saúde</span>
        </a>

        <nav className="main-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <Button variant="primary" href="#contato" ariaLabel="Matricule-se na Academia Pro Saúde">
            MATRICULE-SE
          </Button>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
        <Button variant="primary" href="#contato" onClick={() => setMenuOpen(false)} ariaLabel="Matricule-se na Academia Pro Saúde mobile">
          MATRICULE-SE
        </Button>
      </div>
    </header>
  );
}
