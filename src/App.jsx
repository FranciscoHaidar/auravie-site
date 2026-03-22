import React, { useState, useEffect } from 'react';
import { ChevronRight, CheckCircle2, Phone, MapPin, Instagram, Brain, BatteryCharging, HeartPulse, Stethoscope, ChevronDown } from 'lucide-react';
import { supabase } from './supabase';
import './index.css';

function App() {
  const [siteConfig, setSiteConfig] = useState({
    hero_title: 'Muito além da estética: redefinindo a sua qualidade de vida com inteligência médica.',
    hero_subtitle: 'Descubra o método AuraVie Concept para otimização metabólica e envelhecimento saudável.',
    whatsapp_number: '5551997353309',
    instagram_url: 'https://www.instagram.com/drfranciscohaidar/',
    about_text_p1: 'Sou fascinado pela máquina humana. Criei o método AuraVie Concept porque compreendi que a maioria dos sintomas clássicos que destroem sua auto-estima e motivação podem ser mapeados e revertidos.',
    about_text_p2: 'Meu compromisso como médico é aplicar protocolos rigorosos e hiper-personalizados, combinando nutrologia avançada, bioimpedância de precisão e terapias de ação ultrarrápida (injetáveis) para entregar não só a estética almejada, mas longevidade biológica.'
  });

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const { data, error } = await supabase
          .from('site_config')
          .select('*')
          .eq('id', 1)
          .single();
        if (data) {
          setSiteConfig(data);
        }
      } catch (err) {
        console.error("Fallback to default config.", err);
      }
    };
    fetchConfig();
  }, []);

  const WHATSAPP_LINK = `https://wa.me/${siteConfig.whatsapp_number}?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o+na+AuraVie+Concept.`;
  const INSTAGRAM_LINK = siteConfig.instagram_url;

  const getPlanWhatsAppLink = (planName) => {
    const text = `Olá! Gostaria de saber mais sobre o plano ${planName}`;
    return `https://wa.me/${siteConfig.whatsapp_number}?text=${encodeURIComponent(text)}`;
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* 0. NAVBAR */}
      <nav className="navbar">
        <div className="container">
          <div 
            className="logo-container" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ cursor: 'pointer' }}
          >
            <img 
              src="/logo.png" 
              alt="Logo AuraVie" 
              style={{ height: '55px'}}
            />
          </div>
          <div className="nav-links">
            <a href="#problema" onClick={(e) => { e.preventDefault(); scrollTo('problema'); }} className="nav-link">Por que AuraVie?</a>
            <a href="#medico" onClick={(e) => { e.preventDefault(); scrollTo('medico'); }} className="nav-link">O Médico</a>
            <a href="#jornada" onClick={(e) => { e.preventDefault(); scrollTo('jornada'); }} className="nav-link">A Jornada</a>
            <a href="#planos" onClick={(e) => { e.preventDefault(); scrollTo('planos'); }} className="nav-link">Planos</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--title-marinho)', display: 'flex', alignItems: 'center' }}>
              <Instagram size={22} />
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
              Agendar Consulta
            </a>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>{siteConfig.hero_title}</h1>
            <p>{siteConfig.hero_subtitle}</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Agendar Minha Consulta
              </a>
              <button onClick={() => scrollTo('planos')} className="btn btn-outline">
                Conhecer os Planos
              </button>
            </div>
          </div>
          <div className="hero-image-wrapper">
             <img 
                src="/logo.png" 
                className="hero-logo-large" 
                alt="AuraVie Concept" 
             />
          </div>
        </div>
      </section>

      {/* 2. O PROBLEMA E A SOLUÇÃO */}
      <section id="problema" className="section bg-offwhite">
        <div className="container">
          <h2 className="section-title">Por que procurar a AuraVie?</h2>
          <p className="section-subtitle">
            Cansaço persistente, estagnação no emagrecimento e dificuldade de ganhar massa muscular não são "normais". São sinais biológicos.
          </p>
          <div className="cards-grid">
            <div className="info-card">
              <BatteryCharging size={32} color="var(--gold-champagne)" style={{ marginBottom: '1rem' }} />
              <h3>Falta de Energia e Fadiga</h3>
              <p>Desbalanços hormonais e deficiências invisíveis nos exames comuns podem ser os sabotadores da sua rotina produtiva.</p>
            </div>
            <div className="info-card">
              <Brain size={32} color="var(--gold-champagne)" style={{ marginBottom: '1rem' }} />
              <h3>Dificuldade de Perder Peso</h3>
              <p>O achismo e dietas padrão ignoram sua assinatura metabólica. A nutrição baseada e orientada por IA química corta o abismo para o resultado.</p>
            </div>
            <div className="info-card">
              <HeartPulse size={32} color="var(--gold-champagne)" style={{ marginBottom: '1rem' }} />
              <h3>A Solução Baseada em Evidências</h3>
              <p>Troque a tentativa e erro por um sistema médico investigativo onde cada decisão suplementar e clínica é rastreada com parâmetros claros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. O MÉDICO */}
      <section id="medico" className="section bg-marinho">
        <div className="container about-grid">
          <div>
            <img 
              src="/foto-medico.jpg" 
              alt="Dr Francisco Haidar" 
              style={{ width: '100%', maxWidth: '400px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', objectFit: 'cover' }}
            />
          </div>
          <div>
            <h2 style={{ color: 'var(--gold-champagne)', marginBottom: '1rem', fontSize: '2.8rem'}}>Dr. Francisco Haidar</h2>
            <p style={{ opacity: 0.9, marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              {siteConfig.about_text_p1}
            </p>
            <p style={{ opacity: 0.9, marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              {siteConfig.about_text_p2}
            </p>
            <p style={{ fontWeight: 600, color: 'var(--gold-champagne)' }}>CRM: Médico Nutrólogo Especialista</p>
          </div>
        </div>
      </section>

      {/* 4. A JORNADA DO PACIENTE */}
      <section id="jornada" className="section">
        <div className="container">
          <h2 className="section-title text-petroleo">A Jornada do Paciente</h2>
          <p className="section-subtitle">
            Como funciona a estrutura de um acompanhamento seguro e sem margem para dúvidas.
          </p>

          <div className="journey-timeline">
            <div className="journey-step">
              <div className="journey-number">1</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Mapeamento Metabólico</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-grafite)' }}>Avaliação clínica presencial, anamnese detalhada e coleta da sua biografia metabólica.</p>
            </div>
            <div className="journey-step">
              <div className="journey-number">2</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Exames de Precisão</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-grafite)' }}>Bioimpedância segmentada e mapeamento laboratorial extenso e direcionado.</p>
            </div>
            <div className="journey-step">
              <div className="journey-number">3</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Plano Terapêutico</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-grafite)' }}>Desenho do ciclo hormonal, suplementação ou infusões clínicas individualizadas.</p>
            </div>
            <div className="journey-step">
              <div className="journey-number">4</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Acompanhamento</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-grafite)' }}>Monitoramento milimétrico ao longo dos retornos para readaptação de dosagens e hipertrofia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROGRAMAS DE ACOMPANHAMENTO (PLANOS) */}
      <section id="planos" className="section bg-offwhite">
        <div className="container">
          <h2 className="section-title">Programas Clínicos</h2>
          <p className="section-subtitle">A esteira premium de serviços da AuraVie para acompanhamento sistêmico.</p>
          
          <div className="plans-grid">
            <div className="plan-card plan-essential">
              <h3>Essential</h3>
              <ul>
                <li><CheckCircle2 size={16} /> Consulta clínica completa</li>
                <li><CheckCircle2 size={16} /> Bioimpedância analítica</li>
                <li><CheckCircle2 size={16} /> Acompanhamento por 3 meses</li>
              </ul>
              <a href={getPlanWhatsAppLink('Essential')} target="_blank" rel="noopener noreferrer" className="btn-plan">Saber mais</a>
            </div>

            <div className="plan-card plan-essential-plus">
              <h3>Essential +</h3>
              <ul>
                <li><CheckCircle2 size={16} /> Tudo do Essential</li>
                <li><CheckCircle2 size={16} /> Retorno de validação a cada 30 dias</li>
                <li><CheckCircle2 size={16} /> Medicamentos IM personalizados para o objetivo</li>
              </ul>
              <a href={getPlanWhatsAppLink('Essential +')} target="_blank" rel="noopener noreferrer" className="btn-plan">Saber mais</a>
            </div>

            <div className="plan-card plan-prime">
              <h3>Prime</h3>
              <ul>
                <li><CheckCircle2 size={16} /> Rota Metabólica Avançada</li>
                <li><CheckCircle2 size={16} /> Exames Laboratoriais aprofundados</li>
                <li><CheckCircle2 size={16} /> Acompanhamento por 6 meses</li>
              </ul>
              <a href={getPlanWhatsAppLink('Prime')} target="_blank" rel="noopener noreferrer" className="btn-plan">Saber mais</a>
            </div>

            <div className="plan-card plan-prime-plus">
              <h3>Prime +</h3>
              <ul>
                <li><CheckCircle2 size={16} /> Tudo do Prime</li>
                <li><CheckCircle2 size={16} /> Protocolos de Injetáveis IM/EV personalizado</li>
                <li><CheckCircle2 size={16} /> Concierge WhatsApp Direto</li>
              </ul>
              <a href={getPlanWhatsAppLink('Prime +')} target="_blank" rel="noopener noreferrer" className="btn-plan">Saber mais</a>
            </div>

            <div className="plan-card plan-black">
              <h3>Black</h3>
              <ul>
                <li><CheckCircle2 size={16} /> Consultoria Médica Full-Year</li>
                <li><CheckCircle2 size={16} /> Controle de Longevidade Anti-aging</li>
                <li><CheckCircle2 size={16} /> Acompanhamento a cada 15 dias</li>
              </ul>
              <a href={getPlanWhatsAppLink('Black')} target="_blank" rel="noopener noreferrer" className="btn-plan">Aplicar para o Black</a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ÁREAS DE ATUAÇÃO */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-petroleo">Áreas de Atuação</h2>
          <div className="cards-grid" style={{ marginTop: '3rem' }}>
            <div className="info-card" style={{ borderTopColor: 'var(--gold-bronze)'}}>
              <h3>Emagrecimento</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-grafite)'}}>Perda de gordura com preservação de massa magra por otimização enzimática.</p>
            </div>
            <div className="info-card" style={{ borderTopColor: 'var(--gold-bronze)'}}>
              <h3>Hipertrofia</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-grafite)'}}>Modulação de biogênese muscular com suporte hormonal e nutrição cirúrgica.</p>
            </div>
            <div className="info-card" style={{ borderTopColor: 'var(--gold-bronze)'}}>
              <h3>Lipedema</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-grafite)'}}>Abordagem metabólica e anti-inflamatória profunda para regressão de volume e alívio do lipedema.</p>
            </div>
            <div className="info-card" style={{ borderTopColor: 'var(--gold-bronze)'}}>
              <h3>Reposição Hormonal</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-grafite)'}}>Restauração clínica de testosterona, estradiol, e eixos tireoidianos desgastados.</p>
            </div>
            <div className="info-card" style={{ borderTopColor: 'var(--gold-bronze)'}}>
              <h3>Menopausa & Climatério</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-grafite)'}}>Modulação fisiológica fina para anular os sintomas, blindar massa óssea e devolver a vitalidade.</p>
            </div>
            <div className="info-card" style={{ borderTopColor: 'var(--gold-bronze)'}}>
              <h3>Disbiose Intestinal</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-grafite)'}}>Tratamento da inflamação da microbiota intestinal para cura sistêmica e absortiva.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="section bg-offwhite">
        <div className="container">
          <h2 className="section-title">Dúvidas Frequentes</h2>
          <div style={{ maxWidth: '800px', margin: '3rem auto 0 auto' }}>
            <div className="faq-item">
              <h4>A clínica aceita convênio médico?</h4>
              <p style={{ color: 'var(--text-grafite)', fontSize: '0.95rem'}}>Nossas consultas são exclusivamente particulares para garantir o tempo, a complexidade laboratorial e a excelência que o método AuraVie exige. Emitimos nota fiscal para pedidos de reembolso junto ao seu plano.</p>
            </div>
            <div className="faq-item">
              <h4>Como funcionam os exames?</h4>
              <p style={{ color: 'var(--text-grafite)', fontSize: '0.95rem'}}>Fornecemos a guia laboratorial detalhada na primeira consulta. Caso seja do seu interesse, também realizamos e possuímos parceiros para coletas direcionadas ao nosso acompanhamento científico.</p>
            </div>
            <div className="faq-item">
              <h4>Qual a duração do acompanhamento?</h4>
              <p style={{ color: 'var(--text-grafite)', fontSize: '0.95rem'}}>Varia de acordo com o plano biológico estabelecido. A longevidade exige constância, mas os primeiros protocolos de ataque costumam trazer respostas perceptíveis já nos primeiros 30 a 45 dias de execução.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="section bg-marinho" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '3rem', marginBottom: '2rem' }}>
            
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img 
                src="/logo.png" 
                alt="AuraVie Concept" 
                style={{ height: '110px', marginBottom: '1rem' }}
              />
              <p style={{ opacity: 0.8, fontSize: '0.9rem', maxWidth: '250px', margin: '0 auto', lineHeight: '1.4' }}>Redefinindo paradigmas em qualidade de vida</p>
            </div>
            
            <div>
              <h4 style={{ color: 'var(--gold-champagne)', marginBottom: '1.5rem' }}>Contato Rápido</h4>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'white', textDecoration: 'none', marginBottom: '0.5rem', opacity: 0.8 }}><Phone size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }}/> WhatsApp Clínica (Agendar)</a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'white', textDecoration: 'none', marginBottom: '0.5rem', opacity: 0.8 }}><Instagram size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }}/> @drfranciscohaidar</a>
            </div>

            <div>
              <h4 style={{ color: 'var(--gold-champagne)', marginBottom: '1.5rem' }}>AuraVie Concept</h4>
              <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '0.5rem' }}><MapPin size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }}/> Rua Santa Teresinha, 205 - Sala D - Centro</p>
              <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '0.5rem', paddingLeft: '28px' }}>Campo Bom/RS</p>
              <div style={{ paddingLeft: '28px', marginTop: '1rem' }}>
                <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>CRM/RS 57907</span>
                <p style={{ opacity: 0.7, fontSize: '0.75rem', marginTop: '0.2rem', lineHeight: '1.4' }}>Médico com pós-graduação em nutrologia, não especialista</p>
              </div>
            </div>
            
          </div>
          <div style={{ textAlign: 'center', opacity: 0.6, fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} Dr. Francisco Haidar - AuraVie Concept. Política de Privacidade aplicada.
          </div>
        </div>
      </footer>

      {/* FLOATING ACTIONS */}
      <div className="floating-actions">
        <a href={INSTAGRAM_LINK} className="float-btn float-instagram" target="_blank" rel="noopener noreferrer">
          <Instagram size={30} />
        </a>
        <a href={WHATSAPP_LINK} className="float-btn float-whatsapp" target="_blank" rel="noopener noreferrer">
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
           </svg>
        </a>
      </div>
    </>
  );
}

export default App;
