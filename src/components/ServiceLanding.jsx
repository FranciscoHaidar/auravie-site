import React from 'react';
import { CheckCircle2, MapPin, MessageCircle } from 'lucide-react';
import { businessInfo } from '../seoPages';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';
import { StickyMobileCTA } from './StickyMobileCTA';

export function ServiceLanding({ page, siteConfig, whatsappLink, instagramLink, onOpenPortal }) {
  const leadText = encodeURIComponent(`Olá! Vim pela página "${page.h1}" e gostaria de agendar uma avaliação na AuraVie Concept.`);
  const pageWhatsapp = `https://wa.me/${siteConfig.whatsapp_number || businessInfo.whatsapp}?text=${leadText}`;

  return (
    <>
      <Navbar instagramLink={instagramLink} whatsappLink={pageWhatsapp} onOpenPortal={onOpenPortal} />
      <main>
        <section style={{ padding: 'clamp(7rem, 12vw, 10rem) 5% 5rem', background: 'linear-gradient(135deg, #f8fafc 0%, #fff 55%, #f3ead7 100%)' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span style={{ color: '#005F6A', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.82rem' }}>
                {page.eyebrow}
              </span>
              <h1 style={{ margin: '1rem 0 1.25rem', color: '#1D2951', fontSize: 'clamp(2.4rem, 5vw, 4.3rem)', lineHeight: 1.02, letterSpacing: 0 }}>
                {page.h1}
              </h1>
              <p style={{ color: '#334155', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '680px' }}>
                {page.summary}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.9rem', marginTop: '2rem' }}>
                <a href={pageWhatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
                  <MessageCircle size={19} /> {page.cta}
                </a>
                <a href="/" className="btn btn-outline">Voltar para o site</a>
              </div>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '18px', padding: '2rem', boxShadow: '0 20px 50px rgba(29,41,81,0.10)' }}>
              <h2 style={{ color: '#1D2951', fontSize: '1.35rem', margin: '0 0 1.25rem' }}>O que avaliamos</h2>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {page.focus.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', color: '#334155', lineHeight: 1.5 }}>
                    <CheckCircle2 size={20} color="#005F6A" style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0', color: '#475569', display: 'grid', gap: '0.65rem' }}>
                <strong style={{ color: '#1D2951' }}>{businessInfo.name}</strong>
                <span>{businessInfo.physician} - {businessInfo.crm}</span>
                <span style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <MapPin size={16} color="#005F6A" /> {businessInfo.streetAddress}, {businessInfo.city}/{businessInfo.region}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 5%', background: '#ffffff' }}>
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <h2 style={{ color: '#1D2951', fontSize: '2rem', marginBottom: '1rem' }}>Atendimento para Campo Bom, Novo Hamburgo e Vale dos Sinos</h2>
            <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '1.05rem' }}>
              A AuraVie Concept une consulta médica, leitura de composição corporal e acompanhamento de evolução para construir uma conduta personalizada. As informações desta página têm caráter educativo e não substituem avaliação médica individual.
            </p>
            <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '1.05rem' }}>
              O próximo passo é conversar com a equipe, entender seus objetivos e confirmar qual avaliação faz mais sentido para o seu momento clínico.
            </p>
          </div>
        </section>
      </main>
      <Footer instagramLink={instagramLink} whatsappLink={pageWhatsapp} />
      <FloatingActions instagramLink={instagramLink} whatsappLink={pageWhatsapp} />
      <StickyMobileCTA whatsappLink={pageWhatsapp} />
    </>
  );
}
