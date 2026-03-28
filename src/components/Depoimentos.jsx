import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCheck, MessageCircle } from 'lucide-react';

export function Depoimentos() {
  return (
    <section id="depoimentos" style={{ padding: '6rem 5%', backgroundColor: '#FAF9F6', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '2.8rem', color: '#1D2951', marginBottom: '1rem', fontWeight: 800 }}>Pacientes Reais. Resultados Inegáveis.</h2>
          <p style={{ fontSize: '1.1rem', color: '#555', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>Na AuraVie, a verdadeira ciência dos resultados se estende muito além da teoria. Veja reações espontâneas de pacientes que redobraram sua capacidade biológica.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {/* Google Review Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid #EAEAEA',
              boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                 <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#4285F4', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>M</div>
                 <div>
                    <h4 style={{ color: '#333', margin: 0, fontSize: '1rem' }}>Marcos Oliveira</h4>
                    <span style={{ fontSize: '0.8rem', color: '#777' }}>Local Guide · 14 avaliações</span>
                 </div>
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="24" />
            </div>
            <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
              {[...Array(5)].map((_, idx) => <Star key={idx} size={16} color="#FBBC04" fill="#FBBC04" />)}
              <span style={{ fontSize: '0.85rem', color: '#777', marginLeft: '6px' }}>há 2 semanas</span>
            </div>
            <p style={{ color: '#444', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1 }}>
              "Cheguei no consultório do Dr. Francisco sem energia, com névoa mental e metabolismo travado. Com o tratamento guiado por exames precisos e as terapias injetáveis, sinto que rejuvenesci 10 anos. Minha disposição no trabalho mudou da água pro vinho. O protocolo BioARch não é estética, é resgate de vida."
            </p>
          </motion.div>

          {/* WhatsApp Print 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              backgroundColor: '#EAE6DF', // Fundo padrão WhatsApp papel de parede claro
              backgroundImage: 'url("https://w0.peakpx.com/wallpaper/818/148/HD-wallpaper-whatsapp-background-cool-dark-green-new-theme-whatsapp.jpg")',
              backgroundSize: 'cover',
              backgroundBlendMode: 'overlay',
              borderRadius: '16px',
              padding: '1.5rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '12px 15px', background: '#075E54', color: 'white', display: 'flex', alignItems: 'center', gap: '10px', zIndex: 2 }}>
               <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#ccc', overflow: 'hidden' }}>
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
               </div>
               <div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Ana S. (Paciente Lipe...)</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>online</div>
               </div>
            </div>
            
            <div style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', gap: '10px', zIndex: 1 }}>
                <div style={{ alignSelf: 'flex-start', background: '#FFFFFF', padding: '10px 14px', borderRadius: '0 12px 12px 12px', maxWidth: '85%', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                   <p style={{ color: '#303030', fontSize: '0.95rem', margin: 0 }}>Dr, passando pra atualizar! Fui provar uma calça que não entrava há 2 anos e fechou com sobra! 😭🙌</p>
                   <span style={{ fontSize: '0.65rem', color: '#999', float: 'right', marginTop: '4px' }}>14:20</span>
                </div>
                <div style={{ alignSelf: 'flex-start', background: '#FFFFFF', padding: '10px 14px', borderRadius: '0 12px 12px 12px', maxWidth: '85%', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                   <p style={{ color: '#303030', fontSize: '0.95rem', margin: 0 }}>As dores nas pernas sumiram completamente depois daquela última infusão. Não tenho nem palavras pra agradecer o método BioARch.</p>
                   <span style={{ fontSize: '0.65rem', color: '#999', float: 'right', marginTop: '4px' }}>14:21</span>
                </div>
                <div style={{ alignSelf: 'flex-end', background: '#DCF8C6', padding: '10px 14px', borderRadius: '12px 0 12px 12px', maxWidth: '85%', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                   <p style={{ color: '#303030', fontSize: '0.95rem', margin: 0 }}>Ana, que notícia fantástica! O mérito é da sua disciplina. Nos vemos no retorno da semana que vem! 🚀</p>
                   <span style={{ fontSize: '0.65rem', color: '#999', float: 'right', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>14:45 <CheckCheck size={14} color="#34B7F1"/></span>
                </div>
            </div>
          </motion.div>

          {/* WhatsApp Print 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              backgroundColor: '#EAE6DF',
              backgroundImage: 'url("https://w0.peakpx.com/wallpaper/818/148/HD-wallpaper-whatsapp-background-cool-dark-green-new-theme-whatsapp.jpg")',
              backgroundSize: 'cover',
              backgroundBlendMode: 'overlay',
              borderRadius: '16px',
              padding: '1.5rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '12px 15px', background: '#075E54', color: 'white', display: 'flex', alignItems: 'center', gap: '10px', zIndex: 2 }}>
               <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#ccc', overflow: 'hidden' }}>
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
               </div>
               <div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Julio C. (Implante/V...)</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>online</div>
               </div>
            </div>
            
            <div style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', gap: '10px', zIndex: 1 }}>
                <div style={{ alignSelf: 'flex-start', background: '#FFFFFF', padding: '10px 14px', borderRadius: '0 12px 12px 12px', maxWidth: '85%', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                   <p style={{ color: '#303030', fontSize: '0.95rem', margin: 0 }}>Cara, bati meu recorde hoje no treino. Já tinha perdido 18kg com vocês, mas a colocação do implante na semana passada foi a cereja.</p>
                   <span style={{ fontSize: '0.65rem', color: '#999', float: 'right', marginTop: '4px' }}>09:12</span>
                </div>
                <div style={{ alignSelf: 'flex-start', background: '#FFFFFF', padding: '10px 14px', borderRadius: '0 12px 12px 12px', maxWidth: '85%', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                   <p style={{ color: '#303030', fontSize: '0.95rem', margin: 0 }}>A libido voltou pro teto e a recuperação muscular tá absurda. Nunca imaginei que a medicina chegasse nesse nível.</p>
                   <span style={{ fontSize: '0.65rem', color: '#999', float: 'right', marginTop: '4px' }}>09:13</span>
                </div>
                 <div style={{ alignSelf: 'flex-end', background: '#DCF8C6', padding: '10px 14px', borderRadius: '12px 0 12px 12px', maxWidth: '85%', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                   <p style={{ color: '#303030', fontSize: '0.95rem', margin: 0 }}>Animal, Julio! Os marcadores no sangue já mostravam que seu corpo ia decolar. Bora pra cima!</p>
                   <span style={{ fontSize: '0.65rem', color: '#999', float: 'right', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>11:04 <CheckCheck size={14} color="#34B7F1"/></span>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
