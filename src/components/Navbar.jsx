import React from 'react';
import { Instagram } from 'lucide-react';
import { scrollTo } from '../utils/scroll';

export function Navbar({ instagramLink, whatsappLink }) {
  return (
    <nav className="navbar">
      <div className="container" style={{ maxWidth: '1280px' }}>
        <div 
          className="logo-container" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <span style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--title-marinho)', letterSpacing: '-0.5px' }}>AuraVie</span>
          <span style={{ fontSize: '1.45rem', fontWeight: 400, color: '#C8A97E', marginLeft: '6px' }}>Concept</span>
        </div>
        <div className="nav-links" style={{ gap: '1.2rem', whiteSpace: 'nowrap' }}>
          <a href="#problema" onClick={(e) => { e.preventDefault(); scrollTo('problema'); }} className="nav-link">Por que AuraVie?</a>
          <a href="#medico" onClick={(e) => { e.preventDefault(); scrollTo('medico'); }} className="nav-link">O Médico</a>
          <a href="#jornada" onClick={(e) => { e.preventDefault(); scrollTo('jornada'); }} className="nav-link">A Jornada</a>
          <a href="#planos" onClick={(e) => { e.preventDefault(); scrollTo('planos'); }} className="nav-link">Planos</a>
          <a href="#atuacao" onClick={(e) => { e.preventDefault(); scrollTo('atuacao'); }} className="nav-link">Áreas de Atuação</a>
          <a href="#pilulas-conhecimento" onClick={(e) => { e.preventDefault(); scrollTo('pilulas-conhecimento'); }} className="nav-link">Artigos</a>
          <a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo('faq'); }} className="nav-link">FAQ</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--title-marinho)', display: 'flex', alignItems: 'center' }} aria-label="Instagram">
            <Instagram size={22} />
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
            Agendar Consulta
          </a>
        </div>
      </div>
    </nav>
  );
}
