import React from 'react';
import { motion } from 'framer-motion';

const Concept: React.FC = () => {
  return (
    <section id="proyecto" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--native-bg)', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 1024 ? 'repeat(12, 1fr)' : '1fr', gap: '40px', alignItems: 'center' }}>
          
          {/* Main Title - Spanning multiple columns */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            style={{ gridColumn: window.innerWidth > 1024 ? '1 / span 8' : 'auto', zIndex: 3 }}
          >
            <span className="label-gold">Filosofía Native</span>
            <h2 className="title-lg" style={{ marginBottom: '20px' }}>
              El equilibrio entre el <br />
              <span className="text-outline">SILENCIO</span> y la <span className="text-gold">CONEXIÓN</span>
            </h2>
          </motion.div>

          {/* Large Image - Right Side - Asymmetric Offset */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            style={{ 
              gridColumn: window.innerWidth > 1024 ? '6 / span 7' : 'auto', 
              gridRow: window.innerWidth > 1024 ? '1 / span 2' : '1', 
              position: 'relative' 
            }}
          >
            <img 
              src="/assets/porteria.png" 
              alt="Portería y Ermita" 
              style={{ 
                width: '100%', 
                height: window.innerWidth > 768 ? '800px' : '400px',
                objectFit: 'cover',
                opacity: 0.8
              }} 
            />
            <div style={{
              position: 'absolute',
              bottom: window.innerWidth > 768 ? '40px' : '20px',
              right: window.innerWidth > 768 ? '-20px' : '10px',
              padding: window.innerWidth > 768 ? '40px' : '20px',
              backgroundColor: 'var(--native-gold)',
              color: 'var(--native-bg)',
              zIndex: 4,
              maxWidth: window.innerWidth > 768 ? '300px' : '200px'
            }}>
              <h3 style={{ fontSize: window.innerWidth > 768 ? '1.2rem' : '0.9rem', fontWeight: 800 }}>ORATORIO // ERMITA</h3>
              <p style={{ fontSize: '0.7rem', marginTop: '10px', fontWeight: 500 }}>Un espacio de pausa consciente en el corazón del bosque.</p>
            </div>
          </motion.div>

          {/* Description Block - Overlapping the Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="glass-panel"
            style={{ 
              gridColumn: window.innerWidth > 1024 ? '1 / span 5' : 'auto', 
              gridRow: window.innerWidth > 1024 ? '2' : 'auto', 
              padding: window.innerWidth > 768 ? '60px' : '30px', 
              zIndex: 5,
              marginTop: window.innerWidth > 1024 ? '-100px' : '0'
            }}
          >
            <div style={{ display: 'grid', gap: window.innerWidth > 768 ? '40px' : '30px' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--native-gold)', marginBottom: '10px' }}>ORIGEN</h3>
                <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>
                  Native nace de la tierra. Un proyecto que honra el bosque nativo de Guarne, integrando la arquitectura con la topografía original.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--native-gold)', marginBottom: '10px' }}>PERTENENCIA</h3>
                <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>
                  No es solo un lugar para vivir, es una comunidad de quienes valoran el silencio sin renunciar a la proximidad urbana.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--native-gold)', marginBottom: '10px' }}>LEGADO</h3>
                <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>
                  Diseñado para perdurar. Materiales nobles y arquitectura atemporal que respeta y protege su entorno natural.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical text */}
      <div style={{ 
        position: 'absolute', 
        left: '2%', 
        top: '50%', 
        transform: 'rotate(-90deg) translateY(-50%)', 
        fontSize: '0.7rem', 
        letterSpacing: '10px', 
        opacity: 0.2,
        fontWeight: 700
      }}>
        12.6 HECTÁREAS DE BOSQUE NATIVO
      </div>
    </section>
  );
};

export default Concept;

