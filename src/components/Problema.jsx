import React from 'react';
import { motion } from 'framer-motion';
import { BatteryWarning, Brain, ShieldCheck } from 'lucide-react';

export function Problema() {
  const problems = [
    {
      title: "Falta de Energia e Fadiga",
      text: "Desbalanços hormonais e deficiências invisíveis nos exames comuns podem ser os sabotadores da sua rotina produtiva.",
      icon: BatteryWarning
    },
    {
      title: "Dificuldade de Perder Peso",
      text: "O achismo e dietas padrão ignoram sua assinatura metabólica. A nutrição baseada e orientada por IA química corta o abismo para o resultado.",
      icon: Brain
    },
    {
      title: "A Solução Baseada em Evidências",
      text: "Troque a tentativa e erro por um sistema médico investigativo onde cada decisão suplementar e clínica é rastreada com parâmetros claros.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="problema" className="section bg-offwhite" style={{ paddingTop: '3rem', paddingBottom: '6rem' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <motion.div 
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '3rem', color: 'var(--title-marinho)', marginBottom: '1.2rem', fontWeight: 800, letterSpacing: '-1px' }}>Por que procurar a AuraVie?</h2>
          <p style={{ color: 'var(--text-grafite)', fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>Cansaço persistente, estagnação no emagrecimento e dificuldade de ganhar massa muscular não são "normais". São sinais biológicos.</p>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {problems.map((prob, index) => (
            <motion.div 
              key={index}
              className="info-card info-card-glow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * index, duration: 0.5 }}
              style={{
                borderTop: '4px solid var(--gold-bronze)',
                borderRadius: '24px',
                padding: '3rem 2rem',
                backgroundColor: '#fff',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                zIndex: 1,
                boxShadow: '0 15px 30px rgba(0,0,0,0.04)'
              }}
            >
              <div style={{ alignSelf: 'center', background: 'linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)', width: '85px', height: '85px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', color: 'var(--gold-bronze)', border: '1px solid rgba(212,175,55,0.2)' }}>
                <prob.icon size={42} strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: '1.45rem', color: 'var(--title-marinho)', marginBottom: '1.2rem', textAlign: 'center', lineHeight: 1.3 }}>{prob.title}</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-grafite)', lineHeight: 1.6, textAlign: 'center' }}>{prob.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
