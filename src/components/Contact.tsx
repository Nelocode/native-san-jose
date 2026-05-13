import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contacto" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--native-bg)', color: 'var(--native-white)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Gradient */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1000px',
        height: '1000px',
        background: 'radial-gradient(circle, rgba(176, 164, 109, 0.03) 0%, transparent 70%)',
        pointerEvents: 'none'
      }}></div>

      <div className="container">
        <div className="contact-grid">
          
          {/* Headline Side */}
          <div className="contact-info">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="label-gold"
            >
              Exclusividad & Legado
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
              style={{ fontSize: '1.2rem', maxWidth: '450px', opacity: 0.6, lineHeight: 1.6, marginBottom: '60px', fontWeight: 300 }}
            >
              Únete a un grupo selecto de propietarios que valoran la naturaleza, el diseño y la tranquilidad en el corazón de Antioquia.
            </motion.p>

            <div className="contact-details">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <span className="detail-label">CONSULTAS DIRECTAS</span>
                <span className="detail-value">hola@nativesanjose.com</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <span className="detail-label">ASISTENCIA COMERCIAL</span>
                <span className="detail-value">+57 300 NATIVE JS</span>
              </motion.div>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-panel contact-card"
            >
              <form style={{ display: 'grid', gap: '40px' }}>
                <div className="fancy-input">
                  <input type="text" required placeholder=" " />
                  <label>Nombre Completo</label>
                  <div className="bar" />
                </div>

                <div className="fancy-input">
                  <input type="email" required placeholder=" " />
                  <label>Email de Contacto</label>
                  <div className="bar" />
                </div>

                <div className="fancy-input">
                  <textarea placeholder=" " rows={1}></textarea>
                  <label>Mensaje (Opcional)</label>
                  <div className="bar" />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-premium" 
                  style={{ width: '100%', marginTop: '20px' }}
                >
                  SOLICITAR DOSSIER
                </motion.button>
              </form>
            </motion.div>
          </div>

        </div>

        <footer className="site-footer">
          <div className="footer-top">
            {/* Logos: Native + TuLote */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
              <img src="/assets/logo.webp" alt="Native" className="footer-logo" />
              <div style={{ width: '1px', height: '28px', background: 'rgba(176,164,109,0.2)', flexShrink: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '0.5rem', letterSpacing: '4px', opacity: 0.35, fontWeight: 700, textTransform: 'uppercase' }}>Desarrollado por</span>
                <img
                  src="/assets/tulote-logo.png"
                  alt="TuLote Oriente"
                  style={{ height: '30px', width: 'auto', display: 'block', opacity: 0.65, filter: 'brightness(1.5) saturate(0.3)' }}
                />
              </div>
            </div>
            <div className="footer-nav">
              <a href="#hero">INICIO</a>
              <a href="#proyecto">PROYECTO</a>
              <a href="#amenidades">AMENIDADES</a>
              <a href="#ubicacion">UBICACIÓN</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="copyright">NATIVE SAN JOSÉ © 2026 · DISEÑO &amp; NATURALEZA</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', opacity: 0.35, fontSize: '0.5rem', fontWeight: 700, letterSpacing: '2px' }}>
              <span>Creado con ❤️ por</span>
              <a href="https://www.contextoarquitectura.com/" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--native-gold)', textDecoration: 'none', letterSpacing: '2px', fontWeight: 800, opacity: 1 }}>
                CNTXT
              </a>
              <span>en Medellín</span>
            </div>
            <span className="location-tag">GUARNE, ANTIOQUIA · COLOMBIA</span>
          </div>
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 60px;
          align-items: flex-start;
        }
        .contact-info {
          grid-column: 1 / span 6;
        }
        .contact-form-container {
          grid-column: 8 / span 5;
        }
        .contact-card {
          padding: 80px 60px;
          border-radius: 0;
        }
        .contact-details {
          display: grid;
          gap: 40px;
        }
        .detail-label {
          display: block;
          font-size: 0.6rem;
          font-weight: 800;
          color: var(--native-gold);
          letter-spacing: 4px;
          margin-bottom: 12px;
        }
        .detail-value {
          font-size: 1.4rem;
          font-weight: 300;
          letter-spacing: -0.5px;
        }

        /* Fancy Inputs */
        .fancy-input {
          position: relative;
        }
        .fancy-input input, .fancy-input textarea {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding: 15px 0;
          color: white;
          font-size: 1rem;
          outline: none;
          font-family: var(--font-accent);
          transition: var(--transition);
        }
        .fancy-input label {
          position: absolute;
          top: 15px;
          left: 0;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          pointer-events: none;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fancy-input input:focus ~ label,
        .fancy-input input:not(:placeholder-shown) ~ label,
        .fancy-input textarea:focus ~ label,
        .fancy-input textarea:not(:placeholder-shown) ~ label {
          top: -15px;
          font-size: 0.5rem;
          color: var(--native-gold);
        }
        .fancy-input .bar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--native-gold);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fancy-input input:focus ~ .bar,
        .fancy-input textarea:focus ~ .bar {
          width: 100%;
        }

        /* Footer Styles */
        .site-footer {
          margin-top: 180px;
          padding: 80px 0 40px;
          border-top: 1px solid rgba(176, 164, 109, 0.1);
        }
        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 60px;
        }
        .footer-logo {
          height: 35px;
          opacity: 0.8;
          filter: brightness(1.2);
        }
        .footer-nav {
          display: flex;
          gap: 40px;
        }
        .footer-nav a {
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 3px;
          color: white;
          text-decoration: none;
          opacity: 0.4;
          transition: var(--transition);
        }
        .footer-nav a:hover {
          opacity: 1;
          color: var(--native-gold);
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 3px;
          opacity: 0.2;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 80px;
          }
          .contact-info, .contact-form-container {
            grid-column: 1 / -1;
          }
          .contact-card {
            padding: 60px 40px;
          }
          .footer-top {
            flex-direction: column;
            gap: 40px;
            text-align: center;
          }
          .footer-nav {
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
      `}} />
    </section>
  );
};

export default Contact;

