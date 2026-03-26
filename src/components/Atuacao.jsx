import React from 'react';
import { motion } from 'framer-motion';

export function Atuacao() {
  const areas = [
    { title: "Emagrecimento", text: "Perda de gordura com preservação de massa magra por otimização enzimática." },
    { title: "Hipertrofia", text: "Modulação de biogênese muscular com suporte hormonal e nutrição cirúrgica." },
    { title: "Lipedema", text: "Abordagem metabólica e anti-inflamatória profunda para regressão de volume e alívio do lipedema." },
    { title: "Reposição Hormonal", text: "Restauração clínica de testosterona, estradiol, e eixos tireoidianos desgastados." },
    { title: "Menopausa & Climatério", text: "Modulação fisiológica fina para anular os sintomas, blindar massa óssea e devolver a vitalidade." },
    { title: "Disbiose Intestinal", text: "Tratamento da inflamação da microbiota intestinal para cura sistêmica e absortiva." }
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
              className="info-card" 
              style={{ borderTopColor: 'var(--gold-bronze)'}}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <h3>{area.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-grafite)'}}>{area.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
