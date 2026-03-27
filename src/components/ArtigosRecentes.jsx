
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { BookOpen, ChevronRight, X, Brain, Activity, BatteryCharging, HeartPulse, Scale, ExternalLink, Dumbbell } from 'lucide-react';

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
  },
  {
    id: 6,
    titulo: "O Segredo da Hipertrofia: Por que você treina e não cresce?",
    artigoOriginal: "Nutritional interventions to augment resistance training-induced muscle hypertrophy",
    fonte: "PubMed / Sports Medicine",
    linkOriginal: "https://pubmed.ncbi.nlm.nih.gov/?term=muscle+hypertrophy+protein+synthesis",
    icone: Dumbbell,
    resumo: "A nutrição correta dita o crescimento muscular. O músculo se constrói no descanso e no prato, não apenas no treino.",
    conteudo: "Para ocorrer a hipertrofia real, a Síntese de Proteína Muscular (MPS) precisa superar a quebra. Isso depende de um pilar inegociável: ingestão adequada de aminoácidos essenciais, especialmente a Leucina. Fracionar o consumo de proteínas de alto valor biológico (30 a 40g por refeição) otimiza imediatamente a via mTORC1, principal sinalizadora do crescimento. Sem esse ambiente nutricional favorável, o esforço brutal na academia pode gerar apenas catabolismo."
  }
];

export const ArtigosRecentes = () => {
  const [artigoAberto, setArtigoAberto] = useState(null);

  useEffect(() => {
    if (artigoAberto) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
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

        {/* Modal Apparition (REACT PORTAL) */}
        {artigoAberto && typeof window !== 'undefined' && createPortal(
            <div onClick={() => setArtigoAberto(null)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', zIndex: 999999, overflowY: 'auto', backdropFilter: 'blur(5px)' }}>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem 2rem' }}>
                    <div onClick={e => e.stopPropagation()} style={{ background: '#ffffff', width: '100%', maxWidth: '1050px', position: 'relative', borderRadius: '24px', padding: '3rem', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', isolation: 'isolate', border: 'none' }}>
                        
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ background: 'rgba(212,175,55,0.1)', padding: '1rem', borderRadius: '16px', color: 'var(--dourado)', flexShrink: 0 }}>
                                    <artigoAberto.icone size={32} />
                                </div>
                                <h2 style={{ margin: 0, color: '#1B2745', fontSize: '1.6rem', lineHeight: 1.3, fontWeight: 800 }}>{artigoAberto.titulo}</h2>
                            </div>
                            <button 
                                onClick={() => setArtigoAberto(null)}
                                style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, opacity: 0.6, transition: 'opacity 0.2s' }}
                                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                                onMouseLeave={e => e.currentTarget.style.opacity = 0.6}
                            >
                                <X size={26} color="#1B2745" />
                            </button>
                        </div>
                        
                        <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem', borderLeft: '4px solid #1B2745' }}>
                            <p style={{ color: '#1B2745', fontSize: '1.05rem', margin: 0, fontWeight: 500, lineHeight: 1.5 }}>{artigoAberto.resumo}</p>
                        </div>

                        <div style={{ color: '#444444', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '2rem' }}>
                            {artigoAberto.conteudo}
                        </div>
                        
                        {/* Referência da Origem */}
                        <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                            <h4 style={{ margin: '0 0 0.5rem 0', color: '#1B2745', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                               <BookOpen size={20}/> Referência Científica
                            </h4>
                            <p style={{ margin: '0 0 1rem 0', color: '#64748B', fontSize: '0.95rem', fontStyle: 'italic', lineHeight: 1.5 }}>
                              Tópico ou base do estudo: <strong>{artigoAberto.artigoOriginal}</strong>
                            </p>
                            <a href={artigoAberto.linkOriginal} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--dourado)', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>
                               Pesquisar indexação completa em: {artigoAberto.fonte} <ExternalLink size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>, document.body
        )}
      </div>
    </section>
  );
};
