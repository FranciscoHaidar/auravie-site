import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Dumbbell, HeartPulse, Activity, Sparkles, Brain } from 'lucide-react';

export function Atuacao() {
  const areas = [
    { title: "Emagrecimento", text: "Perda de gordura com preservação de massa magra por otimização enzimática.", icon: Flame },
    { title: "Hipertrofia", text: "Modulação de biogênese muscular com suporte hormonal e nutrição cirúrgica.", icon: Dumbbell },
    { title: "Lipedema", text: "Abordagem metabólica e anti-inflamatória profunda para regressão de volume e alívio do lipedema.", icon: HeartPulse },
    { title: "Reposição Hormonal", text: "Restauração clínica de testosterona, estradiol, e eixos tireoidianos desgastados.", icon: Activity },
    { title: "Menopausa & Climatério", text: "Modulação fisiológica fina para anular os sintomas, blindar massa óssea e devolver a vitalidade.", icon: Sparkles },
    { title: "Disbiose Intestinal", text: "Tratamento da inflamação da microbiota intestinal para cura sistêmica e absortiva.", icon: Brain }
  ];

  return (
    <section id="atuacao" className="section">
      <div className="container">
        <motion.h2 
          className="section-title text-petroleo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Áreas de Atuação
        </motion.h2>
        <div className="cards-grid" style={{ marginTop: '3rem' }}>
          {areas.map((area, index) => (
            <motion.div 
              key={index}
              className="info-card info-card-glow" 
              style={{ borderTopColor: 'var(--gold-bronze)', borderTopWidth: '4px', borderTopStyle: 'solid' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--gold-bronze)' }}>
                  <area.icon size={48} strokeWidth={1.2} />
              </div>
              <h3 style={{ fontSize: '1.4rem' }}>{area.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-grafite)', lineHeight: 1.6 }}>{area.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
