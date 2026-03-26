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
    const handleMouseLeave = (e) => {
      // Dispara apenas se o mouse sair da tela em direção ao topo (fechar aba)
      // e se o popup não tiver sido aberto nesta sessão
      if (e.clientY <= 0 && !sessionStorage.getItem('exitIntentShown')) {
        setIsVisible(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
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
      toast.error('Erro ao enviar dados. Por favor, clique no botão flutuante de WhatsApp.');
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
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        onClick={() => setIsVisible(false)}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-marinho w-full max-w-lg rounded-2xl p-8 relative border border-dourado/30 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          {!submitted ? (
            <>
              <h3 className="text-3xl font-bold text-dourado mb-4 title-font leading-tight text-center">
                Ainda com dúvidas?
              </h3>
              <p className="text-white/80 mb-6 text-center text-lg">
                Não vá ainda! Deixe seu contato e nosso concierge tira todas as suas dúvidas sobre o método BioARch na hora.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-dourado transition-colors"
                    placeholder="Seu Nome Completo"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                  <input
                    type="tel"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-dourado transition-colors"
                    placeholder="WhatsApp com DDD"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-dourado text-marinho font-bold py-4 rounded-xl mt-2 flex items-center justify-center gap-2 hover:bg-white transition-colors disabled:opacity-50 text-lg"
                >
                  {loading ? 'Aguarde um momento...' : (
                    <>
                      <Send size={20} /> Quero que me chamem
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 mx-auto flex items-center justify-center mb-4">
                <Send size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Tudo certo!</h3>
              <p className="text-white/70">Nossa equipe já recebeu e vai te chamar em minutos.</p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
