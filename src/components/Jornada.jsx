import React from 'react';
import { motion } from 'framer-motion';

export function Jornada() {
  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const steps = [
    { num: "1", title: "Mapeamento Metabólico", text: "Avaliação clínica presencial, anamnese detalhada e coleta da sua biografia metabólica." },
    { num: "2", title: "Exames de Precisão", text: "Bioimpedância segmentada e mapeamento laboratorial extenso e direcionado." },
    { num: "3", title: "Plano Terapêutico", text: "Desenho do ciclo hormonal, suplementação ou infusões clínicas individualizadas." },
    { num: "4", title: "Acompanhamento", text: "Monitoramento milimétrico ao longo dos retornos para readaptação de dosagens e hipertrofia." }
  ];

  return (
    <section id="jornada" className="section">
      <div className="container">
        <motion.h2 
          className="section-title text-petroleo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          A Jornada do Paciente
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Como funciona a estrutura de um acompanhamento seguro e sem margem para dúvidas.
        </motion.p>

        <div className="journey-timeline">
          {steps.map((step, index) => (
            <motion.div 
              key={step.num}
              className="journey-step"
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="journey-number">{step.num}</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{step.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-grafite)' }}>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
