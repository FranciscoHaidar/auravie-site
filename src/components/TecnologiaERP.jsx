import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Smartphone, TrendingUp, Calendar, ArrowRight } from 'lucide-react';

export function TecnologiaERP({ onOpenPortal }) {
  return (
    <section id="tecnologia-erp" style={{ padding: '6rem 20px', backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '28px',
          padding: 'clamp(2rem, 5vw, 3.5rem)',
          boxShadow: '0 20px 50px rgba(13, 21, 39, 0.06)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          
          {/* Lado Esquerdo: Texto e Vantagens */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span style={{ color: '#a88118', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.82rem', display: 'block', marginBottom: '8px' }}>
              Tecnologia Exclusiva AuraVie
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.7rem)', color: 'var(--title-marinho)', lineHeight: 1.15, marginBottom: '1.2rem', fontWeight: 800 }}>
              Seu tratamento conectado ao nosso ecossistema inteligente.
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.8rem' }}>
              Ao se tornar paciente da clínica, você não recebe apenas receitas de papel. Você tem acesso à sua <strong>área restrita no Portal do Paciente</strong>, conectada diretamente ao <strong>AuraVie ERP</strong>:
            </p>

            <div style={{ display: 'grid', gap: '14px', marginBottom: '2.2rem' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#1e293b', fontWeight: 600, fontSize: '0.98rem' }}>
                <TrendingUp size={20} color="#d4af37" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>Extrato evolutivo das suas bioimpedâncias com gráficos reais de massa magra e gordura visceral</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#1e293b', fontWeight: 600, fontSize: '0.98rem' }}>
                <Smartphone size={20} color="#d4af37" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>Prescrições médicas, laudos e rotinas de suplementação salvas no seu celular</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#1e293b', fontWeight: 600, fontSize: '0.98rem' }}>
                <Calendar size={20} color="#d4af37" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>Agendamento inteligente sincronizado em tempo real com a agenda do médico</span>
              </div>
            </div>

            <button
              onClick={onOpenPortal}
              className="btn btn-primary"
              style={{
                padding: '0.95rem 1.8rem',
                fontSize: '0.95rem',
                fontWeight: 700,
                borderRadius: '40px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 10px 25px rgba(29, 41, 81, 0.3)'
              }}
            >
              <ShieldCheck size={18} />
              Acessar Portal do Paciente
              <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Lado Direito: Gráfico e Simulação Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: '#0d1527',
              borderRadius: '22px',
              padding: '28px',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              color: '#ffffff',
              boxShadow: '0 25px 60px rgba(13, 21, 39, 0.35)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '14px', marginBottom: '18px', fontSize: '0.85rem' }}>
              <span><strong>AuraVie Health Portal</strong> • Prontuário VIP</span>
              <span style={{ color: '#4ade80', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
                ● Conectado ao ERP
              </span>
            </div>

            {/* Métrica 1 */}
            <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '14px', padding: '16px', marginBottom: '14px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                <span style={{ color: '#cbd5e1' }}>Gordura Visceral (Nível)</span>
                <strong style={{ color: '#f7df8b' }}>Nível 4 (Otimizado)</strong>
              </div>
              <div style={{ height: '8px', background: '#334155', borderRadius: '4px', overflow: 'hidden', marginTop: '10px' }}>
                <div style={{ height: '100%', width: '38%', background: 'linear-gradient(90deg, #d4af37, #4ade80)' }}></div>
              </div>
            </div>

            {/* Métrica 2 */}
            <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '14px', padding: '16px', marginBottom: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                <span style={{ color: '#cbd5e1' }}>Massa Muscular Preservada</span>
                <strong style={{ color: '#4ade80' }}>+3.2 kg (98.4%)</strong>
              </div>
              <div style={{ height: '8px', background: '#334155', borderRadius: '4px', overflow: 'hidden', marginTop: '10px' }}>
                <div style={{ height: '100%', width: '92%', background: 'linear-gradient(90deg, #d4af37, #4ade80)' }}></div>
              </div>
            </div>

            <div style={{
              background: 'rgba(212,175,55,0.08)',
              border: '1px dashed rgba(212,175,55,0.35)',
              borderRadius: '14px',
              padding: '14px',
              textAlign: 'center',
              fontSize: '0.84rem',
              color: '#e2e8f0'
            }}>
              📅 Próxima reavaliação com Dr. Francisco Haidar: <strong>Sincronizada</strong>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
