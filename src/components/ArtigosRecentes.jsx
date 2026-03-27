import React, { useState, useEffect } from 'react';
import { BookOpen, ChevronRight, X, Brain, Activity, BatteryCharging, HeartPulse, Scale, ExternalLink } from 'lucide-react';

const artigosData = [
  {
      id: 1,
      titulo: "Como os hormônios ditam sua performance no trabalho",
      artigoOriginal: "The impact of hormone replacement therapy on cognitive performance and mood",
      fonte: "PubMed",
      linkOriginal: "https://pubmed.ncbi.nlm.nih.gov/?term=hormone+replacement+therapy+cognitive+performance",
      icone: BatteryCharging,
      resumo: "Cansaço excessivo, névoa mental e variações de humor podem não ser apenas estresse, mas sim um desbalanço hormonal.",
      conteudo: "A Terapia de Reposição Hormonal (TRH) não é apenas para fogachos. Hormônios como testosterona e estrogênio em níveis otimizados são responsáveis diretos pela nossa capacidade de foco, de tomar decisões e de gerar energia no dia a dia. Se você sente que sua performance caiu, o problema pode estar na sua química interna."
  },
  {
      id: 2,
      titulo: "O intestino é o seu segundo cérebro (A verdade sobre a Disbiose)",
      artigoOriginal: "Gut microbiota, intestinal permeability, and systemic inflammation",
      fonte: "PubMed / SciELO",
      linkOriginal: "https://pubmed.ncbi.nlm.nih.gov/?term=intestinal+dysbiosis+inflammation",
      icone: Brain,
      resumo: "Você sabia que a maior parte da sua serotonina é produzida no intestino? Entenda como as bactérias controlam sua saúde.",
      conteudo: "A disbiose intestinal é o desequilíbrio das bactérias no seu trato digestivo. Isso causa não apenas inchaço e má digestão, mas também ansiedade, depressão e ganho de peso. Ao modularmos a microbiota através do 'Protocolo dos 4 R\\'s' (Remover, Recolocar, Reinocular e Reparar), conseguimos tratar a raiz de várias doenças inflamatórias."
  },
  {
      id: 3,
      titulo: "Por que você não perde peso nas pernas? Conheça o Lipedema",
      artigoOriginal: "Lipedema: A clinical challenge and an update",
      fonte: "Journal of Clinical Medicine",
      linkOriginal: "https://pubmed.ncbi.nlm.nih.gov/?term=lipedema+treatment+update",
      icone: HeartPulse,
      resumo: "Se as dietas e os exercícios nunca funcionam para as suas pernas e elas estão sempre doloridas, pode ser Lipedema.",
      conteudo: "O Lipedema é uma doença crônica, progressiva e inflamatória que causa acúmulo desproporcional de gordura nas extremidades, poupando mãos e pés. Diferente da obesidade comum, essa gordura é resistente a dietas tradicionais. O tratamento correto envolve controle inflamatório, dieta especializada, terapia compressiva e, em alguns casos, cirurgia."
  },
  {
      id: 4,
      titulo: "Mounjaro: A nova era no tratamento da Obesidade",
      artigoOriginal: "Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT)",
      fonte: "The New England Journal of Medicine",
      linkOriginal: "https://pubmed.ncbi.nlm.nih.gov/?term=tirzepatide+surmount+obesity",
      icone: Scale,
      resumo: "Conheça o agonista duplo (GLP-1 e GIP) que está revolucionando o emagrecimento, com resultados próximos à bariátrica.",
      conteudo: "A Tirzepatida (Mounjaro) atua diretamente no centro de saciedade do cérebro e no controle da insulina. Estudos mostram perdas de até 25% do peso corporal. Porém, o acompanhamento nutrológico é vital: sem a dieta correta e exercícios supervisionados, pode ocorrer a perda perigosa de massa magra (sarcopenia)."
  },
  {
      id: 5,
      titulo: "Nutrição de Precisão: Como seus genes escolhem sua dieta",
      artigoOriginal: "Nutrigenomics and personalized nutrition: science and practice",
      fonte: "Nature Reviews",
      linkOriginal: "https://pubmed.ncbi.nlm.nih.gov/?term=nutrigenomics+personalized+nutrition",
      icone: Activity,
      resumo: "Esqueça as dietas genéricas de gaveta. O futuro é se alimentar de acordo com seu próprio DNA.",
      conteudo: "Com a nutrigenômica, deixamos de apenas 'tratar a doença' e passamos à nutroprevenção. Analisando seu perfil genético, descobrimos quais tendências a doenças você tem e prescrevemos compostos bioativos específicos para 'silenciar' esses genes ruins e ativar os bons, promovendo uma longevidade com muito mais qualidade."
  }
];

