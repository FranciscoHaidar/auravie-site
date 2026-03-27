import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../supabase';
import { Send, Phone, X } from 'lucide-react';
import toast from 'react-hot-toast';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ nome: '', whatsapp: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseOut = (e) => {
      // Se o mouse sair pelo topo (clientY menor que 50px)
      // Usaremos mouseout no document e checaremos relatedTarget
      if (e.clientY < 50 || (e.relatedTarget === null && e.clientY < 100)) {
        setIsVisible(true);
        // Removido o sessionStorage temporariamente para facilitar os testes infinitos
      }
    };

    document.addEventListener('mouseout', handleMouseOut);
    
    return () => {
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { error } = await supabase
        .from('site_leads')
        .insert([{ nome: formData.nome, whatsapp: formData.whatsapp }]);

      if (error) throw error;
      
      setSubmitted(true);
      toast.success('Pronto! Em breve nossa equipe entrará em contato.', { duration: 5000 });
      setTimeout(() => setIsVisible(false), 3000);
    } catch (err) {
      console.error(err);
      toast.error('Erro ao enviar dados. Por favor, utilize o botão do WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(5px)',
          padding: '20px'
        }}
        onClick={() => setIsVisible(false)}
      >
        <motion.div
          initial={{ scale: 0.8, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 30 }}
          style={{
            backgroundColor: '#1D2951', // var(--title-marinho)
            width: '100%',
            maxWidth: '500px',
            borderRadius: '20px',
            padding: '40px 30px',
            position: 'relative',
            border: '1px solid rgba(229, 211, 179, 0.3)', // dourado
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            color: '#fff'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={() => setIsVisible(false)}
            style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              background: 'transparent',
              border: 'none',
              color: 'rgba(255, 255, 255, 0.6)',
              cursor: 'pointer'
            }}
          >
            <X size={24} />
          </button>

          {!submitted ? (
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                color: '#D4AF37', // var(--gold-bronze)
                marginBottom: '10px',
                lineHeight: 1.2
              }}>
                Ainda com dúvidas?
              </h3>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                marginBottom: '25px', 
                fontSize: '1.1rem' 
              }}>
                Não vá ainda! Deixe seu contato e nosso concierge tira todas as suas dúvidas sobre o método BioARch na hora.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Seu Nome Completo"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '12px',
                      padding: '14px 18px',
                      color: '#fff',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>
                <div style={{ position: 'relative' }}>
                  <Phone style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255, 255, 255, 0.5)' }} size={20} />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp com DDD"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '12px',
                      padding: '14px 18px 14px 45px',
                      color: '#fff',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    backgroundColor: '#D4AF37',
                    color: '#1D2951',
                    fontWeight: '700',
                    padding: '16px',
                    borderRadius: '12px',
                    marginTop: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    border: 'none',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.7 : 1,
                    fontSize: '1.1rem',
                    transition: 'background 0.3s'
                  }}
                >
                  {loading ? 'Aguarde um momento...' : (
                    <>
                      <Send size={20} /> Quero que me chamem
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '30px 0' }}>
              <div style={{ 
                width: '70px', height: '70px', borderRadius: '50%', 
                backgroundColor: 'rgba(74, 222, 128, 0.2)', 
                color: '#4ade80', 
                margin: '0 auto 20px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center' 
              }}>
                <Send size={35} />
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fff', marginBottom: '10px' }}>Tudo certo!</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem' }}>
                Nossa equipe já recebeu e vai te chamar em minutos.
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
