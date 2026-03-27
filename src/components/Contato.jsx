import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabase';
import { Send, Phone } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Contato = () => {
  const [formData, setFormData] = useState({ nome: '', whatsapp: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { error } = await supabase
        .from('site_leads')
        .insert([{ nome: formData.nome, whatsapp: formData.whatsapp }]);

      if (error) throw error;
      
      toast.success('Recebemos seu contato! Um concierge médico te chamará no WhatsApp em breve.', { duration: 6000 });
      setFormData({ nome: '', whatsapp: '' });
    } catch (err) {
      console.error(err);
      toast.error('Erro ao enviar mensagem. Por favor, utilize o botão do WhatsApp flutuante.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" style={{ backgroundColor: '#1D2951', padding: '80px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#E5D3B3', marginBottom: '20px' }}>
            Dê o Primeiro Passo
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Deixe seu nome e WhatsApp. Nossa equipe de concierge entrará em contato para agendar sua avaliação e formatar um plano exclusivo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.05)', 
            borderRadius: '20px', 
            padding: '40px', 
            backdropFilter: 'blur(10px)', 
            border: '1px solid rgba(229, 211, 179, 0.2)' 
          }}
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '8px', fontWeight: '500' }}>Seu Nome Completo</label>
              <input
                type="text"
                required
                placeholder="Ex: João da Silva"
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
            <div>
              <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '8px', fontWeight: '500' }}>WhatsApp com DDD</label>
              <div style={{ position: 'relative' }}>
                <Phone style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255, 255, 255, 0.5)' }} size={20} />
                <input
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
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
                marginTop: '15px',
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
              {loading ? 'Enviando sua solicitação...' : (
                <>
                  <Send size={24} /> Solicitar Contato da Clínica
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
      <Toaster position="bottom-center" />
    </section>
  );
};

export default Contato;
