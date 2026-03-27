import React from 'react';
import { motion } from 'framer-motion';

export function PreFooterCTA({ whatsappLink }) {
  return (
    <section style={{ backgroundColor: '#FAF9F6', padding: '6rem 5%', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <span style={{ display: 'block', color: 'var(--gold-bronze)', fontWeight: 800, fontSize: '0.95rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            O Próximo Passo
          </span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.2rem)', color: 'var(--title-marinho)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem', letterSpacing: '-1px' }}>
            Pronto para recuperar o seu ápice metabólico?
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-grafite)', opacity: 0.9, marginBottom: '3rem', lineHeight: 1.6 }}>
            A ciência e a fisiologia jogam a seu favor. Agende agora sua avaliação e construa o seu protocolo clínico definitivo em busca da longevidade de alta performance.
          </p>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{ 
              padding: '1.2rem 3rem',
              fontSize: '1.15rem',
              fontWeight: 700,
              boxShadow: '0 15px 35px rgba(29, 41, 81, 0.25)',
              display: 'inline-flex',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            Começar Minha Transformação
          </a>
        </motion.div>
      </div>
    </section>
  );
}
