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
    <section className="bg-marinho py-20" id="contato">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-dourado mb-6 title-font">
            Dê o Primeiro Passo
          </h2>
          <p className="text-white/80 text-lg">
            Deixe seu nome e WhatsApp. Nossa equipe de concierge entrará em contato para agendar sua avaliação e formatar um plano exclusivo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-dourado/20"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block text-white/90 mb-2 font-medium">Seu Nome Completo</label>
              <input
                type="text"
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-dourado transition-colors"
                placeholder="Ex: João da Silva"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-white/90 mb-2 font-medium">WhatsApp com DDD</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                <input
                  type="tel"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-dourado transition-colors"
                  placeholder="(11) 99999-9999"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-dourado text-marinho font-bold py-4 rounded-xl mt-4 flex items-center justify-center gap-2 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
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
