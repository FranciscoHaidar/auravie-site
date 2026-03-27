import React from 'react';
import { motion } from 'framer-motion';
import { scrollTo } from '../utils/scroll';

export function Hero({ siteConfig, whatsappLink }) {
  return (
    <section className="hero" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
      <div className="container hero-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hero-content" 
          style={{ flex: '1 1 450px', willChange: 'transform, opacity' }}
        >
           <h1 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.4rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.2rem', letterSpacing: '-1px' }}>
            {siteConfig.hero_title}
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', opacity: 0.85, marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '95%' }}>
            {siteConfig.hero_subtitle}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.9rem 1rem', flex: '1 1 200px', textAlign: 'center', fontSize: '1rem' }}>
              Iniciar Minha Transformação
            </a>
            <button onClick={() => scrollTo('planos')} className="btn btn-outline" style={{ padding: '0.9rem 1.4rem', flex: '1 1 180px', textAlign: 'center' }}>
              Conhecer os Planos
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero-image-wrapper" 
          style={{ flex: '1 1 350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
           <img 
              src="/hero-photo.jpg" 
              alt="Dr. Francisco Haidar - AuraVie Concept" 
              fetchPriority="high"
              style={{ width: '100%', maxWidth: '360px', borderRadius: '20px', boxShadow: '0 25px 50px rgba(29, 41, 81, 0.15)', objectFit: 'cover' }}
           />
        </motion.div>
      </div>
    </section>
  );
}
