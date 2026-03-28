import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Dumbbell, Activity, Sparkles, Brain } from 'lucide-react';

const LegsIcon = ({ size = 24, strokeWidth = 2, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3h8" /> {/* Cintura */}
    <path d="M6 8c0 4 2 6 2 13" /> {/* Perna Esq */}
    <path d="M18 8c0 4-2 6-2 13" /> {/* Perna Dir */}
    <path d="M12 10v11" /> {/* Divisão central */}
    <path d="M6 8c-1-2-1-5 2-5" /> {/* Quadril Esq */}
    <path d="M18 8c1-2 1-5-2-5" /> {/* Quadril Dir */}
  </svg>
);

const IntestineIcon = ({ size = 24, strokeWidth = 2, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    {/* Contorno Externo (Cólon com curvas haustrais suaves - seguindo o rascunho simplificado) */}
    <path d="M 5 22 C 3 17, 3 14, 5 11 C 3 7, 6 5, 9 5 C 12 7, 12 7, 15 5 C 18 5, 21 7, 19 11 C 21 14, 21 17, 19 22" />
    {/* Contorno Interno Liso em U (Totalmente Oco por dentro) */}
    <path d="M 9 22 V 12 A 3 3 0 0 1 15 12 V 22" />
  </svg>
);

export function Atuacao() {
  const areas = [
    { title: "Emagrecimento", text: "Perda de gordura com preservação de massa magra por otimização enzimática.", icon: Flame },
    { title: "Hipertrofia", text: "Modulação de biogênese muscular com suporte hormonal e nutrição cirúrgica.", icon: Dumbbell },
    { title: "Lipedema", text: "Abordagem metabólica e anti-inflamatória profunda para regressão de volume e alívio do lipedema.", icon: LegsIcon },
    { title: "Reposição Hormonal", text: "Restauração clínica de testosterona, estradiol, e eixos tireoidianos desgastados.", icon: Activity },
    { title: "Menopausa & Climatério", text: "Modulação fisiológica fina para anular os sintomas, blindar massa óssea e devolver a vitalidade.", icon: Sparkles },
    { title: "Disbiose Intestinal", text: "Tratamento da inflamação da microbiota intestinal para cura sistêmica e absortiva.", icon: IntestineIcon }
  ];

  return (
    <section id="atuacao" className="section" style={{ paddingTop: '2.5rem' }}>
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
