import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Microscope, Pill, TrendingUp } from 'lucide-react';

export function Jornada() {
  const steps = [
    { 
      num: "01", 
      title: "Mapeamento Metabólico", 
      text: "Avaliação clínica presencial ou online, anamnese detalhada e coleta da sua biografia metabólica.",
      icon: ClipboardList
    },
    { 
      num: "02", 
      title: "Bioimpedância e Laboratório", 
      text: "Leitura de composição corporal segmentada e mapeamento sanguíneo.",
      icon: Microscope
    },
    { 
      num: "03", 
      title: "Plano Terapêutico BioARch", 
      text: "Desenho da engenharia hormonal, suplementos e infusões injetáveis para ação mais rápida.",
      icon: Pill
    },
    { 
      num: "04", 
      title: "Hipertrofia e Manutenção", 
      text: "Monitoramento de ganho de massa, evolução clínica e readaptações constantes de dose.",
      icon: TrendingUp
    }
  ];

  return (
    <section id="jornada" style={{ padding: '8rem 5%', backgroundColor: '#1B2745', position: 'relative', overflow: 'hidden' }}>
      {/* Luzes de Fundo (Glow Ambient) */}
      <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(27,39,69,0) 70%)', filter: 'blur(50px)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, rgba(27,39,69,0) 70%)', filter: 'blur(50px)', zIndex: 0 }} />

      <div style={{ maxWidth: '1250px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div 
          style={{ textAlign: 'center', marginBottom: '5rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '3.2rem', color: '#E5D3B3', marginBottom: '1.5rem', fontWeight: 800, letterSpacing: '-1px' }}>A Jornada AuraVie</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>O caminho exato que percorremos juntos, estruturado com precisão milimétrica para reconstruir seu metabolismo sem margem para erros ou adivinhações.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * index, duration: 0.6 }}
              whileHover={{ y: -12, borderColor: 'rgba(212,175,55,0.4)', boxShadow: '0 25px 50px rgba(0,0,0,0.4)' }}
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                padding: '3rem 2rem',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            >
              {/* Número Fantasma d'água */}
              <div style={{ position: 'absolute', top: '5px', right: '15px', fontSize: '8rem', fontWeight: 900, color: 'rgba(255,255,255,0.03)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
                {step.num}
              </div>

              {/* Icon Container Dourado */}
              <div style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.05) 100%)', width: '75px', height: '75px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.2)' }}>
                <step.icon size={36} strokeWidth={1.5} />
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ color: '#D4AF37', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '3px' }}>PASSO {step.num}</span>
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.45rem', marginBottom: '1rem', lineHeight: 1.3 }}>{step.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.6, flexGrow: 1 }}>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
