import React, { useState, useEffect } from 'react';
import { ChevronRight, CheckCircle2, Phone, MapPin, Instagram, Brain, BatteryCharging, HeartPulse, Stethoscope, ChevronDown, Check, Award, X } from 'lucide-react';
import { supabase } from './supabase';
import './index.css';

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const modalData = {
    essential: {
      title: "BioARch Essential & Essential + (O Reset Metabólico - 3 Meses)",
      foco: "Ideal para quem precisa de um choque de realidade no metabolismo, corrigir deficiências agudas e iniciar o processo de emagrecimento ou hipertrofia com base médica sólida.",
      vivencia: "3 meses de acompanhamento intenso (3 consultas + 3 exames de bioimpedância analítica).",
      diferencial: "Acesso estratégico aos nossos protocolos de medicamentos injetáveis (IM), acelerando a absorção de nutrientes e a resposta do seu corpo ao tratamento.",
      whatsappPlan: "Essential ou Essential +"
    },
    prime: {
      title: "BioARch Prime & Prime + (A Consolidação - 6 Meses)",
      foco: "Para quem busca transformações profundas e a consolidação de um novo estilo de vida. O tempo ideal para estabilizar hormônios, mudar a composição corporal de forma visível e garantir que os resultados sejam definitivos.",
      vivencia: "6 meses de parceria médica (6 consultas + 6 exames de bioimpedância analítica), garantindo ajustes finos ao longo de todo o semestre.",
      diferencial: "Inclui o poder da via injetável (IM) durante os 6 meses, maximizando a performance física e mental de forma contínua.",
      whatsappPlan: "Prime ou Prime +"
    },
    black: {
      title: "BioARch Black (O Ápice da Performance - 12 Meses)",
      foco: "O nível máximo de exclusividade da AuraVie Concept. Desenhado para pacientes exigentes que tratam a saúde como seu maior ativo e desejam um médico \"concierge\" focado na sua longevidade, estética e performance o ano inteiro.",
      vivencia: "1 ano completo de blindagem metabólica (12 consultas + 12 reavaliações + 12 bioimpedâncias). Acompanhamento irrestrito para quem não aceita nada menos que a excelência contínua.",
      whatsappPlan: "Black"
    }
  };

  const [siteConfig, setSiteConfig] = useState({
    hero_title: 'Muito além da estética: redefinindo a sua qualidade de vida com inteligência médica.',
    hero_subtitle: 'Descubra o método BioARch para otimização metabólica e envelhecimento saudável.',
    whatsapp_number: '5551997353309',
    instagram_url: 'https://www.instagram.com/drfranciscohaidar/',
    about_text_p1: 'Sou fascinado pela máquina humana. Na AuraVie, criei o método BioARch porque compreendi que a maioria dos sintomas clássicos que destroem sua auto-estima e motivação podem ser mapeados e revertidos.',
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
    const text = `Olá, equipe AuraVie! Estava navegando pelo site e me identifiquei muito com o método de vocês. Gostaria de dar o próximo passo e receber um atendimento exclusivo para saber mais detalhes sobre o Programa Clínico ${planName}. Como funciona para iniciarmos?`;
    return `https://wa.me/${siteConfig.whatsapp_number}?text=${encodeURIComponent(text)}`;
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 40;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* 0. NAVBAR */}
      <nav className="navbar">
        <div className="container" style={{ maxWidth: '1280px' }}>
          <div 
            className="logo-container" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <span style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--title-marinho)', letterSpacing: '-0.5px' }}>AuraVie</span>
            <span style={{ fontSize: '1.45rem', fontWeight: 400, color: '#C8A97E', marginLeft: '6px' }}>Concept</span>
          </div>
          <div className="nav-links" style={{ gap: '1.2rem', whiteSpace: 'nowrap' }}>
            <a href="#problema" onClick={(e) => { e.preventDefault(); scrollTo('problema'); }} className="nav-link">Por que AuraVie?</a>
            <a href="#medico" onClick={(e) => { e.preventDefault(); scrollTo('medico'); }} className="nav-link">O Médico</a>
            <a href="#jornada" onClick={(e) => { e.preventDefault(); scrollTo('jornada'); }} className="nav-link">A Jornada</a>
            <a href="#planos" onClick={(e) => { e.preventDefault(); scrollTo('planos'); }} className="nav-link">Planos</a>
            <a href="#atuacao" onClick={(e) => { e.preventDefault(); scrollTo('atuacao'); }} className="nav-link">Áreas de Atuação</a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo('faq'); }} className="nav-link">FAQ</a>
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
      <section className="hero" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div className="container hero-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
          <div className="hero-content" style={{ flex: '1 1 450px' }}>
             <h1 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.4rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.2rem', letterSpacing: '-1px' }}>
              {siteConfig.hero_title}
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', opacity: 0.85, marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '95%' }}>
              {siteConfig.hero_subtitle}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.9rem 1rem', flex: '1 1 200px', textAlign: 'center', fontSize: '1rem' }}>
                Iniciar Minha Transformação
              </a>
              <button onClick={() => scrollTo('planos')} className="btn btn-outline" style={{ padding: '0.9rem 1.4rem', flex: '1 1 180px', textAlign: 'center' }}>
                Conhecer os Planos
              </button>
            </div>
          </div>
          <div className="hero-image-wrapper" style={{ flex: '1 1 350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             <img 
                src="/hero-photo.jpg" 
                alt="Dr. Francisco Haidar - AuraVie Concept" 
                style={{ width: '100%', maxWidth: '360px', borderRadius: '20px', boxShadow: '0 25px 50px rgba(29, 41, 81, 0.15)', objectFit: 'cover' }}
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
            <p style={{ opacity: 0.9, marginBottom: '1.5rem', fontSize: '1.1rem', textAlign: 'justify' }}>
              {siteConfig.about_text_p1}
            </p>
            <p style={{ opacity: 0.9, marginBottom: '1.5rem', fontSize: '1.1rem', textAlign: 'justify' }}>
              {siteConfig.about_text_p2}
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <span style={{ fontWeight: 600, color: 'var(--gold-champagne)', display: 'block', fontSize: '1.1rem' }}>CRM/RS 57907</span>
              <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', display: 'block', marginTop: '0.3rem', lineHeight: '1.4' }}>Médico com pós-graduação em nutrologia, não especialista</span>
            </div>
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
            {/* Essential */}
            <div className="plan-card" style={{ borderTop: '4px solid #333', backgroundColor: '#f9f9f9' }}>
              <span className="plan-subtitle">ACESSO BASE</span>
              <h3 style={{ color: '#333' }}>Essential</h3>
              <ul>
                <li><Check size={14} className="check-icon" /> Consulta clínica completa</li>
                <li><Check size={14} className="check-icon" /> Bioimpedância analítica</li>
                <li><Check size={14} className="check-icon" /> Acompanhamento por 3 meses</li>
              </ul>
              <button onClick={() => setActiveModal('essential')} className="btn-plan btn-plan-essential" style={{cursor: 'pointer'}}>SABER MAIS</button>
            </div>

            {/* Essential + */}
            <div className="plan-card" style={{ borderTop: '4px solid #888', backgroundColor: '#fff' }}>
              <span className="plan-subtitle">PERFORMANCE</span>
              <h3 style={{ color: '#888' }}>Essential +</h3>
              <ul>
                <li><Check size={14} className="check-icon" /> Tudo do Essential</li>
                <li><Check size={14} className="check-icon" /> Retorno de validação a cada 30 dias</li>
                <li><Check size={14} className="check-icon" /> Medicamentos IM personalizados para o objetivo</li>
              </ul>
              <button onClick={() => setActiveModal('essential')} className="btn-plan btn-plan-essential-plus" style={{cursor: 'pointer'}}>SABER MAIS</button>
            </div>

            {/* Prime */}
            <div className="plan-card plan-featured" style={{ borderTop: '4px solid var(--gold-champagne)', backgroundColor: '#fff' }}>
              <span className="plan-subtitle" style={{ color: 'var(--gold-champagne)' }}>PREMIUM</span>
              <h3 style={{ color: 'var(--gold-champagne)' }}>Prime</h3>
              <ul>
                <li><Check size={14} className="check-icon" /> Rota Metabólica Avançada</li>
                <li><Check size={14} className="check-icon" /> Exames Laboratoriais aprofundados</li>
                <li><Check size={14} className="check-icon" /> Acompanhamento por 6 meses</li>
              </ul>
              <button onClick={() => setActiveModal('prime')} className="btn-plan btn-plan-prime" style={{cursor: 'pointer'}}>SABER MAIS</button>
            </div>

            {/* Prime + */}
            <div className="plan-card" style={{ borderTop: '4px solid #B87333', backgroundColor: '#fff' }}>
              <span className="plan-subtitle">ADVANCED</span>
              <h3 style={{ color: '#B87333' }}>Prime +</h3>
              <ul>
                <li><Check size={14} className="check-icon" /> Tudo do Prime</li>
                <li><Check size={14} className="check-icon" /> Protocolos de Injetáveis IM/EV personalizado</li>
                <li><Check size={14} className="check-icon" /> Concierge WhatsApp Direto</li>
              </ul>
              <button onClick={() => setActiveModal('prime')} className="btn-plan btn-plan-prime-plus" style={{cursor: 'pointer'}}>SABER MAIS</button>
            </div>

            {/* Black */}
            <div className="plan-card plan-black" style={{ borderTop: 'none', backgroundColor: '#0a0a0a', color: '#fff' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#000' }}></div>
              <span className="plan-subtitle" style={{ color: 'var(--gold-bronze)' }}>ELITE EXCLUSIVE</span>
              <h3 style={{ color: '#FFD700' }}>Black</h3>
              <ul>
                <li><Award size={14} className="check-icon-gold" /> Consultoria Médica Full-Year</li>
                <li><Award size={14} className="check-icon-gold" /> Controle de Longevidade Anti-aging</li>
                <li><Award size={14} className="check-icon-gold" /> Acompanhamento a cada 15 dias</li>
              </ul>
              <button onClick={() => setActiveModal('black')} className="btn-plan btn-plan-black" style={{cursor: 'pointer'}}>SABER MAIS</button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ÁREAS DE ATUAÇÃO */}
      <section id="atuacao" className="section">
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
      <section id="faq" className="section bg-offwhite">
        <div className="container">
          <h2 className="section-title">Dúvidas Frequentes</h2>
          <div style={{ maxWidth: '800px', margin: '3rem auto 0 auto' }}>
            <div className="faq-item">
              <h4>O acompanhamento pode ser feito online ou apenas presencial?</h4>
              <p style={{ color: 'var(--text-grafite)', fontSize: '0.95rem'}}>O método BioARch foi estruturado para atender pacientes sem barreiras geográficas. Nossas consultas podem ser realizadas de forma <strong>100% online por telemedicina</strong>, com atendimento para todo o Brasil e exterior, ou <strong>presencialmente</strong> em nossa sede na Região do Vale dos Sinos. Em ambas as modalidades, garantimos o mesmo padrão de excelência clínica, guias de exames e conduta terapêutica de precisão.</p>
            </div>
            <div className="faq-item">
              <h4>A clínica aceita convênio médico?</h4>
              <p style={{ color: 'var(--text-grafite)', fontSize: '0.95rem'}}>Na AuraVie Concept, nossos atendimentos são exclusivamente particulares. Isso nos permite dedicar o tempo e a atenção integral que um mapeamento metabólico de alta precisão exige, sem as limitações de tempo impostas pelos convênios. No entanto, emitimos nota fiscal para que você possa solicitar o reembolso junto ao seu plano de saúde, e os exames laboratoriais solicitados podem ser realizados pelo seu convênio.</p>
            </div>
            <div className="faq-item">
              <h4>Qual a diferença entre o acompanhamento na AuraVie e ir apenas ao nutricionista?</h4>
              <p style={{ color: 'var(--text-grafite)', fontSize: '0.95rem'}}>O trabalho médico nutrológico vai na raiz do problema. Enquanto o plano alimentar cuida do combustível, a nutrologia investiga e otimiza o "motor": seus hormônios, deficiências vitamínicas silenciosas e vias metabólicas. Nós realizamos diagnósticos médicos e prescrevemos tratamentos avançados (como terapias injetáveis e reposição hormonal) que atuam em sinergia com a sua nutrição para destravar resultados definitivos.</p>
            </div>
            <div className="faq-item">
              <h4>Como a Nutrologia e a Harmonização Corporal se conectam no meu tratamento?</h4>
              <p style={{ color: 'var(--text-grafite)', fontSize: '0.95rem'}}>Acreditamos que a verdadeira estética começa de dentro para fora. Tratar a base metabólica, combater o estresse oxidativo e otimizar seus hormônios melhora drasticamente a qualidade da sua pele, a produção de colágeno e a durabilidade dos procedimentos estéticos. É a união da saúde celular com o refinamento facial.</p>
            </div>
            <div className="faq-item">
              <h4>Os exames laboratoriais estão inclusos no valor dos planos?</h4>
              <p style={{ color: 'var(--text-grafite)', fontSize: '0.95rem'}}>Os planos incluem a avaliação clínica completa e a bioimpedância analítica realizadas na clínica. Os exames laboratoriais de sangue ou imagem são solicitados à parte, de forma totalmente individualizada conforme a sua necessidade, e você pode realizá-los no laboratório de sua preferência (utilizando seu plano de saúde, se desejar).</p>
            </div>
            <div className="faq-item">
              <h4>Em quanto tempo começo a ver resultados na minha energia e corpo?</h4>
              <p style={{ color: 'var(--text-grafite)', fontSize: '0.95rem'}}>A medicina de precisão não trabalha com promessas imediatistas irresponsáveis, mas sim com fisiologia. A maioria dos nossos pacientes relata uma melhora significativa na disposição, foco e qualidade do sono já nas primeiras semanas de ajuste metabólico e reposição de nutrientes. As mudanças na composição corporal tornam-se visíveis e consistentes ao longo dos primeiros meses de protocolo.</p>
            </div>
            <div className="faq-item">
              <h4>O tratamento é indicado para quem já treina pesado, como musculação e jiu-jitsu?</h4>
              <p style={{ color: 'var(--text-grafite)', fontSize: '0.95rem'}}>Absolutamente. Para praticantes de atividades de alta intensidade, o desgaste oxidativo e a demanda nutricional são muito maiores. Nossos protocolos aceleram a recuperação muscular, previnem lesões e otimizam a hipertrofia e a performance no tatame ou na academia, ajustando o corpo para suportar e evoluir com a carga de treinos.</p>
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

      {/* MODAL PLANOS */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModal(null)}><X size={24} /></button>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--title-marinho)', paddingRight: '2rem', lineHeight: '1.3' }}>
              {modalData[activeModal].title}
            </h3>
            <div style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: '#444' }}>
              <p style={{ marginBottom: '1rem', textAlign: 'justify' }}><strong style={{color: '#111'}}>Foco:</strong> {modalData[activeModal].foco}</p>
              <p style={{ marginBottom: '1rem', textAlign: 'justify' }}><strong style={{color: '#111'}}>O que o paciente vive:</strong> {modalData[activeModal].vivencia}</p>
              {modalData[activeModal].diferencial && (
                <p style={{textAlign: 'justify'}}><strong style={{color: '#111'}}>Diferencial do {activeModal === 'essential' ? 'Essential +' : 'Prime +'}:</strong> {modalData[activeModal].diferencial}</p>
              )}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <a 
                href={getPlanWhatsAppLink(modalData[activeModal].whatsappPlan)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-plan btn-solid-gold"
                style={{ fontSize: '0.9rem', padding: '1rem' }}
                onClick={() => setActiveModal(null)}
              >
                TENHO INTERESSE NESTE PLANO
              </a>
            </div>
          </div>
        </div>
      )}

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
