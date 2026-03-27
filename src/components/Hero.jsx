import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Activity } from 'lucide-react';
import { scrollTo } from '../utils/scroll';

export function Hero({ siteConfig, whatsappLink }) {
  return (
    <section className="hero" style={{ position: 'relative', overflow: 'hidden', paddingTop: '8.5rem', paddingBottom: '9rem' }}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        poster="/hero-photo.jpg"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
      >
        {/* Usaremos um link local pois a Pexels bloqueia streaming remoto (CORS). Coloque um 'video-clinica.mp4' na pasta public. */}
        <source src="/video-clinica.mp4" type="video/mp4" />
        {/* Fallback open-source funcional caso não tenha vídeo local na pasta: */}
        <source src="https://cdn.coverr.co/videos/coverr-laboratory-research-2541/1080p.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(90deg, #1B2745 0%, rgba(27, 39, 69, 0.85) 45%, rgba(27, 39, 69, 0.2) 100%)', zIndex: 1 }} />

      <style>{`
        .hero-glass-badge {
          position: absolute;
          bottom: -25px;
          left: -40px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          padding: 1.2rem;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          gap: 15px;
          border: 1px solid rgba(255,255,255,0.6);
          z-index: 10;
        }
        @media (max-width: 480px) {
          .hero-glass-badge {
            left: 5%;
            right: 5%;
            width: 90%;
            bottom: -35px;
            justify-content: center;
            padding: 1rem;
          }
        }
      `}</style>
      <div className="container hero-grid" style={{ position: 'relative', zIndex: 2, display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
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
           <h1 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.4rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.2rem', letterSpacing: '-1px', color: '#FFFFFF' }}>
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
          <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', color: 'rgba(255,255,255,0.85)', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '95%' }}>
            {siteConfig.hero_subtitle}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#D4AF37', color: '#1B2745', fontWeight: 700, padding: '1rem 1.4rem', flex: '1 1 200px', textAlign: 'center', fontSize: '1rem', borderRadius: '50px', boxShadow: '0 4px 15px rgba(212,175,55,0.3)' }}>
              Iniciar Minha Transformação
            </a>
            <button onClick={() => scrollTo('planos')} className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', padding: '1rem 1.4rem', flex: '1 1 180px', textAlign: 'center', fontWeight: 600, borderRadius: '50px' }}>
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
          style={{ flex: '1 1 350px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '350px' }}
        >
           <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             
             {/* Badge Flutuante Glassmorphism Centralizado pois a Foto foi removida pelo Fundo */}
             <motion.div 
               style={{
                  background: 'rgba(27, 39, 69, 0.75)',
                  backdropFilter: 'blur(16px)',
                  padding: '1.5rem 2rem',
                  borderRadius: '24px',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  border: '1px solid rgba(212,175,55,0.4)',
               }}
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
             >
               <div style={{ background: 'rgba(212,175,55,0.15)', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37' }}>
                 <Activity size={32} strokeWidth={2} />
               </div>
               <div>
                 <span style={{ display: 'block', fontWeight: 700, color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>Exclusividade</span>
                 <span style={{ display: 'block', fontSize: '1.8rem', color: '#D4AF37', fontWeight: 900, letterSpacing: '-0.5px', lineHeight: 1 }}>BIOARCH</span>
               </div>
             </motion.div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
