import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Brain, Activity, ArrowRight } from 'lucide-react';

const questions = [
  {
    id: 'libido',
    icon: <Heart size={28} className="text-secondary" style={{ color: '#e11d48' }} />,
    question: "Como você avalia sua disposição e energia para momentos íntimos atualmente?",
    options: [
      { label: "Quase inexistente ou sinto muito cansaço generalizado", score: 0 },
      { label: "Muito inconstante, depende muito da rotina e do estresse", score: 5 },
      { label: "Boa, mas sinto que já tive mais vitalidade antes", score: 8 },
      { label: "Excelente, me sinto com energia e vitalidade plenas", score: 10 }
    ]
  },
  {
    id: 'foco',
    icon: <Brain size={28} className="text-primary" />,
    question: "Você tem sentido dificuldade de concentração, 'névoa mental' (brain fog) ou falhas de memória?",
    options: [
      { label: "Constantemente, esqueço coisas simples e não consigo focar", score: 0 },
      { label: "Sim, especialmente no meio da tarde ou sob pressão", score: 5 },
      { label: "Ocasionalmente, mas no geral consigo manter meu ritmo", score: 8 },
      { label: "Minha clareza e agilidade mental estão no ápice", score: 10 }
    ]
  },
  {
    id: 'composicao',
    icon: <Activity size={28} style={{ color: "var(--gold-champagne)" }} />,
    question: "Como você percebe sua força muscular e recuperação física hoje?",
    options: [
      { label: "Sinto muita fraqueza corporal, flacidez e dores frequentes", score: 0 },
      { label: "Percebo perda de tônus e demoro muito para me recuperar do esforço", score: 5 },
      { label: "Consigo manter minha força, mas exige muito esforço da minha parte", score: 8 },
      { label: "Mantenho minha massa muscular e me recupero rapidamente", score: 10 }
    ]
  }
];

export default function QuizVitalidade({ whatsappNumber }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState({ libido: 0, foco: 0, composicao: 0 });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSelectOption = (questionId, score) => {
    setScores(prev => ({ ...prev, [questionId]: score }));
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Finish quiz
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setShowResult(true);
      }, 1500);
    }
  };

  const calculateDeficit = () => {
    const total = scores.libido + scores.foco + scores.composicao;
    const deficitPercentage = Math.max(10, Math.floor(((30 - total) / 30) * 100));
    return deficitPercentage;
  };

  const getWhatsappLink = () => {
    const deficit = calculateDeficit();
    const text = `Olá! Acabei de fazer o teste de Desgaste Hormonal no site e o resultado indicou que meu corpo e mente podem estar trabalhando com cerca de ${deficit}% a menos da minha capacidade ideal. Gostaria de entender mais como a otimização hormonal do Método BioARch pode me ajudar.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="section" style={{ background: '#f5f7fa', borderTop: '1px solid var(--border-light)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div 
          className="glass-panel"
          style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#ffffff', borderTop: '4px solid #B87333' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {!showResult && !isAnalyzing && (
            <>
              <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '0.5rem', color: '#1e293b' }}>
                Mapeamento de Vitalidade Funcional
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
                Perda de memória, desânimo e flacidez não são "o normal da idade". Descubra o nível do seu desgaste sistêmico.
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                  {questions.map((_, i) => (
                    <div 
                      key={i} 
                      style={{ 
                        height: '6px', 
                        width: '40px', 
                        borderRadius: '3px', 
                        background: i <= currentStep ? 'linear-gradient(90deg, #B87333, var(--gold-champagne))' : '#e2e8f0',
                        transition: 'background 0.3s ease'
                      }} 
                    />
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    style={{ background: '#fefefe', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.2rem' }}>
                      <div style={{ background: 'rgba(184, 115, 51, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                        {questions[currentStep].icon}
                      </div>
                    </div>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--title-marinho)', marginBottom: '2rem', fontWeight: 600, lineHeight: '1.4' }}>
                      {questions[currentStep].question}
                    </h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      {questions[currentStep].options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleSelectOption(questions[currentStep].id, opt.score)}
                          style={{
                            padding: '1.2rem 1rem',
                            textAlign: 'left',
                            background: 'white',
                            border: '1px solid #cbd5e1',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            fontSize: '1rem',
                            color: '#334155',
                            fontWeight: 500
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#B87333'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(184, 115, 51, 0.15)'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.boxShadow = 'none'; }}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </>
          )}

          {isAnalyzing && (
            <div style={{ padding: '5rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="spinner" style={{ borderTopColor: '#B87333', borderLeftColor: 'var(--gold-champagne)', width: '56px', height: '56px', marginBottom: '2rem' }}></div>
              <h3 style={{ fontSize: '1.4rem', color: '#1e293b', fontWeight: 600 }}>Cruzando marcadores de vitalidade...</h3>
              <p style={{ color: '#64748b', marginTop: '0.5rem', fontSize: '1.1rem' }}>Estimando sobrecarga e déficit sistêmico.</p>
            </div>
          )}

          {showResult && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ padding: '2rem 0' }}
            >
               <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ background: 'rgba(184, 115, 51, 0.1)', padding: '2rem', borderRadius: '50%' }}>
                     <Brain size={56} style={{ color: '#B87333' }} />
                  </div>
               </div>
               
               <h3 style={{ fontSize: '2rem', color: '#1e293b', marginBottom: '1rem', fontWeight: 700 }}>
                 Análise Finalizada
               </h3>
               
               <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '2.5rem', marginBottom: '2.5rem', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)' }}>
                 <p style={{ fontSize: '1.2rem', color: '#334155', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                   Baseado em seus relatos de disposição, foco e força física, estimamos que seu corpo pode estar operando com <strong style={{color: '#e11d48', fontSize: '1.4rem'}}>{calculateDeficit()}% a menos</strong> da capacidade funcional ideal.
                 </p>
                 <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.5' }}>
                   Esse desgaste geralmente está associado a uma <strong>sinalização inadequada nas vias neuro-hormonais</strong>. A boa notícia é que esse cenário é perfeitamente mapeável e reversível quando tratado com o rigor clínico adequado.
                 </p>
               </div>

               <a 
                 href={getWhatsappLink()} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="btn btn-primary"
                 style={{ fontSize: '1.1rem', padding: '1.2rem 2.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', borderRadius: '50px', background: 'linear-gradient(135deg, #1e293b, var(--title-marinho))', border: 'none', boxShadow: '0 10px 25px -5px rgba(30, 41, 59, 0.4)' }}
               >
                 AGENDE SUA AVALIAÇÃO AGORA <ArrowRight size={20} />
               </a>
            </motion.div>
          )}

        </motion.div>

        <div style={{ marginTop: '3rem', textAlign: 'center', padding: '0 1.5rem' }}>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
            <strong style={{ color: '#64748b' }}>Aviso Médico (CFM):</strong> Esta ferramenta digital não possui validade de diagnóstico clínico. O objetivo é puramente educativo para ilustrar o impacto do declínio sistêmico no bem-estar cotidiano.
          </p>
        </div>
      </div>
    </section>
  );
}
