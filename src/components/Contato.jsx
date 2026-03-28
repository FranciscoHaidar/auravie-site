import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../supabase';
import { Send, Phone, Calendar as CalendarIcon, Clock, ChevronRight, CheckCircle2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Contato = ({ siteConfig }) => {
  const [formData, setFormData] = useState({ nome: '', whatsapp: '' });
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Dinâmica Global: 
  // 'agenda_horarios' é um JSON configurável direto no Supabase. Exemplo de valor na Tabela:
  // {"1": ["09:00", "14:00"], "3": ["15:00"], "6": ["08:00"]} (Dias: 1=Seg..6=Sab, 0=Dom)
  const agendaData = siteConfig?.agenda_horarios || null;
  const useFallback = !agendaData || Object.keys(agendaData).length === 0;

  const getNextAvailableDays = () => {
    const days = [];
    let d = new Date();
    let lookAheadCount = 0;
    while (days.length < 5 && lookAheadCount < 30) {
      d.setDate(d.getDate() + 1);
      const dayOfWeek = d.getDay(); 
      // Ignora domingo por padrão se usar fallback
      if (useFallback) {
         if (dayOfWeek !== 0) days.push(new Date(d));
      } else {
         const dayKey = dayOfWeek.toString();
         if (agendaData[dayKey] && agendaData[dayKey].length > 0) {
            days.push(new Date(d));
         }
      }
      lookAheadCount++;
    }
    return days;
  };

  // Avalia as datas disponíveis na inicialização do componente
  const [availableDays] = useState(getNextAvailableDays());
  const fallbackTimes = ['09:30', '11:00', '14:30', '16:00', '17:30'];

  const getTimesForDate = (date) => {
     if (!date) return [];
     if (!useFallback) {
         const dayKey = date.getDay().toString();
         return agendaData[dayKey] || [];
     }
     return fallbackTimes;
  };

  const formatPhone = (val) => {
    let v = val.replace(/\D/g, '');
    if (v.length > 11) v = v.substring(0, 11);
    if (!v) return '';
    if (v.length <= 2) return `(${v}`;
    if (v.length <= 3) return `(${v.substring(0,2)}) ${v.substring(2)}`;
    if (v.length <= 7) return `(${v.substring(0,2)}) ${v.substring(2,3)} ${v.substring(3)}`;
    return `(${v.substring(0,2)}) ${v.substring(2,3)} ${v.substring(3,7)}-${v.substring(7,11)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const dbInsert = { nome: formData.nome, whatsapp: formData.whatsapp };
      if (selectedDate && selectedTime) {
         dbInsert.whatsapp += ` | AGENDA VIP: ${selectedDate.toLocaleDateString('pt-BR')} às ${selectedTime}h`;
      }
      const { error } = await supabase.from('site_leads').insert([dbInsert]);

      if (error) throw error;
      
      let finalMsg = `Olá Concierge! Me chamo ${formData.nome}. `;
      if (selectedDate && selectedTime) {
         finalMsg += `Vi pela Agenda VIP do App que há uma vaga hoje/amanhã na data *${selectedDate.toLocaleDateString('pt-BR')} às ${selectedTime}h* e gostaria de travar essa avaliação BioARch no meu nome. Como podemos seguir?`;
      } else {
         finalMsg += `Gostaria de agendar uma avaliação e traçar meu protocolo na AuraVie!`;
      }
      
      const zapLink = `https://wa.me/5551997353309?text=${encodeURIComponent(finalMsg)}`;
      window.open(zapLink, '_blank');

      setFormData({ nome: '', whatsapp: '' });
      setSelectedDate(null);
      setSelectedTime(null);
    } catch (err) {
      console.error(err);
      toast.error('Erro de conexão. Por favor, tente pelo ícone de WhatsApp flutuante.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" style={{ backgroundColor: '#1D2951', padding: '100px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '40px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)', 
              borderRadius: '24px', 
              padding: 'clamp(20px, 5vw, 40px)', 
              backdropFilter: 'blur(10px)', 
              border: '1px solid rgba(229, 211, 179, 0.2)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.2)'
           }}
        >
          {/* Lado Esquerdo - CTA e Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
             <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#E5D3B3', marginBottom: '16px', lineHeight: 1.1 }}>
                  Acesso Direto à Agenda
                </h2>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                  AuraVie Concept opera sob rigorosa lotação de agenda VIP. Selecione seu horário de interesse na agenda para solicitar o bloqueio oficial com o concierge.
                </p>
             </div>
             
             <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
               <div>
                  <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '8px', fontWeight: '500' }}>Paciente (Nome Completo)</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Ana Silva"
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
                      outline: 'none',
                      transition: 'border 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#D4AF37'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                  />
               </div>
               <div>
                  <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '8px', fontWeight: '500' }}>WhatsApp com DDD</label>
                  <div style={{ position: 'relative' }}>
                    <Phone style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255, 255, 255, 0.5)' }} size={20} />
                    <input
                      type="tel"
                      required
                      placeholder="(11) 9 9999-9999"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: formatPhone(e.target.value) })}
                      maxLength="16"
                      minLength="16"
                      style={{
                        width: '100%',
                        backgroundColor: formData.whatsapp.length === 16 ? 'rgba(74, 222, 128, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid',
                        borderColor: formData.whatsapp.length === 16 ? '#4ade80' : (formData.whatsapp.length > 0 ? '#fbbf24' : 'rgba(255, 255, 255, 0.2)'),
                        borderRadius: '12px',
                        padding: '14px 18px 14px 45px',
                        color: '#fff',
                        fontSize: '1.05rem',
                        outline: 'none',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>
               </div>
               <button
                  type="submit"
                  disabled={loading || (selectedDate && !selectedTime)}
                  style={{
                    backgroundColor: (selectedDate && !selectedTime) ? '#cbd5e1' : '#D4AF37',
                    color: '#1D2951',
                    fontWeight: '800',
                    padding: '18px',
                    borderRadius: '12px',
                    marginTop: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    border: 'none',
                    cursor: loading || (selectedDate && !selectedTime) ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.7 : 1,
                    fontSize: '1.15rem',
                    transition: 'all 0.3s',
                    boxShadow: '0 8px 25px rgba(212,175,55,0.3)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                  onMouseOver={(e) => (!loading && !(selectedDate && !selectedTime)) && (e.target.style.transform = 'translateY(-3px)')}
                  onMouseOut={(e) => (!loading && !(selectedDate && !selectedTime)) && (e.target.style.transform = 'translateY(0)')}
                >
                  {loading ? 'Redirecionando VIP...' : 'Travar Meu Horário Agora'}
                </button>
             </form>
          </div>

          {/* Lado Direito - Calendário Interativo Glassmorphism */}
          <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '16px', padding: 'clamp(15px, 4vw, 25px)', border: '1px solid rgba(255,255,255,0.08)' }}>
             <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                 <CalendarIcon size={22} color="#D4AF37"/> Escolha o Melhor Dia
             </h3>
             
             {availableDays.length === 0 ? (
                <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', textAlign: 'center', color: '#fff' }}>
                  A agenda direta encontra-se fechada ou sem janelas esta semana. Por favor, envie seus dados à esquerda para entrar na fila de espera com o Concierge.
                </div>
             ) : (
                 <div style={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'auto', gap: '10px', marginBottom: '30px', paddingBottom: '5px', WebkitOverflowScrolling: 'touch' }}>
                    {availableDays.map((date, i) => {
                       const isSelected = selectedDate && selectedDate.toDateString() === date.toDateString();
                       const dayLabel = date.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', '').substring(0,3);
                       const numLabel = date.getDate();
                       return (
                         <button
                            key={i}
                            type="button"
                            onClick={() => { setSelectedDate(date); setSelectedTime(null); }}
                            style={{
                               flexShrink: 0,
                               minWidth: '65px',
                               padding: '12px 5px',
                               borderRadius: '12px',
                               background: isSelected ? '#D4AF37' : 'rgba(255,255,255,0.05)',
                               border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255,255,255,0.1)'}`,
                               display: 'flex',
                               flexDirection: 'column',
                               alignItems: 'center',
                               cursor: 'pointer',
                               color: isSelected ? '#1B2745' : '#fff',
                               transition: 'all 0.2s',
                               boxShadow: isSelected ? '0 4px 15px rgba(212,175,55,0.4)' : 'none'
                            }}
                         >
                           <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600, opacity: isSelected ? 0.9 : 0.6 }}>{dayLabel}</span>
                           <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>{numLabel}</span>
                         </button>
                       );
                    })}
                 </div>
             )}

             <AnimatePresence>
             {selectedDate && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                    <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                       <Clock size={20} color="#D4AF37"/> Janelas Livres ({selectedDate.toLocaleDateString('pt-BR', { weekday: 'long' })})
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))', gap: '10px' }}>
                       {getTimesForDate(selectedDate).map((time, j) => {
                           // Lógica de sorteio para omitir horas em modo Fallback (Simulação Aleatória de lotação)
                           if (useFallback) {
                               if ((selectedDate.getDate() % 2 === 0 && j === 1) || (selectedDate.getDate() % 3 === 0 && j === 3)) return null;
                           }
                           
                           const isSelTime = selectedTime === time;
                           return (
                             <button
                               key={j}
                               type="button"
                               onClick={() => setSelectedTime(time)}
                               style={{
                                  padding: '10px',
                                  borderRadius: '10px',
                                  background: isSelTime ? '#4ade80' : 'rgba(255,255,255,0.05)',
                                  border: `1px solid ${isSelTime ? '#4ade80' : 'rgba(255,255,255,0.1)'}`,
                                  color: isSelTime ? '#064e3b' : '#fff',
                                  fontWeight: 700,
                                  cursor: 'pointer',
                                  transition: 'all 0.2s'
                               }}
                             >
                               {time}
                             </button>
                           )
                       })}
                    </div>
                    {selectedTime && (
                       <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: '20px', padding: '15px', background: 'rgba(74, 222, 128, 0.1)', border: '1px dashed #4ade80', borderRadius: '12px', color: '#4ade80', fontSize: '0.9rem', display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <CheckCircle2 size={30} />
                          <div>
                            <strong>Horário Selecionado!</strong> Não esqueça de apertar o botão dourado ao lado para aprovar.
                          </div>
                       </motion.div>
                    )}
                </motion.div>
             )}
             </AnimatePresence>
             {!selectedDate && availableDays.length > 0 && (
                 <div style={{ padding: '30px', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', border: '1px dashed rgba(255,255,255,0.2)', borderRadius: '12px' }}>
                    <div style={{ marginBottom: '10px' }}><CalendarIcon size={32} opacity={0.5} style={{ margin: '0 auto'}}/></div>
                    Toque numa data acima para escanear a agenda médica real.
                 </div>
             )}
          </div>
        </motion.div>
      </div>
      <Toaster position="bottom-center" />
    </section>
  );
};

export default Contato;
