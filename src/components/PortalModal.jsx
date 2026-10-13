import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X, ArrowRight, MessageCircle, FileText } from 'lucide-react';

export function PortalModal({ isOpen, onClose }) {
  const [cpf, setCpf] = useState('');

  if (!isOpen) return null;

  const handleCpfChange = (e) => {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length > 11) v = v.substring(0, 11);
    if (v.length > 9) {
      v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    } else if (v.length > 6) {
      v = v.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else if (v.length > 3) {
      v = v.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    }
    setCpf(v);
  };

  const handleAccess = (e) => {
    e.preventDefault();
    const cleanCpf = cpf.replace(/\D/g, '');
    if (cleanCpf.length === 11) {
      window.open(`https://auravie-erp.vercel.app/meu-extrato/${cleanCpf}`, '_blank');
      onClose();
    } else {
      window.open('https://auravie-erp.vercel.app/meu-extrato', '_blank');
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(13, 21, 39, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            maxWidth: '520px',
            width: '100%',
            padding: '36px',
            position: 'relative',
            boxShadow: '0 25px 60px rgba(13, 21, 39, 0.35)',
            border: '1px solid rgba(212, 175, 55, 0.3)'
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: '#f1f5f9',
              border: 'none',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#475569'
            }}
          >
            <X size={18} />
          </button>

          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{
              width: '56px',
              height: '56px',
              backgroundColor: '#16223e',
              border: '1px solid #d4af37',
              borderRadius: '16px',
              color: '#d4af37',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 14px'
            }}>
              <ShieldCheck size={28} />
            </div>
            <h3 style={{ fontSize: '1.6rem', color: '#0d1527', fontWeight: 800, marginBottom: '6px' }}>
              Portal do Paciente
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.5 }}>
              Acesse seus exames, bioimpedâncias, prescrições e histórico clínico sincronizados em tempo real com o <strong>AuraVie ERP</strong>.
            </p>
          </div>

          <form onSubmit={handleAccess} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                CPF do Paciente
              </label>
              <input
                type="text"
                placeholder="000.000.000-00"
                value={cpf}
                onChange={handleCpfChange}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  border: '1px solid #cbd5e1',
                  fontSize: '1.05rem',
                  outline: 'none',
                  letterSpacing: '0.5px'
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '14px',
                fontWeight: 700,
                fontSize: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <FileText size={18} />
              Acessar Meu Prontuário Digital
              <ArrowRight size={16} />
            </button>
          </form>

          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '16px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '10px' }}>
              Primeiro acesso ou precisa de ajuda com seu login?
            </p>
            <a
              href="https://wa.me/5551997353309?text=Ol%C3%A1%2C+sou+paciente+da+AuraVie+e+gostaria+de+ajuda+para+acessar+meu+Portal+do+Paciente."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#005f6a',
                fontWeight: 600,
                fontSize: '0.85rem',
                textDecoration: 'none'
              }}
            >
              <MessageCircle size={16} />
              Falar com o Concierge no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
