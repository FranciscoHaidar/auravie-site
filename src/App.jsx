import React, { useState, useEffect, Suspense, lazy } from 'react';
import { supabase } from './supabase';
import './index.css';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { PreFooterCTA } from './components/PreFooterCTA';
import { StickyMobileCTA } from './components/StickyMobileCTA';

const Problema = lazy(() => import('./components/Problema').then(m => ({ default: m.Problema })));
const Medico = lazy(() => import('./components/Medico').then(m => ({ default: m.Medico })));
const Jornada = lazy(() => import('./components/Jornada').then(m => ({ default: m.Jornada })));
const QuizBioARch = lazy(() => import('./components/QuizBioARch'));
const QuizVitalidade = lazy(() => import('./components/QuizVitalidade'));
const Planos = lazy(() => import('./components/Planos').then(m => ({ default: m.Planos })));
const Atuacao = lazy(() => import('./components/Atuacao').then(m => ({ default: m.Atuacao })));
const Faq = lazy(() => import('./components/Faq').then(m => ({ default: m.Faq })));
const ArtigosRecentes = lazy(() => import('./components/ArtigosRecentes').then(m => ({ default: m.ArtigosRecentes })));
const Depoimentos = lazy(() => import('./components/Depoimentos').then(m => ({ default: m.Depoimentos })));
const AntesDepois = lazy(() => import('./components/AntesDepois').then(m => ({ default: m.AntesDepois })));
const Contato = lazy(() => import('./components/Contato'));
const ExitIntentPopup = lazy(() => import('./components/ExitIntentPopup'));

function App() {
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

  return (
    <>
      <Navbar instagramLink={INSTAGRAM_LINK} whatsappLink={WHATSAPP_LINK} />
      <Hero siteConfig={siteConfig} whatsappLink={WHATSAPP_LINK} />
      
      <Suspense fallback={
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '15vh', gap: '1rem', marginTop: '2rem' }}>
          <div className="spinner" style={{ width: '36px', height: '36px', border: '3px solid rgba(212,175,55,0.2)', borderTopColor: 'var(--dourado)' }}></div>
          <span style={{ color: 'var(--primary-dark)', fontSize: '0.85rem', fontWeight: 600, opacity: 0.6, letterSpacing: '2px', textTransform: 'uppercase' }}>Otimizando Componentes...</span>
        </div>
      }>
        <Problema />
        <Medico siteConfig={siteConfig} />
        <Jornada />
        <QuizBioARch whatsappNumber={siteConfig.whatsapp_number} />
        <Planos whatsappNumber={siteConfig.whatsapp_number} />
        <Contato siteConfig={siteConfig} />
        <Atuacao />
        <QuizVitalidade whatsappNumber={siteConfig.whatsapp_number} />
        <ArtigosRecentes />
        <Depoimentos />
        <AntesDepois />
        <Faq />
        <ExitIntentPopup />
      </Suspense>

      <PreFooterCTA whatsappLink={WHATSAPP_LINK} />
      <Footer instagramLink={INSTAGRAM_LINK} whatsappLink={WHATSAPP_LINK} />
      <FloatingActions instagramLink={INSTAGRAM_LINK} whatsappLink={WHATSAPP_LINK} />
      <StickyMobileCTA whatsappLink={WHATSAPP_LINK} />
    </>
  );
}

export default App;
