import React from 'react';
import { motion } from 'framer-motion';

export function Faq() {
  const faqs = [
    {
      q: "O acompanhamento pode ser feito online ou apenas presencial?",
      a: "O método BioARch foi estruturado para atender pacientes sem barreiras geográficas. Nossas consultas podem ser realizadas de forma <strong>100% online por telemedicina</strong>, com atendimento para todo o Brasil e exterior, ou <strong>presencialmente</strong> em nossa sede na Região do Vale dos Sinos. Em ambas as modalidades, garantimos o mesmo padrão de excelência clínica, guias de exames e conduta terapêutica de precisão."
    },
    {
      q: "A clínica aceita convênio médico?",
      a: "Na AuraVie Concept, nossos atendimentos são exclusivamente particulares. Isso nos permite dedicar o tempo e a atenção integral que um mapeamento metabólico de alta precisão exige, sem as limitações de tempo impostas pelos convênios. No entanto, emitimos nota fiscal para que você possa solicitar o reembolso junto ao seu plano de saúde, e os exames laboratoriais solicitados podem ser realizados pelo seu convênio."
    },
    {
      q: "Qual a diferença entre o acompanhamento na AuraVie e ir apenas ao nutricionista?",
      a: "O trabalho médico nutrológico vai na raiz do problema. Enquanto o plano alimentar cuida do combustível, a nutrologia investiga e otimiza o \"motor\": seus hormônios, deficiências vitamínicas silenciosas e vias metabólicas. Nós realizamos diagnósticos médicos e prescrevemos tratamentos avançados (como terapias injetáveis e reposição hormonal) que atuam em sinergia com a sua nutrição para destravar resultados definitivos."
    },
    {
      q: "Como a Nutrologia e a Harmonização Corporal se conectam no meu tratamento?",
      a: "Acreditamos que a verdadeira estética começa de dentro para fora. Tratar a base metabólica, combater o estresse oxidativo e otimizar seus hormônios melhora drasticamente a qualidade da sua pele, a produção de colágeno e a durabilidade dos procedimentos estéticos. É a união da saúde celular com o refinamento facial."
    },
    {
      q: "Os exames laboratoriais estão inclusos no valor dos planos?",
      a: "Os planos incluem a avaliação clínica completa e a bioimpedância analítica realizadas na clínica. Os exames laboratoriais de sangue ou imagem são solicitados à parte, de forma totalmente individualizada conforme a sua necessidade, e você pode realizá-los no laboratório de sua preferência (utilizando seu plano de saúde, se desejar)."
    },
    {
      q: "Em quanto tempo começo a ver resultados na minha energia e corpo?",
      a: "A medicina de precisão não trabalha com promessas imediatistas irresponsáveis, mas sim com fisiologia. A maioria dos nossos pacientes relata uma melhora significativa na disposição, foco e qualidade do sono já nas primeiras semanas de ajuste metabólico e reposição de nutrientes. As mudanças na composição corporal tornam-se visíveis e consistentes ao longo dos primeiros meses de protocolo."
    },
    {
      q: "O tratamento é indicado para quem já treina pesado, como musculação e jiu-jitsu?",
      a: "Absolutamente. Para praticantes de atividades de alta intensidade, o desgaste oxidativo e a demanda nutricional são muito maiores. Nossos protocolos aceleram a recuperação muscular, previnem lesões e otimizam a hipertrofia e a performance no tatame ou na academia, ajustando o corpo para suportar e evoluir com a carga de treinos."
    }
  ];

  return (
    <section id="faq" className="section bg-offwhite">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Dúvidas Frequentes
        </motion.h2>
        <div style={{ maxWidth: '800px', margin: '3rem auto 0 auto' }}>
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="faq-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index }}
            >
              <h4>{faq.q}</h4>
              <p style={{ color: 'var(--text-grafite)', fontSize: '0.95rem'}} dangerouslySetInnerHTML={{ __html: faq.a }}></p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
