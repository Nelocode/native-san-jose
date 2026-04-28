import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contacto" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--native-bg)', color: 'var(--native-white)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px' }}>
          
          {/* Headline Side */}
          <div style={{ gridColumn: '1 / span 6' }}>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="label-gold"
            >
              Exclusividad
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="title-lg" 
              style={{ marginBottom: '40px' }}
            >
              Comienza <br />
              tu <span className="text-gold">LEGADO</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{ fontSize: '1.2rem', maxWidth: '450px', opacity: 0.6, lineHeight: 1.5, marginBottom: '60px' }}
            >
              Únete a un grupo selecto de propietarios que valoran la naturaleza, el diseño y la tranquilidad.
            </motion.p>

            <div style={{ display: 'grid', gap: '40px' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, color: 'var(--native-gold)', letterSpacing: '4px', marginBottom: '10px' }}>CONSULTAS</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 300 }}>hola@nativesanjose.com</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, color: 'var(--native-gold)', letterSpacing: '4px', marginBottom: '10px' }}>PBX</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 300 }}>+57 300 NATIVE JS</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div style={{ gridColumn: '8 / span 5' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="glass-panel"
              style={{ padding: '80px 60px' }}
            >
              <form style={{ display: 'grid', gap: '50px' }}>
                <div className="input-group">
                  <input 
                    type="text" 
                    required 
                    placeholder=" "
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.1)',
                      padding: '15px 0',
                      color: 'white',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                  <label style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.3)',
                    marginTop: '10px',
                    display: 'block'
                  }}>Nombre Completo</label>
                </div>

                <div className="input-group">
                  <input 
                    type="email" 
                    required 
                    placeholder=" "
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.1)',
                      padding: '15px 0',
                      color: 'white',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                  <label style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.3)',
                    marginTop: '10px',
                    display: 'block'
                  }}>Email corporativo</label>
                </div>

                <div className="input-group">
                  <textarea 
                    placeholder=" "
                    rows={1}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.1)',
                      padding: '15px 0',
                      color: 'white',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'none'
                    }}
                  ></textarea>
                  <label style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.3)',
                    marginTop: '10px',
                    display: 'block'
                  }}>Mensaje (Opcional)</label>
                </div>

                <button className="btn-premium" style={{ width: '100%', marginTop: '20px' }}>
                  Solicitar Dossier
                </button>
              </form>
            </motion.div>
          </div>

        </div>

        <div style={{ marginTop: '200px', padding: '40px 0', borderTop: '1px solid rgba(176, 164, 109, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src="/assets/logo.png" alt="Native" style={{ height: '30px', opacity: 0.5 }} />
          <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '4px', opacity: 0.3 }}>NATIVE SAN JOSÉ © 2026 · ANTIOQUIA, COLOMBIA</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;

