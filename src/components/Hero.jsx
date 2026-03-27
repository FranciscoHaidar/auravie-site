import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Activity } from 'lucide-react';
import { scrollTo } from '../utils/scroll';

export function Hero({ siteConfig, whatsappLink }) {
  return (
    <section className="hero" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="container hero-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hero-content" 
          style={{ flex: '1 1 450px', willChange: 'transform, opacity' }}
        >
           <motion.div 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1, duration: 0.5 }}
             style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 1.2rem', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '50px', color: '#D4AF37', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1.5rem', letterSpacing: '1px', textTransform: 'uppercase' }}
           >
             <Sparkles size={16} strokeWidth={2.5} style={{ marginRight: '6px' }} />
             Excelência em Saúde e Qualidade de Vida
           </motion.div>
           <h1 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.4rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.2rem', letterSpacing: '-1px', color: '#1B2745' }}>
            {(() => {
              const words = siteConfig.hero_title.split(' ');
              const lastTwo = words.splice(-2).join(' ');
              return (
                <>
                  {words.join(' ')} <span style={{ color: 'var(--gold-bronze)' }}>{lastTwo}</span>
                </>
              );
            })()}
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', color: 'var(--text-grafite)', opacity: 0.85, marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '95%' }}>
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
           <div style={{ position: 'relative' }}>
             <img 
                src="/hero-photo.jpg" 
                alt="Dr. Francisco Haidar - AuraVie Concept" 
                fetchPriority="high"
                style={{ width: '100%', maxWidth: '380px', borderRadius: '24px', boxShadow: '0 25px 50px rgba(29, 41, 81, 0.15)', objectFit: 'cover', zIndex: 1, position: 'relative' }}
             />
             
             {/* Badge Flutuante Glassmorphism sobre a foto */}
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
               style={{ 
                 position: 'absolute', 
                 bottom: '-25px', 
                 left: '-40px', 
                 background: 'rgba(255, 255, 255, 0.85)', 
                 backdropFilter: 'blur(12px)', 
                 padding: '1.2rem', 
                 borderRadius: '20px', 
                 boxShadow: '0 15px 35px rgba(0,0,0,0.1)', 
                 display: 'flex', 
                 alignItems: 'center', 
                 gap: '15px', 
                 border: '1px solid rgba(255,255,255,0.6)', 
                 zIndex: 10 
               }}
             >
               <div style={{ background: '#1D2951', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37' }}>
                 <Activity size={26} strokeWidth={2} />
               </div>
               <div>
                 <span style={{ display: 'block', fontWeight: 700, color: '#666', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>Protocolo</span>
                 <span style={{ display: 'block', fontSize: '1.4rem', color: 'var(--gold-bronze)', fontWeight: 900, letterSpacing: '-0.5px', lineHeight: 1 }}>BIOARCH</span>
               </div>
             </motion.div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
