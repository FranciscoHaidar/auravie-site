import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Award, X } from 'lucide-react';

export function Planos({ whatsappNumber }) {
  const [activeModal, setActiveModal] = useState(null);

  const getPlanWhatsAppLink = (planName) => {
    const text = `Olá, equipe AuraVie! Estava navegando pelo site e me identifiquei muito com o método de vocês. Gostaria de dar o próximo passo e receber um atendimento exclusivo para saber mais detalhes sobre o Programa Clínico ${planName}. Como funciona para iniciarmos?`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const modalData = {
    essential: {
      title: "BioARch Essential & Essential + (O Reset Metabólico - 3 Meses)",
      foco: "Ideal para quem precisa de um choque de realidade no metabolismo, corrigir deficiências agudas e iniciar o processo de emagrecimento ou hipertrofia com base médica sólida.",
      vivencia: "3 meses de acompanhamento intenso (3 consultas + 3 exames de bioimpedância analítica).",
      diferencial: "Acesso estratégico aos nossos protocolos de medicamentos injetáveis (IM), acelerando a absorção de nutrientes e a resposta do seu corpo ao tratamento.",
      whatsappPlan: "Essential ou Essential +"
    },
    prime: {
      title: "BioARch Prime & Prime + (A Consolidação - 6 Meses)",
      foco: "Para quem busca transformações profundas e a consolidação de um novo estilo de vida. O tempo ideal para estabilizar hormônios, mudar a composição corporal de forma visível e garantir que os resultados sejam definitivos.",
      vivencia: "6 meses de parceria médica (6 consultas + 6 exames de bioimpedância analítica), garantindo ajustes finos ao longo de todo o semestre.",
      diferencial: "Inclui o poder da via injetável (IM) durante os 6 meses, maximizando a performance física e mental de forma contínua.",
      whatsappPlan: "Prime ou Prime +"
    },
    black: {
      title: "BioARch Black (O Ápice da Performance - 12 Meses)",
      foco: "O nível máximo de exclusividade da AuraVie Concept. Desenhado para pacientes exigentes que tratam a saúde como seu maior ativo e desejam um médico \"concierge\" focado na sua longevidade, estética e performance o ano inteiro.",
      vivencia: "1 ano completo de blindagem metabólica (12 consultas + 12 reavaliações + 12 bioimpedâncias). Acompanhamento irrestrito para quem não aceita nada menos que a excelência contínua.",
      whatsappPlan: "Black"
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const handleKeyDown = (e, plan) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveModal(plan);
    }
  };

  return (
    <section id="planos" className="section" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#f0f0f5' }}>
      {/* Decorative Orbs for Glassmorphism Effect */}
      <div style={{ position: 'absolute', top: '0%', left: '-10%', width: '500px', height: '500px', background: 'var(--gold-champagne)', borderRadius: '50%', filter: 'blur(90px)', opacity: 0.6, zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '600px', height: '600px', background: 'var(--primary)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.5, zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Programas Clínicos
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A esteira premium de serviços da AuraVie para acompanhamento sistêmico.
        </motion.p>
        
        <div className="plans-grid">
          {/* Essential */}
          <motion.div 
            className="plan-card glass-panel" 
            style={{ borderTop: '4px solid #333', cursor: 'pointer' }} 
            onClick={() => setActiveModal('essential')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, 'essential')}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="plan-subtitle">ACESSO BASE</span>
            <h3 style={{ color: '#333' }}>Essential</h3>
            <ul>
              <li><Check size={14} className="check-icon" /> Consulta clínica completa</li>
              <li><Check size={14} className="check-icon" /> Bioimpedância analítica</li>
              <li><Check size={14} className="check-icon" /> Acompanhamento por 3 meses</li>
            </ul>
            <a href={getPlanWhatsAppLink('Essential')} target="_blank" rel="noopener noreferrer" className="btn-plan btn-plan-essential" onClick={(e) => e.stopPropagation()}>SABER MAIS</a>
          </motion.div>

          {/* Essential + */}
          <motion.div 
            className="plan-card glass-panel" 
            style={{ borderTop: '4px solid #888', cursor: 'pointer' }} 
            onClick={() => setActiveModal('essential')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, 'essential')}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="plan-subtitle">PERFORMANCE</span>
            <h3 style={{ color: '#888' }}>Essential +</h3>
            <ul>
              <li><Check size={14} className="check-icon" /> Tudo do Essential</li>
              <li><Check size={14} className="check-icon" /> Retorno de validação a cada 30 dias</li>
              <li><Check size={14} className="check-icon" /> Protocolo IM personalizado</li>
            </ul>
            <a href={getPlanWhatsAppLink('Essential +')} target="_blank" rel="noopener noreferrer" className="btn-plan btn-plan-essential-plus" onClick={(e) => e.stopPropagation()}>SABER MAIS</a>
          </motion.div>

          {/* Prime */}
          <motion.div 
            className="plan-card plan-featured glass-panel-light" 
            style={{ borderTop: '4px solid var(--gold-champagne)', cursor: 'pointer' }} 
            onClick={() => setActiveModal('prime')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, 'prime')}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="plan-subtitle" style={{ color: 'var(--gold-champagne)' }}>PREMIUM</span>
            <h3 style={{ color: 'var(--gold-champagne)' }}>Prime</h3>
            <ul>
              <li><Check size={14} className="check-icon" /> Rota Metabólica Avançada</li>
              <li><Check size={14} className="check-icon" /> Exames Laboratoriais aprofundados</li>
              <li><Check size={14} className="check-icon" /> Acompanhamento por 6 meses</li>
            </ul>
            <a href={getPlanWhatsAppLink('Prime')} target="_blank" rel="noopener noreferrer" className="btn-plan btn-plan-prime" onClick={(e) => e.stopPropagation()}>SABER MAIS</a>
          </motion.div>

          {/* Prime + */}
          <motion.div 
            className="plan-card glass-panel" 
            style={{ borderTop: '4px solid #B87333', cursor: 'pointer' }} 
            onClick={() => setActiveModal('prime')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, 'prime')}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <span className="plan-subtitle">ADVANCED</span>
            <h3 style={{ color: '#B87333' }}>Prime +</h3>
            <ul>
              <li><Check size={14} className="check-icon" /> Tudo do Prime</li>
              <li><Check size={14} className="check-icon" /> Protocolos de Injetáveis personalizado</li>
              <li><Check size={14} className="check-icon" /> Concierge WhatsApp Direto</li>
            </ul>
            <a href={getPlanWhatsAppLink('Prime +')} target="_blank" rel="noopener noreferrer" className="btn-plan btn-plan-prime-plus" onClick={(e) => e.stopPropagation()}>SABER MAIS</a>
          </motion.div>

          {/* Black */}
          <motion.div 
            className="plan-card plan-black glass-panel" 
            style={{ borderTop: '4px solid #FFD700', backgroundColor: 'rgba(5, 5, 5, 0.45)', color: '#fff', cursor: 'pointer', backdropFilter: 'blur(20px)' }} 
            onClick={() => setActiveModal('black')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, 'black')}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <span className="plan-subtitle" style={{ color: 'var(--gold-bronze)' }}>ELITE EXCLUSIVE</span>
            <h3 style={{ color: '#FFD700' }}>Black</h3>
            <ul>
              <li><Award size={14} className="check-icon-gold" /> Consultoria Médica Full-Year</li>
              <li><Award size={14} className="check-icon-gold" /> Controle Anti-aging</li>
              <li><Award size={14} className="check-icon-gold" /> Acompanhamento a cada 15 dias</li>
            </ul>
            <a href={getPlanWhatsAppLink('Black')} target="_blank" rel="noopener noreferrer" className="btn-plan btn-plan-black" onClick={(e) => e.stopPropagation()}>SABER MAIS</a>
          </motion.div>
        </div>
      </div>

      {/* MODAL PLANOS */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            className="modal-overlay" 
            onClick={() => setActiveModal(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ display: 'flex' }}
          >
            <motion.div 
              className="modal-content" 
              onClick={e => e.stopPropagation()}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <button 
                className="modal-close" 
                onClick={() => setActiveModal(null)}
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--title-marinho)', paddingRight: '2rem', lineHeight: '1.3' }}>
                {modalData[activeModal].title}
              </h3>
              <div style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: '#444' }}>
                <p style={{ marginBottom: '1rem', textAlign: 'justify' }}><strong style={{color: '#111'}}>Foco:</strong> {modalData[activeModal].foco}</p>
                <p style={{ marginBottom: '1rem', textAlign: 'justify' }}><strong style={{color: '#111'}}>O que o paciente vive:</strong> {modalData[activeModal].vivencia}</p>
                {modalData[activeModal].diferencial && (
                  <p style={{textAlign: 'justify'}}><strong style={{color: '#111'}}>Diferencial do {activeModal === 'essential' ? 'Essential +' : 'Prime +'}:</strong> {modalData[activeModal].diferencial}</p>
                )}
              </div>
              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <a 
                  href={getPlanWhatsAppLink(modalData[activeModal].whatsappPlan)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                  style={{ fontSize: '1rem', padding: '1rem', display: 'block', width: '100%', textAlign: 'center', boxSizing: 'border-box' }}
                  onClick={() => setActiveModal(null)}
                >
                  TENHO INTERESSE NESTE PLANO
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
