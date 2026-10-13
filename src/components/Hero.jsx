import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Activity, Check, MapPin, Award, ArrowRight } from 'lucide-react';
import { scrollTo } from '../utils/scroll';

export function Hero({ siteConfig, whatsappLink }) {
  return (
    <>
      <section className="hero" style={{ paddingTop: '4.5rem', paddingBottom: '4.5rem', position: 'relative', overflow: 'hidden' }}>
        <style>{`
          .hero-glass-badge {
            position: absolute;
            bottom: -22px;
            left: -35px;
            background: rgba(255, 255, 255, 0.92);
            backdrop-filter: blur(12px);
            padding: 1rem 1.4rem;
            border-radius: 20px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.12);
            display: flex;
            align-items: center;
            gap: 14px;
            border: 1px solid rgba(212, 175, 55, 0.4);
            z-index: 10;
          }
          .hero-floating-stat {
            position: absolute;
            top: 25px;
            right: -25px;
            background: #0d1527;
            color: #ffffff;
            border: 1px solid rgba(212, 175, 55, 0.35);
            padding: 10px 16px;
            border-radius: 16px;
            box-shadow: 0 15px 30px rgba(13, 21, 39, 0.25);
            text-align: center;
            z-index: 10;
          }
          .authority-chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 0.84rem;
            font-weight: 600;
            color: #334155;
            background: rgba(255, 255, 255, 0.7);
            border: 1px solid #e2e8f0;
            padding: 5px 12px;
            border-radius: 20px;
          }
          @media (max-width: 768px) {
            .hero-glass-badge {
              left: 5%;
              right: 5%;
              width: 90%;
              bottom: -25px;
              justify-content: center;
              padding: 0.8rem;
            }
            .hero-floating-stat {
              top: 10px;
              right: 10px;
            }
          }
        `}</style>
        
        <div className="container hero-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '3.5rem', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hero-content" 
            style={{ flex: '1 1 480px' }}
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                padding: '0.4rem 1.1rem', 
                background: 'rgba(212,175,55,0.12)', 
                border: '1px solid rgba(212,175,55,0.4)', 
                borderRadius: '50px', 
                color: '#997514', 
                fontWeight: 700, 
                fontSize: '0.82rem', 
                marginBottom: '1.4rem', 
                letterSpacing: '0.8px', 
                textTransform: 'uppercase' 
              }}
            >
              <Sparkles size={15} strokeWidth={2.5} style={{ marginRight: '6px' }} />
              Otimização Metabólica & Longevidade
            </motion.div>

            <h1 style={{ fontSize: 'clamp(2.3rem, 4.3vw, 3.6rem)', fontWeight: 800, lineHeight: 1.12, marginBottom: '1.2rem', letterSpacing: '-1px', color: '#1B2745' }}>
              {(() => {
                const words = siteConfig.hero_title.split(' ');
                const lastTwo = words.splice(-2).join(' ');
                return (
                  <>
                    {words.join(' ')}{' '}
                    <span style={{ 
                      background: 'linear-gradient(135deg, #b8860b 0%, #d4af37 50%, #996515 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block'
                    }}>
                      {lastTwo}
                    </span>
                  </>
                );
              })()}
            </h1>

            <p style={{ fontSize: 'clamp(1.02rem, 1.8vw, 1.2rem)', color: 'var(--text-grafite)', opacity: 0.88, marginBottom: '2.2rem', lineHeight: 1.65, maxWidth: '95%' }}>
              {siteConfig.hero_subtitle}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary" 
                style={{ 
                  padding: '0.95rem 1.6rem', 
                  flex: '1 1 210px', 
                  textAlign: 'center', 
                  fontSize: '1rem',
                  fontWeight: 700,
                  boxShadow: '0 10px 25px rgba(29, 41, 81, 0.35)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                Iniciar Minha Transformação
                <ArrowRight size={18} />
              </a>
              <button 
                onClick={() => scrollTo('primeira-consulta')} 
                className="btn btn-outline" 
                style={{ 
                  padding: '0.95rem 1.4rem', 
                  flex: '1 1 180px', 
                  textAlign: 'center',
                  fontWeight: 700
                }}
              >
                Como Funciona a Consulta
              </button>
            </div>

            {/* SELOS DE AUTORIDADE MÉDICA (NOVO NO HERO) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingTop: '1.5rem', borderTop: '1px solid rgba(226, 232, 240, 0.9)' }}>
              <span className="authority-chip">
                <Check size={14} color="#d4af37" strokeWidth={3} />
                Dr. Francisco Haidar • <strong>CRM/RS 57907</strong>
              </span>
              <span className="authority-chip">
                <Award size={14} color="#d4af37" />
                Bioimpedância Analítica no Consultório
              </span>
              <span className="authority-chip">
                <MapPin size={14} color="#d4af37" />
                Centro de Campo Bom (Rua Sta. Teresinha, 205)
              </span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-image-wrapper" 
            style={{ flex: '1 1 360px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '28px',
                padding: '8px',
                background: 'linear-gradient(145deg, rgba(212,175,55,0.4), rgba(255,255,255,0.95), rgba(22,34,62,0.25))',
                boxShadow: '0 25px 60px rgba(29, 41, 81, 0.16)'
              }}>
                <img 
                  src="/hero-photo.jpg" 
                  alt="Dr. Francisco Haidar - AuraVie Concept" 
                  fetchPriority="high"
                  style={{ width: '100%', maxWidth: '380px', height: '460px', borderRadius: '22px', objectFit: 'cover', display: 'block' }}
                />
              </div>
              
              {/* Badge Flutuante Glassmorphism sobre a foto */}
              <motion.div 
                className="hero-glass-badge"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
              >
                <div style={{ background: '#1D2951', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37' }}>
                  <Activity size={24} strokeWidth={2.2} />
                </div>
                <div>
                  <span style={{ display: 'block', fontWeight: 700, color: '#64748b', fontSize: '0.78rem', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '1px' }}>Protocolo Exclusivo</span>
                  <span style={{ display: 'block', fontSize: '1.25rem', color: 'var(--gold-bronze)', fontWeight: 900, letterSpacing: '-0.3px', lineHeight: 1 }}>BIOARCH Concept</span>
                </div>
              </motion.div>

              {/* Badge de Estatísticas */}
              <motion.div 
                className="hero-floating-stat"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f7df8b', lineHeight: 1 }}>98%</div>
                <div style={{ fontSize: '0.7rem', opacity: 0.85, textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '2px' }}>Preservação Muscular</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BARRA DE PROVA SOCIAL E NÚMEROS DE IMPACTO */}
      <section style={{ backgroundColor: '#0d1527', borderTop: '1px solid rgba(212,175,55,0.2)', borderBottom: '1px solid rgba(212,175,55,0.2)', padding: '22px 20px' }}>
        <div className="container" style={{ maxWidth: '1150px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center' }}>
          <div>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#D4AF37', margin: 0, lineHeight: 1 }}>+1.200</h3>
            <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: '4px 0 0', fontWeight: 500 }}>Bioimpedâncias e Mapeamentos Realizados</p>
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#D4AF37', margin: 0, lineHeight: 1 }}>1h a 1h30</h3>
            <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: '4px 0 0', fontWeight: 500 }}>Duração Média da Consulta Médica</p>
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#D4AF37', margin: 0, lineHeight: 1 }}>5.0 ★</h3>
            <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: '4px 0 0', fontWeight: 500 }}>Avaliações Máximas no Google</p>
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#D4AF37', margin: 0, lineHeight: 1 }}>100%</h3>
            <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: '4px 0 0', fontWeight: 500 }}>Acompanhamento Médico Direto</p>
          </div>
        </div>
      </section>
    </>
  );
}
