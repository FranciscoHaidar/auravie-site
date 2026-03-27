import React from 'react';
import { Phone, Instagram, MapPin } from 'lucide-react';

export function Footer({ whatsappLink, instagramLink }) {
  return (
    <footer className="section bg-marinho" style={{ paddingBottom: '2rem' }}>
      <div className="container" style={{ maxWidth: '1300px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '3rem', marginBottom: '2rem' }}>
          
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
            <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '0.5rem', paddingLeft: '28px' }}>Campo Bom/RS</p>
            <div style={{ paddingLeft: '28px', marginTop: '1rem' }}>
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
        <div style={{ textAlign: 'center', opacity: 0.6, fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} Dr. Francisco Haidar - AuraVie Concept. Política de Privacidade aplicada.
        </div>
      </div>
    </footer>
  );
}
