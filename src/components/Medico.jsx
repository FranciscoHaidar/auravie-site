import React from 'react';
import { motion } from 'framer-motion';

export function Medico({ siteConfig }) {
  return (
    <section id="medico" className="section bg-marinho" style={{ paddingTop: '3rem' }}>
      <div className="container about-grid">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/foto-medico.jpg" 
            alt="Dr Francisco Haidar" 
            style={{ width: '100%', maxWidth: '400px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', objectFit: 'cover' }}
          />
        </motion.div>
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 style={{ color: 'var(--gold-champagne)', marginBottom: '1rem', fontSize: '2.8rem'}}>Dr. Francisco Haidar</h2>
          <p style={{ opacity: 0.9, marginBottom: '1.5rem', fontSize: '1.1rem', textAlign: 'justify' }}>
            {siteConfig.about_text_p1}
          </p>
          <p style={{ opacity: 0.9, marginBottom: '1.5rem', fontSize: '1.1rem', textAlign: 'justify' }}>
            {siteConfig.about_text_p2}
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <span style={{ fontWeight: 600, color: 'var(--gold-champagne)', display: 'block', fontSize: '1.1rem' }}>CRM/RS 57907</span>
            <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', display: 'block', marginTop: '0.3rem', lineHeight: '1.4' }}>Médico com pós-graduação em nutrologia, não especialista</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
