import React, { useState, useEffect } from 'react';
import { Instagram, Lock, Calendar } from 'lucide-react';
import { scrollTo } from '../utils/scroll';

export function Navbar({ instagramLink, whatsappLink, onOpenPortal }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className="navbar" 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 990,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(229, 211, 179, 0.45)',
        boxShadow: scrolled ? '0 10px 30px rgba(13, 21, 39, 0.06)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ maxWidth: '1280px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 20px' }}>
        <div 
          className="logo-container" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <div style={{
            width: '36px',
            height: '36px',
            background: 'linear-gradient(135deg, #16223e, #0d1527)',
            border: '1px solid #d4af37',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#d4af37',
            fontWeight: 800,
            fontSize: '1.05rem',
            boxShadow: '0 4px 10px rgba(212,175,55,0.25)'
          }}>
            A
          </div>
          <div>
            <span style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--title-marinho)', letterSpacing: '-0.5px' }}>AuraVie</span>
            <span style={{ fontSize: '1.45rem', fontWeight: 400, color: '#C8A97E', marginLeft: '4px' }}>Concept</span>
          </div>
        </div>

        <div className="nav-links" style={{ display: 'flex', gap: '1.4rem', whiteSpace: 'nowrap' }}>
          <a href="#primeira-consulta" onClick={(e) => { e.preventDefault(); scrollTo('primeira-consulta'); }} className="nav-link">1ª Consulta</a>
          <a href="#jornada" onClick={(e) => { e.preventDefault(); scrollTo('jornada'); }} className="nav-link">A Jornada</a>
          <a href="#planos" onClick={(e) => { e.preventDefault(); scrollTo('planos'); }} className="nav-link">Planos BioARch</a>
          <a href="#reembolso" onClick={(e) => { e.preventDefault(); scrollTo('reembolso'); }} className="nav-link">Reembolso</a>
          <a href="#tecnologia-erp" onClick={(e) => { e.preventDefault(); scrollTo('tecnologia-erp'); }} className="nav-link">Tecnologia</a>
          <a href="#medico" onClick={(e) => { e.preventDefault(); scrollTo('medico'); }} className="nav-link">O Médico</a>
          <a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo('faq'); }} className="nav-link">FAQ</a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* BOTÃO DO PORTAL DO PACIENTE (INTEGRAÇÃO COM ERP) */}
          <button
            onClick={onOpenPortal}
            type="button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              background: 'rgba(22, 34, 62, 0.05)',
              border: '1px solid rgba(22, 34, 62, 0.16)',
              borderRadius: '30px',
              color: 'var(--title-marinho)',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--title-marinho)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = 'var(--title-marinho)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(22, 34, 62, 0.05)';
              e.currentTarget.style.color = 'var(--title-marinho)';
              e.currentTarget.style.borderColor = 'rgba(22, 34, 62, 0.16)';
            }}
            title="Acesse seus exames e prescrições"
          >
            <Lock size={14} />
            <span className="portal-text">Portal do Paciente</span>
          </button>

          <a href={instagramLink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--title-marinho)', display: 'flex', alignItems: 'center', opacity: 0.8 }} aria-label="Instagram">
            <Instagram size={20} />
          </a>

          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary" 
            style={{ 
              padding: '0.65rem 1.4rem', 
              fontSize: '0.88rem', 
              fontWeight: 700,
              background: 'linear-gradient(135deg, #1D2951 0%, #0d1527 100%)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              whiteSpace: 'nowrap'
            }}
          >
            <Calendar size={15} color="#D4AF37" />
            Agendar Consulta
          </a>
        </div>
      </div>
    </nav>
  );
}
