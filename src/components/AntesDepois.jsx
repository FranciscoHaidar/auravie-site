import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export function AntesDepois() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX ?? (e.touches ? e.touches[0].clientX : 0);
    let pos = ((x - rect.left) / rect.width) * 100;
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;
    setSliderPos(pos);
  };

  return (
    <section className="section bg-light" style={{ background: '#f8fafc', padding: '5rem 0' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: '3rem', textAlign: 'center' }}
        >
          <span style={{ color: 'var(--gold-bronze)', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>O Padrão Ouro</span>
          <h2 style={{ color: '#1B2745', fontSize: '2.5rem', fontWeight: 800, marginTop: '0.5rem' }}>Elevando Resultados Físicos</h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '1rem auto' }}>
            Nossos protocolos não são promessas estéticas, são engenharia biológica. Arraste a barra para visualizar a evolução metabólica clássica estruturada na AuraVie Concept.
          </p>
        </motion.div>

        <div 
          ref={containerRef}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '850px',
            margin: '0 auto',
            aspectRatio: '16/9',
            overflow: 'hidden',
            borderRadius: '24px',
            boxShadow: '0 25px 50px -12px rgba(27,39,69,0.25)',
            cursor: 'ew-resize',
            userSelect: 'none',
            background: '#e2e8f0'
          }}
        >
          {/* Imagem Pós-Tratamento (Fundo) */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            {/* Imagem Provisória Royalty-Free: Textura/Saúde/Fitness */}
            <img 
               src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2000&auto=format&fit=crop" 
               alt="Resultado After"
               draggable="false"
               style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', top: '24px', right: '24px', background: 'rgba(212,175,55,0.95)', color: '#fff', padding: '8px 16px', borderRadius: '50px', fontWeight: 700, fontSize: '0.9rem', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>Resultado BioARch</div>
          </div>

          {/* Imagem Pré-Tratamento (Clipped) */}
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` 
          }}>
            <img 
               src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=2000&auto=format&fit=crop" 
               alt="Estado Before"
               draggable="false"
               style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(50%) contrast(80%) brightness(1.1) blur(2px)' }}
            />
            <div style={{ position: 'absolute', top: '24px', left: '24px', background: 'rgba(27,39,69,0.95)', color: '#fff', padding: '8px 16px', borderRadius: '50px', fontWeight: 700, fontSize: '0.9rem', boxShadow: '0 4px 15px rgba(0,0,0,0.4)' }}>Antes do Protocolo</div>
          </div>

          {/* Linha do Slider & Controle Guiado */}
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${sliderPos}%`,
            width: '4px',
            background: 'var(--gold-bronze)',
            transform: 'translateX(-50%)',
            boxShadow: '0 0 10px rgba(0,0,0,0.4)'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#fff',
              border: '3px solid var(--gold-bronze)',
              boxShadow: '0 0 25px rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold-bronze)'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l-6-6 6-6M15 18l6-6-6-6"/>
              </svg>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
