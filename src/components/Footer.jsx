import React from 'react';
import { Phone, Instagram, MapPin } from 'lucide-react';

export function Footer({ whatsappLink, instagramLink }) {
  return (
    <footer className="section bg-marinho" style={{ paddingBottom: '2.5rem' }}>
      <div className="container" style={{ maxWidth: '1300px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '3rem', marginBottom: '2.5rem' }}>
          
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src="/logo.png" 
              alt="AuraVie Concept" 
              style={{ height: '110px', marginBottom: '1rem' }}
            />
            <p style={{ opacity: 0.8, fontSize: '0.9rem', maxWidth: '250px', margin: '0 auto', lineHeight: '1.4' }}>Redefinindo paradigmas em qualidade de vida</p>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--gold-champagne)', marginBottom: '1.5rem' }}>Contato Rápido</h4>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'white', textDecoration: 'none', marginBottom: '0.5rem', opacity: 0.8 }}><Phone size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }}/> WhatsApp Clínica (Agendar)</a>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'white', textDecoration: 'none', marginBottom: '0.5rem', opacity: 0.8 }}><Instagram size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }}/> @drfranciscohaidar</a>
          </div>

          <div>
            <h4 style={{ color: 'var(--gold-champagne)', marginBottom: '1.5rem' }}>AuraVie Concept</h4>
            <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '0.5rem' }}><MapPin size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }}/> Rua Santa Teresinha, 205 - Sala D - Centro</p>
            <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Campo Bom/RS</p>
            <div style={{ marginTop: '1rem' }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>CRM/RS 57907</span>
              <p style={{ opacity: 0.7, fontSize: '0.75rem', marginTop: '0.2rem', lineHeight: '1.4' }}>Médico com pós-graduação em nutrologia, não especialista</p>
            </div>
          </div>
          
          <div style={{ width: '100%', height: '100%', minHeight: '200px' }}>
             <h4 style={{ color: 'var(--gold-champagne)', marginBottom: '1.5rem' }}>Como Chegar</h4>
             <iframe 
                src="https://maps.google.com/maps?q=Rua+Santa+Teresinha,+205+-+Sala+D+-+Centro,+Campo+Bom+-+RS&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="200" 
                style={{ border: 0, borderRadius: '12px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps AuraVie Concept"
             ></iframe>
          </div>
          
        </div>

        {/* Links Regionais e Temáticos para SEO Local */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '2.5rem', marginBottom: '2rem' }}>
          
          {/* 1. Nutrologia */}
          <div style={{ marginBottom: '1.4rem' }}>
            <div style={{ color: 'var(--gold-champagne)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '0.5rem' }}>
              Nutrologia e Avaliação Metabólica no Vale dos Sinos:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem 0.8rem', fontSize: '0.78rem', opacity: 0.85, lineHeight: 1.6 }}>
              <a href="/nutrologo-campo-bom" style={{ color: 'white', textDecoration: 'none' }}>Nutrólogo em Campo Bom</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/nutrologo-sapiranga" style={{ color: 'white', textDecoration: 'none' }}>Nutrólogo em Sapiranga</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/nutrologo-novo-hamburgo" style={{ color: 'white', textDecoration: 'none' }}>Nutrólogo em Novo Hamburgo</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/nutrologo-dois-irmaos" style={{ color: 'white', textDecoration: 'none' }}>Nutrólogo em Dois Irmãos</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/nutrologo-estancia-velha" style={{ color: 'white', textDecoration: 'none' }}>Nutrólogo em Estância Velha</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/nutrologo-ivoti" style={{ color: 'white', textDecoration: 'none' }}>Nutrólogo em Ivoti</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/nutrologo-portao" style={{ color: 'white', textDecoration: 'none' }}>Nutrólogo em Portão</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/nutrologo-sao-leopoldo" style={{ color: 'white', textDecoration: 'none' }}>Nutrólogo em São Leopoldo</a>
            </div>
          </div>

          {/* 2. Emagrecimento */}
          <div style={{ marginBottom: '1.4rem' }}>
            <div style={{ color: 'var(--gold-champagne)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '0.5rem' }}>
              Emagrecimento com Acompanhamento Médico:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem 0.8rem', fontSize: '0.78rem', opacity: 0.85, lineHeight: 1.6 }}>
              <a href="/emagrecimento-campo-bom" style={{ color: 'white', textDecoration: 'none' }}>Emagrecimento Campo Bom</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/emagrecimento-sapiranga" style={{ color: 'white', textDecoration: 'none' }}>Emagrecimento Sapiranga</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/emagrecimento-novo-hamburgo" style={{ color: 'white', textDecoration: 'none' }}>Emagrecimento Novo Hamburgo</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/emagrecimento-dois-irmaos" style={{ color: 'white', textDecoration: 'none' }}>Emagrecimento Dois Irmãos</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/emagrecimento-estancia-velha" style={{ color: 'white', textDecoration: 'none' }}>Emagrecimento Estância Velha</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/emagrecimento-ivoti" style={{ color: 'white', textDecoration: 'none' }}>Emagrecimento Ivoti</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/emagrecimento-portao" style={{ color: 'white', textDecoration: 'none' }}>Emagrecimento Portão</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/emagrecimento-sao-leopoldo" style={{ color: 'white', textDecoration: 'none' }}>Emagrecimento São Leopoldo</a>
            </div>
          </div>

          {/* 3. Reposição Hormonal */}
          <div style={{ marginBottom: '1.4rem' }}>
            <div style={{ color: 'var(--gold-champagne)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '0.5rem' }}>
              Reposição Hormonal e Modulação Metabólica:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem 0.8rem', fontSize: '0.78rem', opacity: 0.85, lineHeight: 1.6 }}>
              <a href="/reposicao-hormonal-campo-bom" style={{ color: 'white', textDecoration: 'none' }}>Reposição Hormonal Campo Bom</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/reposicao-hormonal-sapiranga" style={{ color: 'white', textDecoration: 'none' }}>Reposição Hormonal Sapiranga</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/reposicao-hormonal-novo-hamburgo" style={{ color: 'white', textDecoration: 'none' }}>Reposição Hormonal Novo Hamburgo</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/reposicao-hormonal-dois-irmaos" style={{ color: 'white', textDecoration: 'none' }}>Reposição Hormonal Dois Irmãos</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/reposicao-hormonal-estancia-velha" style={{ color: 'white', textDecoration: 'none' }}>Reposição Hormonal Estância Velha</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/reposicao-hormonal-ivoti" style={{ color: 'white', textDecoration: 'none' }}>Reposição Hormonal Ivoti</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/reposicao-hormonal-portao" style={{ color: 'white', textDecoration: 'none' }}>Reposição Hormonal Portão</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/reposicao-hormonal-sao-leopoldo" style={{ color: 'white', textDecoration: 'none' }}>Reposição Hormonal São Leopoldo</a>
            </div>
          </div>

          {/* 4. Menopausa e Climatério */}
          <div style={{ marginBottom: '1.4rem' }}>
            <div style={{ color: 'var(--gold-champagne)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '0.5rem' }}>
              Menopausa e Climatério na Região:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem 0.8rem', fontSize: '0.78rem', opacity: 0.85, lineHeight: 1.6 }}>
              <a href="/menopausa-campo-bom" style={{ color: 'white', textDecoration: 'none' }}>Menopausa Campo Bom</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/menopausa-sapiranga" style={{ color: 'white', textDecoration: 'none' }}>Menopausa Sapiranga</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/menopausa-novo-hamburgo" style={{ color: 'white', textDecoration: 'none' }}>Menopausa Novo Hamburgo</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/menopausa-dois-irmaos" style={{ color: 'white', textDecoration: 'none' }}>Menopausa Dois Irmãos</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/menopausa-estancia-velha" style={{ color: 'white', textDecoration: 'none' }}>Menopausa Estância Velha</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/menopausa-ivoti" style={{ color: 'white', textDecoration: 'none' }}>Menopausa Ivoti</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/menopausa-portao" style={{ color: 'white', textDecoration: 'none' }}>Menopausa Portão</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/menopausa-sao-leopoldo" style={{ color: 'white', textDecoration: 'none' }}>Menopausa São Leopoldo</a>
            </div>
          </div>

          {/* 5. Procedimentos e Métodos */}
          <div>
            <div style={{ color: 'var(--gold-champagne)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '0.5rem' }}>
              Métodos e Procedimentos:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem 0.8rem', fontSize: '0.78rem', opacity: 0.85, lineHeight: 1.6 }}>
              <a href="/protocolo-bioarch" style={{ color: 'white', textDecoration: 'none' }}>Protocolo BioARch</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/bioimpedancia" style={{ color: 'white', textDecoration: 'none' }}>Bioimpedância Clínica</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/reposicao-hormonal" style={{ color: 'white', textDecoration: 'none' }}>Avaliação Hormonal Geral</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/menopausa-climaterio" style={{ color: 'white', textDecoration: 'none' }}>Climatério e Menopausa</a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a href="/lipedema" style={{ color: 'white', textDecoration: 'none' }}>Manejo de Lipedema</a>
            </div>
          </div>

        </div>

        <div style={{ textAlign: 'center', opacity: 0.6, fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} Dr. Francisco Haidar - AuraVie Concept. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
