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

const IntestineIcon = ({ size = 24, strokeWidth = 1.5, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    {/* Contorno completo do Cólon (Ascendente, Transverso, Descendente e Sigmóide) */}
    <path d="M 5 20 C 3 17, 3 15, 5 13 C 3 10, 5 7, 8 7 C 10 7, 11 9, 12 9 C 13 9, 14 7, 16 7 C 19 7, 21 10, 19 13 C 21 15, 21 18, 19 20 C 18 21, 15 22, 14 23 H 11 C 12 22, 15 21, 16 20 C 18 18, 18 16, 17 14 C 18 12, 17 10, 15 10 C 14 11, 13 11, 12 11 C 11 11, 10 11, 9 10 C 7 10, 6 12, 7 14 C 8 16, 8 18, 7 20 Z" />
    
    {/* Dobras Haustrais (Marcadores Internos para dar o efeito "gominhos" do intestino) */}
    <path d="M 5 13 C 5.5 13, 6.5 13.5, 7 14" />
    <path d="M 19 13 C 18.5 13, 17.5 13.5, 17 14" />
    <path d="M 8 7 C 8.5 8, 8.5 9, 9 10" />
    <path d="M 16 7 C 15.5 8, 15.5 9, 15 10" />

    {/* Intestino Delgado (Alças centrais estilizadas) */}
    <path d="M 10 14 C 11 11.5, 14 11.5, 13 14 C 12 16, 15 16, 14 18" />
    <path d="M 10 16 C 11.5 17, 9 18, 11 19" />
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
