import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Moon, Apple, ArrowRight, CheckCircle } from 'lucide-react';

const questions = [
  {
    id: 'energy',
    icon: <Activity size={28} className="text-secondary" />,
    question: "Como você avalia seu nível de energia e disposição ao longo do dia?",
    options: [
      { label: "Acordo cansado(a) e preciso de café para funcionar", score: 0 },
      { label: "Tenho picos e quedas bruscas à tarde", score: 5 },
      { label: "Energia estável, mas sinto que poderia render mais", score: 8 },
      { label: "Excelente, acordo pronto(a) para qualquer desafio", score: 10 }
    ]
  },
  {
    id: 'sleep',
    icon: <Moon size={28} className="text-primary" />,
    question: "Como é a qualidade do seu sono profundo?",
    options: [
      { label: "Insônia frequente ou acordo várias vezes à noite", score: 0 },
      { label: "Durmo, mas acordo sentindo que não descansei", score: 5 },
      { label: "Durmo bem na maioria das noites", score: 8 },
      { label: "Sono reparador absoluto, durmo e acordo nos mesmos horários", score: 10 }
    ]
  },
  {
    id: 'metabolism',
    icon: <Apple size={28} style={{ color: "var(--gold-champagne)" }} />,
    question: "Como seu corpo responde à alimentação e exercícios fisicos hoje?",
    options: [
      { label: "Ganho peso fácil e não tenho resultados na academia", score: 0 },
      { label: "Digestiono mal alguns alimentos e incho com facilidade", score: 5 },
      { label: "Tenho resultados, mas lentos demais para o meu esforço", score: 8 },
      { label: "Metabolismo acelerado, mantenho o percentual de gordura baixo", score: 10 }
    ]
  }
];

export default function QuizBioARch({ whatsappNumber }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState({ energy: 0, sleep: 0, metabolism: 0 });
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
    const total = scores.energy + scores.sleep + scores.metabolism;
    // max is 30. Deficit is how much they are losing.
    const deficitPercentage = Math.max(10, Math.floor(((30 - total) / 30) * 100));
    return deficitPercentage;
  };

  const getWhatsappLink = () => {
    const deficit = calculateDeficit();
    const text = `Olá! Acabei de fazer o mapeamento metabólico interativo no site e a análise apontou que estou perdendo cerca de ${deficit}% do meu potencial biológico diário. Gostaria de agendar uma avaliação com o Dr. Francisco Haidar para reverter isso pelo Método BioARch.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="section" style={{ background: '#fcfcfc', borderTop: '1px solid var(--border-light)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div 
          className="glass-panel"
          style={{ padding: '3rem 2rem', textAlign: 'center', backgroundColor: '#ffffff' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {!showResult && !isAnalyzing && (
            <>
              <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                Descubra o seu Nível de Desgaste Metabólico
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
                Responda a estas 3 perguntas simples e descubra quanto da sua performance biológica está sendo desperdiçada.
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {questions.map((_, i) => (
                    <div 
                      key={i} 
                      style={{ 
                        height: '6px', 
                        width: '40px', 
                        borderRadius: '3px', 
                        background: i <= currentStep ? 'linear-gradient(90deg, var(--primary), var(--secondary))' : '#e2e8f0',
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
                    style={{ background: '#f8fafc', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-light)' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                      {questions[currentStep].icon}
                    </div>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--title-marinho)', marginBottom: '1.5rem', fontWeight: 600 }}>
                      {questions[currentStep].question}
                    </h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {questions[currentStep].options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleSelectOption(questions[currentStep].id, opt.score)}
                          style={{
                            padding: '1rem',
                            textAlign: 'left',
                            background: 'white',
                            border: '1px solid var(--border)',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            fontSize: '1rem',
                            color: '#334155'
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
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
            <div style={{ padding: '4rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="spinner" style={{ borderTopColor: 'var(--primary)', borderLeftColor: 'var(--secondary)', width: '48px', height: '48px', marginBottom: '1.5rem' }}></div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', fontWeight: 600 }}>Processando biomarcadores auto-relatados...</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Calculando déficit de performance neuro-metabólica.</p>
            </div>
          )}

          {showResult && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ padding: '1rem 0' }}
            >
               <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '1.5rem', borderRadius: '50%' }}>
                     <Activity size={48} className="text-secondary" />
                  </div>
               </div>
               
               <h3 style={{ fontSize: '1.8rem', color: 'var(--title-marinho)', marginBottom: '1rem', fontWeight: 700 }}>
                 Análise Concluída
               </h3>
               
               <div style={{ background: '#f8fafc', border: '1px solid var(--border-light)', borderRadius: '16px', padding: '2rem', marginBottom: '2rem' }}>
                 <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                   Os dados indicam que você está vivendo com <strong style={{color: 'var(--danger)', fontSize: '1.3rem'}}>{calculateDeficit()}% a menos</strong> do seu potencial biológico e cognitivo diário.
                 </p>
                 <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                   *A fadiga, o ganho de peso e as noites mal dormidas não são o curso natural da idade, são alertas químicos de um metabolismo não otimizado.
                 </p>
               </div>

               <a 
                 href={getWhatsappLink()} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="btn btn-primary"
                 style={{ fontSize: '1.1rem', padding: '1rem 2rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', borderRadius: '50px' }}
               >
                 RECUPERAR MEU POTENCIAL AGORA <ArrowRight size={20} />
               </a>
            </motion.div>
          )}

        </motion.div>
      </div>
    </section>
  );
}