export const ArtigosRecentes = () => {
  const [artigoAberto, setArtigoAberto] = useState(null);

  useEffect(() => {
    if (artigoAberto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [artigoAberto]);

  return (
    <section id="pilulas-conhecimento" style={{ padding: '6rem 5%', backgroundColor: '#FAF9F6' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.8rem', color: '#1B2745', marginBottom: '1rem', fontWeight: 800 }}>Pílulas de Conhecimento</h2>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
            Aprofunde-se na ciência da longevidade e entenda como pequenas disfunções podem afetar drasticamente sua performance diária.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {artigosData.map(artigo => {
            const Icone = artigo.icone;
            return (
              <div 
                key={artigo.id} 
                onClick={() => setArtigoAberto(artigo)}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(212,175,55,0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(27, 39, 69, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                    e.currentTarget.style.borderColor = 'rgba(212,175,55,0.1)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '0.5rem' }}>
                  <div style={{ color: 'var(--dourado)', background: 'rgba(212,175,55,0.1)', padding: '1rem', borderRadius: '14px', flexShrink: 0 }}>
                    <Icone size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: '#1B2745', margin: 0, fontWeight: 700, lineHeight: 1.3 }}>
                    {artigo.titulo}
                  </h3>
                </div>
                <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: 1.6, flex: 1, margin: 0 }}>
                  {artigo.resumo}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--dourado)', fontWeight: 600, marginTop: '1.5rem', fontSize: '1rem' }}>
                  Saber mais <ChevronRight size={18} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Apparition */}
        {artigoAberto && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(27, 39, 69, 0.7)', backdropFilter: 'blur(8px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }} onClick={() => setArtigoAberto(null)}>
            <div className="modal-content" style={{ background: 'white', width: '100%', maxWidth: '900px', maxHeight: '90vh', overflowY: 'auto', borderRadius: '24px', position: 'relative', padding: '3rem', boxShadow: '0 25px 50px rgba(0,0,0,0.25)' }} onClick={e => e.stopPropagation()}>
              <button 
                onClick={() => setArtigoAberto(null)}
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: '#F0F0F0', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#E0E0E0'}
                onMouseLeave={e => e.currentTarget.style.background = '#F0F0F0'}
              >
                <X size={20} color="#1B2745" />
              </button>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', paddingRight: '2rem' }}>
                <div style={{ color: 'var(--dourado)', background: 'rgba(212,175,55,0.1)', padding: '1.2rem', borderRadius: '16px' }}>
                  <artigoAberto.icone size={36} />
                </div>
                <h2 style={{ margin: 0, color: '#1B2745', fontSize: '1.8rem', lineHeight: 1.3, fontWeight: 800 }}>
                  {artigoAberto.titulo}
                </h2>
              </div>
              
              <div style={{ background: 'rgba(212,175,55,0.05)', padding: '1.5rem 2rem', borderRadius: '12px', borderLeft: '4px solid var(--dourado)', marginBottom: '2rem' }}>
                <p style={{ margin: 0, fontSize: '1.15rem', color: '#333', fontWeight: 600, lineHeight: 1.5 }}>
                  {artigoAberto.resumo}
                </p>
              </div>

              <div style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                {artigoAberto.conteudo}
              </div>

              {/* Fonte e Artigo Original */}
              <div style={{ background: '#FAF9F6', padding: '1.5rem 2rem', borderRadius: '16px', border: '1px solid rgba(212,175,55,0.2)' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#1B2745', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
                   <BookOpen size={20}/> Referência Científica
                </h4>
                <p style={{ margin: '0 0 1rem 0', color: '#555', fontSize: '1rem', fontStyle: 'italic', lineHeight: 1.5 }}>
                  Estudo base para aprofundamento:<br/> <strong>{artigoAberto.artigoOriginal}</strong>
                </p>
                <a href={artigoAberto.linkOriginal} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--dourado)', fontWeight: 600, textDecoration: 'none', fontSize: '1rem', transition: 'all 0.2s ease', borderBottom: '1px solid transparent' }} onMouseEnter={e => e.currentTarget.style.borderBottom = '1px solid var(--dourado)'} onMouseLeave={e => e.currentTarget.style.borderBottom = '1px solid transparent'}>
                   Pesquisar assunto indexado em: {artigoAberto.fonte} <ExternalLink size={18} />
                </a>
              </div>
              
              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <button 
                  onClick={() => setArtigoAberto(null)} 
                  style={{ background: '#1B2745', color: 'white', border: 'none', padding: '1rem 3rem', borderRadius: '50px', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 15px rgba(27,39,69,0.2)', transition: 'all 0.2s ease' }}
                  onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(27,39,69,0.3)';
                  }}
                  onMouseLeave={e => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(27,39,69,0.2)';
                  }}
                >
                  Fechar Leitura
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
