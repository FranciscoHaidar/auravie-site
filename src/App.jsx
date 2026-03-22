import React from 'react';
import { Activity, Dumbbell, Syringe, HeartPulse, ChevronRight, MapPin, Instagram, Phone, Info } from 'lucide-react';
import './index.css';

function App() {
  
  const WHATSAPP_NUMBER = "551199999999"; // Change this to real number
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o+na+AuraVie.`;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container">
          <div className="logo-container">
            {/* Using the Rose Gold FH Monogram */}
            <img 
              src="https://storage.googleapis.com/antigravity-images-test/fdd420a400a40e94af7d78a87b6408db/a7ed7efd752dd3082a5a513754245ccb.png" 
              alt="Dr. Francisco Haidar Logo" 
              className="logo-img"
            />
          </div>
          <div className="nav-links">
            <a href="#especialidades" onClick={(e) => { e.preventDefault(); scrollTo('especialidades'); }} className="nav-link">Especialidades</a>
            <a href="#metodo" onClick={(e) => { e.preventDefault(); scrollTo('metodo'); }} className="nav-link">Método AuraVie</a>
            <a href="#sobre" onClick={(e) => { e.preventDefault(); scrollTo('sobre'); }} className="nav-link">O Doutor</a>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem' }}>
            Agendar Consulta
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>Muito além da estética: redefinindo a sua qualidade de vida com <span className="title-accent">inteligência médica.</span></h1>
            <p>Descubra o método AuraVie Concept para otimização metabólica e envelhecimento saudável.</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Iniciar Tratamento VIP <ChevronRight size={20} />
              </a>
              <button onClick={() => scrollTo('especialidades')} className="btn btn-outline">
                Conhecer Foco Clínico
              </button>
            </div>
          </div>
          <div className="hero-image-wrapper">
             <div className="hero-abstract"></div>
             {/* Using the Black "FH Dr Francisco Haidar" Logo for contrast on light background */}
             <img 
                src="https://storage.googleapis.com/antigravity-images-test/fdd420a400a40e94af7d78a87b6408db/394c264a71911aaada3e53ba218fca85.png" 
                className="hero-logo-large" 
                alt="Dr. Francisco Haidar" 
             />
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section id="especialidades" className="section bg-surface">
        <div className="container">
          <h2 className="section-title">Especialidades Médicas</h2>
          <p className="section-subtitle">
            Pilares da Nutrologia focados entregar resultados estéticos com raízes fisiológicas sólidas e duradouras.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Activity size={32} /></div>
              <h3>Emagrecimento & Lipólise</h3>
              <p>Mapeamento metabólico para perda de gordura sustentável, combatendo dislipidemia e inflamação celular.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><Dumbbell size={32} /></div>
              <h3>Hipertrofia Física</h3>
              <p>Protocolos de ganho de massa muscular ancorados em ajustes nutricionais avançados e resposta ergogênica.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><HeartPulse size={32} /></div>
              <h3>Reposição Hormonal</h3>
              <p>Modulação sistêmica para reverter fadiga crônica, otimizar libido e restaurar o ápice da sua vitalidade.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><Info size={32} /></div>
              <h3>Saúde Intestinal</h3>
              <p>Tratamento de Disbiose Intestinal e intolerâncias para maximização da absorção de nutrientes via eixo intestino-cérebro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTODO AURAVIE */}
      <section id="metodo" className="section">
        <div className="container">
          <h2 className="section-title">O Método <span className="title-accent">AuraVie Concept</span></h2>
          <p className="section-subtitle">
            Uma abordagem imersiva onde a tecnologia encontra a medicina preventiva de ponta.
          </p>

          <div className="method-timeline">
            <div className="method-item">
              <div className="method-number">1</div>
              <div className="method-content">
                <h3>Mapeamento de Impedância Bioelétrica</h3>
                <p>Uso de Bioimpedância de altíssima precisão no consultório para auditar a composição exata de massa magra, hidratação celular e gordura visceral.</p>
              </div>
            </div>
            <div className="method-item">
              <div className="method-number">2</div>
              <div className="method-content">
                <h3>Anamnese Bioquímica</h3>
                <p>Uma investigação clínica de eixo central, compreendendo todo o seu histórico biológico e eventuais marcadores laboratoriais para desenhar a linha base.</p>
              </div>
            </div>
            <div className="method-item">
              <div className="method-number">3</div>
              <div className="method-content">
                <h3>Terapias de Ação Rápida (IM/EV)</h3>
                <p>Indicação e aplicação em loco de injetáveis Intra-Musculares (IM) ou Endovenosos (EV). Soroterapias e medicamentos otimizados para biodisponibilidade em 100%, acelerando colateralmente a resposta sistêmica do organismo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE O DR */}
      <section id="sobre" className="section section-dark">
        <div className="container about-grid">
          <div className="about-image-wrapper" style={{ display: 'flex', justifyContent: 'center', background: 'white', padding: '3rem', borderRadius: '24px' }}>
            <img 
              src="https://storage.googleapis.com/antigravity-images-test/fdd420a400a40e94af7d78a87b6408db/8447831f240fc40c4ce27b0b7593c207.png" 
              alt="AuraVie Concept Logo Gold" 
              style={{ width: '100%', maxWidth: '350px', objectFit: 'contain' }}
            />
          </div>
          <div className="about-text">
            <h2>Dr. Francisco Haidar</h2>
            <p>Médico especializado em Nutrologia e Alta Performance.</p>
            <p>
              Minha missão não é aplicar dietas de restrição engessadas, mas sim compreender o seu corpo
              como a máquina mais complexa da engenharia biológica. 
            </p>
            <p>
              No Auravie Concept, a estética impecável é tratada apenas como um efeito colateral da sua saúde em máxima potência.
              Unimos tecnologia, análise rigorosa e protocolos seguros para devolver a sua melhor versão.
            </p>
            
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '2rem' }}>
              Conversar com a Recepção
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <img 
                src="https://storage.googleapis.com/antigravity-images-test/fdd420a400a40e94af7d78a87b6408db/a7ed7efd752dd3082a5a513754245ccb.png" 
                alt="Logo Rodapé" 
                className="footer-logo"
              />
              <p>Redefinindo paradigmas em qualidade de vida, imunidade e hipertrofia em um ecossistema clínico premium.</p>
            </div>
            
            <div>
              <h4>Contato VIP</h4>
              <a href={WHATSAPP_LINK}><Phone size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }}/> WhatsApp Clínica</a>
              <a href="#"><Instagram size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }}/> @dr.franciscohaidar</a>
            </div>

            <div>
              <h4>Localização</h4>
              <p><MapPin size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }}/> Edifício Corporate Tower</p>
              <p style={{ paddingLeft: '28px' }}>Rua Principal, Cj 101 - Bairro Nobre</p>
              <p style={{ paddingLeft: '28px' }}>São Paulo, SP - 01234-567</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Dr. Francisco Haidar - AuraVie Concept. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT BUTTON */}
      <a href={WHATSAPP_LINK} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
         </svg>
      </a>
    </>
  );
}

export default App;
