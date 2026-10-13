import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Activity, Microscope, Pill, Smartphone, Check, MessageCircle } from 'lucide-react';

export function Jornada() {
  const steps = [
    { 
      num: "01", 
      title: "Anamnese Detalhada", 
      subtitle: "Tempo e Escuta Médica",
      text: "Uma conversa aprofundada (sem pressa) para investigar seu histórico, sono, digestão, nível de estresse, padrão de rotina e queixas principais.",
      icon: ClipboardList
    },
    { 
      num: "02", 
      title: "Bioimpedância Clínica", 
      subtitle: "Composição Corporal",
      text: "Leitura de precisão no consultório: peso exato de massa muscular, gordura visceral, retenção de água e taxa metabólica basal.",
      icon: Activity
    },
    { 
      num: "03", 
      title: "Check-up Laboratorial", 
      subtitle: "Mapeamento Metabólico",
      text: "Solicitação e leitura minuciosa de exames de sangue, analisando marcadores hormonais, carências de vitaminas, minerais e inflamação crônica.",
      icon: Microscope
    },
    { 
      num: "04", 
      title: "Protocolo BioARch", 
      subtitle: "Estratégia Sob Medida",
      text: "Plano terapêutico personalizado com alimentação adaptada ao seu dia a dia, suplementação de precisão e, quando indicado, terapias injetáveis.",
      icon: Pill
    },
    { 
      num: "05", 
      title: "Acesso ao Portal Digital", 
      subtitle: "Tecnologia & Evolução",
      text: "Você recebe acesso ao aplicativo exclusivo AuraVie para acompanhar seus gráficos comparativos de bioimpedância, receitas e falar com a clínica.",
      icon: Smartphone
    }
  ];

  return (
    <section id="primeira-consulta" style={{ padding: '5rem 5% 7rem', backgroundColor: '#ffffff', position: 'relative' }}>
      {/* Âncora invisível para quem clica em #jornada */}
      <span id="jornada" style={{ position: 'absolute', top: '-80px', left: 0 }} />

      <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div 
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span style={{ color: '#a88118', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.82rem', display: 'block', marginBottom: '8px' }}>
            Transparência Médica
          </span>
          <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3rem)', color: 'var(--title-marinho)', marginBottom: '1rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
            Como funciona a sua primeira consulta na AuraVie?
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '780px', margin: '0 auto', lineHeight: 1.6 }}>
            Abandonamos consultas rápidas de 15 minutos para entregar uma investigação médica completa, acolhedora e hiperpersonalizada com o Dr. Francisco Haidar.
          </p>
        </motion.div>

        {/* 5 PASSOS DA PRIMEIRA CONSULTA */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.5rem', alignItems: 'stretch', marginBottom: '4rem' }}>
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -8, borderColor: 'rgba(212,175,55,0.4)', boxShadow: '0 20px 40px rgba(29,41,81,0.08)' }}
              style={{
                backgroundColor: '#fbfbfd',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                padding: '2rem 1.4rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                backgroundColor: 'var(--title-marinho)',
                color: '#D4AF37',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '1.15rem',
                marginBottom: '1.2rem',
                border: '1px solid rgba(212,175,55,0.3)'
              }}>
                {step.num}
              </div>

              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#a88118', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                {step.subtitle}
              </span>
              <h3 style={{ color: 'var(--title-marinho)', fontSize: '1.25rem', marginBottom: '0.8rem', fontWeight: 700, lineHeight: 1.25 }}>
                {step.title}
              </h3>
              <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6, flexGrow: 1 }}>
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BANNER DE REEMBOLSO PELO PLANO DE SAÚDE */}
        <motion.div 
          id="reembolso"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, #0d1527 0%, #16223e 100%)',
            borderRadius: '24px',
            padding: 'clamp(2rem, 5vw, 3rem)',
            color: '#ffffff',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            boxShadow: '0 25px 60px rgba(13, 21, 39, 0.25)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          <div>
            <span style={{ color: '#f7df8b', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
              Atendimento Dedicado & Reembolso
            </span>
            <h3 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', color: '#ffffff', marginBottom: '1rem', fontWeight: 800, lineHeight: 1.2 }}>
              Consulta Particular com <span style={{ color: '#f7df8b' }}>Reembolso pelo seu Convênio</span>
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '1.02rem', lineHeight: 1.65, marginBottom: '1.4rem' }}>
              Para garantir consultas de <strong>mais de 1 hora</strong> com anamnese aprofundada e bioimpedância inclusa sem a correria dos convênios, a AuraVie opera em modelo particular. Fornecemos <strong>recibo e laudo médico detalhado</strong> para você solicitar o reembolso parcial ou total junto ao seu plano de saúde:
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Unimed', 'Bradesco Saúde', 'SulAmérica', 'Cassi', 'Amil', 'IPE Saúde (conforme plano)'].map((convenio) => (
                <span 
                  key={convenio}
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#f1f5f9',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Check size={13} color="#f7df8b" strokeWidth={3} />
                  {convenio}
                </span>
              ))}
            </div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(229, 211, 179, 0.25)',
            borderRadius: '20px',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <h4 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '8px', fontWeight: 700 }}>
              Dúvidas sobre o reembolso?
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              Nosso concierge auxilia você com todas as informações e documentações para facilitar o pedido junto à sua operadora de saúde.
            </p>
            <a 
              href="https://wa.me/5551997353309?text=Ol%C3%A1%2C+gostaria+de+saber+como+funciona+o+reembolso+do+meu+plano+de+sa%C3%BAde+para+a+consulta+na+AuraVie."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '0.9rem',
                fontSize: '0.92rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #d4af37 0%, #b8860b 100%)',
                color: '#0d1527',
                border: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 8px 25px rgba(212,175,55,0.4)'
              }}
            >
              <MessageCircle size={18} />
              Orientação de Reembolso no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
