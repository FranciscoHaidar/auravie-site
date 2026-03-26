import React from 'react';
import { motion } from 'framer-motion';
import { BatteryCharging, Brain, HeartPulse } from 'lucide-react';

export function Problema() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="problema" className="section bg-offwhite">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Por que procurar a AuraVie?
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Cansaço persistente, estagnação no emagrecimento e dificuldade de ganhar massa muscular não são "normais". São sinais biológicos.
        </motion.p>
        <div className="cards-grid">
          <motion.div 
            className="info-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <BatteryCharging size={32} color="var(--gold-champagne)" style={{ marginBottom: '1rem' }} />
            <h3>Falta de Energia e Fadiga</h3>
            <p>Desbalanços hormonais e deficiências invisíveis nos exames comuns podem ser os sabotadores da sua rotina produtiva.</p>
          </motion.div>
          <motion.div 
            className="info-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Brain size={32} color="var(--gold-champagne)" style={{ marginBottom: '1rem' }} />
            <h3>Dificuldade de Perder Peso</h3>
            <p>O achismo e dietas padrão ignoram sua assinatura metabólica. A nutrição baseada e orientada por IA química corta o abismo para o resultado.</p>
          </motion.div>
          <motion.div 
            className="info-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <HeartPulse size={32} color="var(--gold-champagne)" style={{ marginBottom: '1rem' }} />
            <h3>A Solução Baseada em Evidências</h3>
            <p>Troque a tentativa e erro por um sistema médico investigativo onde cada decisão suplementar e clínica é rastreada com parâmetros claros.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
