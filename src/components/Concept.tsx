import React from 'react';
import { motion } from 'framer-motion';

const Concept: React.FC = () => {
  return (
    <section id="proyecto" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--native-bg)', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '20px', alignItems: 'center' }}>
          
          {/* Main Title - Spanning multiple columns */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            style={{ gridColumn: '1 / span 8', zIndex: 3 }}
          >
            <span className="label-gold">Filosofía Native</span>
            <h2 className="title-lg" style={{ marginBottom: '40px' }}>
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
            style={{ gridColumn: '6 / span 7', gridRow: '1 / span 2', position: 'relative' }}
          >
            <img 
              src="/assets/porteria.png" 
              alt="Portería y Ermita" 
              style={{ 
                width: '100%', 
                height: '800px',
                objectFit: 'cover',
                opacity: 0.8
              }} 
            />
            <div style={{
              position: 'absolute',
              bottom: '40px',
              right: '-20px',
              padding: '40px',
              backgroundColor: 'var(--native-gold)',
              color: 'var(--native-bg)',
              zIndex: 4,
              maxWidth: '300px'
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>ORATORIO // ERMITA</h3>
              <p style={{ fontSize: '0.8rem', marginTop: '10px', fontWeight: 500 }}>Un espacio de pausa consciente en el corazón del bosque.</p>
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
              gridColumn: '1 / span 5', 
              gridRow: '2', 
              padding: '60px', 
              zIndex: 5,
              marginTop: '-100px'
            }}
          >
            <div style={{ display: 'grid', gap: '40px' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--native-gold)', marginBottom: '15px' }}>ORIGEN</h3>
                <p style={{ opacity: 0.7, fontSize: '1rem' }}>
                  Native nace de la tierra. Un proyecto que honra el bosque nativo de Guarne, integrando la arquitectura con la topografía original.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--native-gold)', marginBottom: '15px' }}>PERTENENCIA</h3>
                <p style={{ opacity: 0.7, fontSize: '1rem' }}>
                  No es solo un lugar para vivir, es una comunidad de quienes valoran el silencio sin renunciar a la proximidad urbana.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--native-gold)', marginBottom: '15px' }}>LEGADO</h3>
                <p style={{ opacity: 0.7, fontSize: '1rem' }}>
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

