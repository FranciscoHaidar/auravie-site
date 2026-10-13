import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Award, X, Crown, Sparkles, ArrowRight } from 'lucide-react';

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
      foco: "O nível máximo de exclusividade da AuraVie Concept. Desenhado para pacientes exigentes que tratam a saúde como seu maior ativo e desejam um médico concierge focado na sua longevidade, estética e performance o ano inteiro.",
      vivencia: "1 ano completo de blindagem metabólica (12 consultas + 12 reavaliações + 12 bioimpedâncias). Acompanhamento irrestrito para quem não aceita nada menos que a excelência contínua.",
      diferencial: "Monitoramento anual e contínuo durante as 4 estações, com acesso prioritário de agenda e suporte contínuo.",
      whatsappPlan: "Black"
    }
  };

  return (
    <section id="planos" className="section" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#f8fafc', padding: '6rem 20px' }}>
      {/* Luzes decorativas de fundo */}
      <div style={{ position: 'absolute', top: '0%', left: '-10%', width: '500px', height: '500px', background: 'rgba(212,175,55,0.08)', borderRadius: '50%', filter: 'blur(90px)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '500px', height: '500px', background: 'rgba(29,41,81,0.06)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1240px' }}>
        <motion.div
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span style={{ color: '#a88118', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.82rem', display: 'block', marginBottom: '8px' }}>
            Programas Clínicos BioARch
          </span>
          <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3rem)', color: 'var(--title-marinho)', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '0.8rem' }}>
            A Esteira Premium de Acompanhamento
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto', lineHeight: 1.6 }}>
            Estratégias estruturadas para cada momento da sua saúde, unindo consulta médica, bioimpedância e suporte de longo prazo.
          </p>
        </motion.div>
        
        {/* GRID DOS 3 PLANOS EM DARK LUXURY */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'stretch' }}>
          
          {/* 1. ESSENTIAL */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: '0 20px 45px rgba(0,0,0,0.08)' }}
            transition={{ duration: 0.4 }}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '24px',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
              position: 'relative'
            }}
          >
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '1.5rem', marginBottom: '1.8rem' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#a88118', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '6px' }}>
                3 Meses de Acompanhamento
              </span>
              <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--title-marinho)', marginBottom: '8px', lineHeight: 1.2 }}>
                BioARch Essential
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.5 }}>
                O reset metabólico ideal para quebrar o efeito sanfona, corrigir deficiências e iniciar a queima de gordura.
              </p>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '14px', flexGrow: 1 }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.92rem', color: '#334155' }}>
                <Check size={18} color="#d4af37" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span><strong>3 Consultas Médicas</strong> com o Dr. Francisco Haidar</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.92rem', color: '#334155' }}>
                <Check size={18} color="#d4af37" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span><strong>3 Bioimpedâncias Clínicas</strong> com relatório comparativo</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.92rem', color: '#334155' }}>
                <Check size={18} color="#d4af37" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Mapeamento laboratorial completo e correção metabólica</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.92rem', color: '#334155' }}>
                <Check size={18} color="#d4af37" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Acesso ao <strong>Portal do Paciente</strong> com histórico de exames</span>
              </li>
            </ul>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a 
                href={getPlanWhatsAppLink("Essential")}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ width: '100%', padding: '0.9rem', fontSize: '0.9rem', fontWeight: 700, borderRadius: '40px', textAlign: 'center' }}
              >
                Escolher Essential
              </a>
              <button 
                onClick={() => setActiveModal('essential')} 
                style={{ background: 'none', border: 'none', color: '#64748b', fontSize: '0.8rem', cursor: 'pointer', textDecoration: 'underline', padding: '4px' }}
              >
                Ver detalhes e diferenciais
              </button>
            </div>
          </motion.div>

          {/* 2. PRIME (DESTAQUE OURO - MAIS ESCOLHIDO) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, boxShadow: '0 30px 65px rgba(212,175,55,0.25)' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{
              backgroundColor: '#ffffff',
              border: '2px solid #d4af37',
              borderRadius: '24px',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 50px rgba(212,175,55,0.18)',
              position: 'relative',
              background: 'linear-gradient(180deg, #ffffff 0%, #fbf9f4 100%)'
            }}
          >
            {/* BADGE DE MAIS ESCOLHIDO */}
            <div style={{
              position: 'absolute',
              top: '-14px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(90deg, #d4af37, #b8860b)',
              color: '#0d1527',
              fontWeight: 800,
              fontSize: '0.74rem',
              textTransform: 'uppercase',
              padding: '5px 18px',
              borderRadius: '20px',
              letterSpacing: '1px',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <Sparkles size={12} /> Mais Escolhido
            </div>

            <div style={{ borderBottom: '1px solid rgba(212,175,55,0.25)', paddingBottom: '1.5rem', marginBottom: '1.8rem' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#a88118', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '6px' }}>
                6 Meses de Parceria Médica
              </span>
              <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--title-marinho)', marginBottom: '8px', lineHeight: 1.2 }}>
                BioARch Prime
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.5 }}>
                Consolidação de resultados, remodelação corporal, estabilização hormonal e sustentabilidade de peso.
              </p>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '14px', flexGrow: 1 }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.92rem', color: '#334155' }}>
                <Check size={18} color="#d4af37" strokeWidth={2.5} style={{ marginTop: '2px', flexShrink: 0 }} />
                <span><strong>6 Consultas Médicas</strong> com acompanhamento mensal constante</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.92rem', color: '#334155' }}>
                <Check size={18} color="#d4af37" strokeWidth={2.5} style={{ marginTop: '2px', flexShrink: 0 }} />
                <span><strong>6 Bioimpedâncias Analíticas</strong> monitorando perda de gordura pura</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.92rem', color: '#334155' }}>
                <Check size={18} color="#d4af37" strokeWidth={2.5} style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Acesso a <strong>protocolos injetáveis (IM)</strong> de rápida absorção</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.92rem', color: '#334155' }}>
                <Check size={18} color="#d4af37" strokeWidth={2.5} style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Suporte concierge contínuo com orientações entre consultas</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.92rem', color: '#334155' }}>
                <Check size={18} color="#d4af37" strokeWidth={2.5} style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Ajustes finos na transição de queima para hipertrofia</span>
              </li>
            </ul>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a 
                href={getPlanWhatsAppLink("Prime")}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ 
                  width: '100%', 
                  padding: '0.95rem', 
                  fontSize: '0.92rem', 
                  fontWeight: 700, 
                  borderRadius: '40px', 
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #d4af37 0%, #b8860b 100%)',
                  color: '#0d1527',
                  border: 'none',
                  boxShadow: '0 6px 20px rgba(212,175,55,0.45)'
                }}
              >
                Escolher Prime (Recomendado)
              </a>
              <button 
                onClick={() => setActiveModal('prime')} 
                style={{ background: 'none', border: 'none', color: '#a88118', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'underline', padding: '4px' }}
              >
                Ver detalhes e vivência completa
              </button>
            </div>
          </motion.div>

          {/* 3. BLACK (CARBONO LUXO - ÁPICE DA EXCLUSIVIDADE) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: '0 30px 65px rgba(13,21,39,0.45)' }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{
              background: 'linear-gradient(145deg, #0d1527 0%, #16223e 100%)',
              color: '#ffffff',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '24px',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 50px rgba(13, 21, 39, 0.3)',
              position: 'relative'
            }}
          >
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem', marginBottom: '1.8rem' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#f7df8b', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
                <Crown size={14} color="#f7df8b" /> 12 Meses • Exclusividade Total
              </span>
              <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px', lineHeight: 1.2 }}>
                BioARch Black
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.5 }}>
                O ápice da longevidade biológica e acompanhamento concierge para quem busca o máximo da sua máquina humana.
              </p>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '14px', flexGrow: 1 }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.92rem', color: '#cbd5e1' }}>
                <Check size={18} color="#f7df8b" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span><strong>12 Meses de Blindagem Metabólica</strong> (12 consultas completas)</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.92rem', color: '#f7df8b' }}>
                <Check size={18} color="#f7df8b" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span><strong>12 Bioimpedâncias de Precisão</strong> com histórico evolutivo no app</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.92rem', color: '#f7df8b' }}>
                <Check size={18} color="#f7df8b" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Prioridade máxima de agenda e suporte concierge direto</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.92rem', color: '#f7df8b' }}>
                <Check size={18} color="#f7df8b" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Foco em longevidade ativa, performance cognitiva e disposição</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.92rem', color: '#f7df8b' }}>
                <Check size={18} color="#f7df8b" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Mapeamento hormonal completo durante as 4 estações do ano</span>
              </li>
            </ul>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a 
                href={getPlanWhatsAppLink("Black")}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ 
                  width: '100%', 
                  padding: '0.95rem', 
                  fontSize: '0.92rem', 
                  fontWeight: 700, 
                  borderRadius: '40px', 
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #f7df8b 0%, #d4af37 100%)',
                  color: '#0d1527',
                  border: 'none',
                  boxShadow: '0 6px 20px rgba(212,175,55,0.3)'
                }}
              >
                Candidatar-se ao Black
              </a>
              <button 
                onClick={() => setActiveModal('black')} 
                style={{ background: 'none', border: 'none', color: '#f7df8b', fontSize: '0.8rem', cursor: 'pointer', textDecoration: 'underline', padding: '4px' }}
              >
                Ver detalhes exclusivos
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* MODAL DETALHADO DO PLANO */}
      <AnimatePresence>
        {activeModal && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(13, 21, 39, 0.8)',
              backdropFilter: 'blur(8px)',
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div 
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                maxWidth: '650px',
                width: '100%',
                padding: '2.5rem',
                position: 'relative',
                boxShadow: '0 25px 60px rgba(0,0,0,0.35)',
                border: '1px solid rgba(212,175,55,0.4)',
                maxHeight: '90vh',
                overflowY: 'auto'
              }}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
            >
              <button 
                onClick={() => setActiveModal(null)}
                style={{ position: 'absolute', top: '20px', right: '20px', background: '#f1f5f9', border: 'none', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}
              >
                <X size={18} />
              </button>

              <span style={{ color: '#a88118', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.78rem', display: 'block', marginBottom: '6px' }}>
                Experiência Clínica
              </span>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--title-marinho)', marginBottom: '1.5rem', fontWeight: 800 }}>
                {modalData[activeModal].title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
                <div style={{ background: '#f8fafc', padding: '1.2rem', borderRadius: '16px', borderLeft: '4px solid #d4af37' }}>
                  <h4 style={{ color: '#1e293b', fontSize: '1rem', marginBottom: '6px', fontWeight: 700 }}>Foco Clínico:</h4>
                  <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>{modalData[activeModal].foco}</p>
                </div>

                <div style={{ background: '#f8fafc', padding: '1.2rem', borderRadius: '16px', borderLeft: '4px solid var(--title-marinho)' }}>
                  <h4 style={{ color: '#1e293b', fontSize: '1rem', marginBottom: '6px', fontWeight: 700 }}>A Vivência:</h4>
                  <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>{modalData[activeModal].vivencia}</p>
                </div>

                <div style={{ background: '#fbf9f4', padding: '1.2rem', borderRadius: '16px', borderLeft: '4px solid #b8860b' }}>
                  <h4 style={{ color: '#1e293b', fontSize: '1rem', marginBottom: '6px', fontWeight: 700 }}>Diferencial Tecnológico:</h4>
                  <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>{modalData[activeModal].diferencial}</p>
                </div>
              </div>

              <a 
                href={getPlanWhatsAppLink(modalData[activeModal].whatsappPlan)}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ width: '100%', padding: '1rem', fontWeight: 700, borderRadius: '40px', textAlign: 'center', background: 'linear-gradient(135deg, #1D2951 0%, #0d1527 100%)', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
              >
                Quero dar o próximo passo neste programa
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
