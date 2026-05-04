import React from 'react';
import { motion } from 'framer-motion';

const Concept: React.FC = () => {
  return (
    <section id="proyecto" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--native-bg)', position: 'relative', overflow: 'hidden' }}>
      <div className="container">

        {/* BLOQUE 1: Título "Filosofía Native" — aparece primero, pantalla completa */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          style={{ marginBottom: '120px' }}
        >
          <span className="label-gold">Filosofía Native</span>
          <h2 className="title-lg" style={{ marginBottom: '20px', maxWidth: '900px' }}>
            El equilibrio entre el <br />
            <span className="text-outline">SILENCIO</span> y la <span className="text-gold">CONEXIÓN</span>
          </h2>
        </motion.div>

        {/* BLOQUE 2: Imagen + Panel Origen/Pertenencia/Legado — aparece después */}
        <div className="concept-media-grid">
          {/* Panel Origen / Pertenencia / Legado — izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="glass-panel"
            style={{
              padding: '60px 50px'
            }}
          >
            <div style={{ display: 'grid', gap: '40px' }}>
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

          {/* Imagen grande — derecha */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            style={{ position: 'relative' }}
          >
            <img
              src="/assets/porteria.webp"
              alt="Portería y Ermita"
              style={{ width: '100%', height: '600px', objectFit: 'cover', opacity: 0.8 }}
            />
            <div style={{
              position: 'absolute',
              bottom: '40px',
              right: '-20px',
              padding: '40px',
              backgroundColor: 'var(--native-gold)',
              color: 'var(--native-bg)',
              zIndex: 4,
              maxWidth: '280px'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>ORATORIO // ERMITA</h3>
              <p style={{ fontSize: '0.7rem', marginTop: '10px', fontWeight: 500 }}>Un espacio de pausa consciente en el corazón del bosque.</p>
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
