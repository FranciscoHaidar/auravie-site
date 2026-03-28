import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    nome: "A. Silva",
    tratamento: "Protocolo Lipedema",
    texto: "Depois de anos tentando dietas que me deixavam fraca e frustrada, descobri que meu problema era inflamatório. Em 3 meses com a abordagem BioARch perdi volume nas pernas que eu achei que nunca mais perderia. É um alívio não sentir mais dores diárias."
  },
  {
    nome: "M. Oliveira",
    tratamento: "Modulação Hormonal e Longevidade",
    texto: "Cheguei no consultório sem energia, com névoa mental e libido zero. Com o tratamento guiado, exames e terapias injetáveis, sinto que rejuvenesci uns 10 anos. Minha disposição no trabalho e na vida pessoal mudou da água pro vinho. Recomendo de olhos fechados."
  },
  {
    nome: "J. Costa",
    tratamento: "Emagrecimento de Alta Performance",
    texto: "Perdi 18kg sem flacidez e no processo ganhei massa magra, incrível. A Bioimpedância detalhada e a inteligência nutricional da equipe fazem toda a diferença para acelerar o processo sem estresse absurdo."
  }
];

export function Depoimentos() {
  return (
    <section id="depoimentos" style={{ padding: '6rem 5%', backgroundColor: '#1D2951', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '2.8rem', color: '#E5D3B3', marginBottom: '1rem', fontWeight: 800 }}>Histórias Reais</h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>Para a AuraVie, a verdadeira ciência dos resultados se estende muito além da teoria. Veja depoimentos anônimos de pacientes que redobraram sua capacidade biológica.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -10, borderColor: 'rgba(212, 175, 55, 0.4)' }}
              style={{
                backgroundColor: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(10px)',
                borderRadius: '24px',
                padding: '2.5rem',
                border: '1px solid rgba(229, 211, 179, 0.1)',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              <Quote size={40} color="rgba(212, 175, 55, 0.15)" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }} />
              <div style={{ display: 'flex', gap: '6px', marginBottom: '1.5rem' }}>
                {[...Array(5)].map((_, idx) => <Star key={idx} size={18} color="#D4AF37" fill="#D4AF37" />)}
              </div>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '2rem' }}>
                "{rev.texto}"
              </p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 5px 0' }}>{rev.nome}</h4>
                <span style={{ color: '#E5D3B3', fontSize: '0.9rem', fontWeight: 500 }}>{rev.tratamento}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
