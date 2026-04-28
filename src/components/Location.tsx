import React from 'react';
import { motion } from 'framer-motion';

const Location: React.FC = () => {
  const points = [
    { time: '15 MIN', desc: 'Aeropuerto J.M.C' },
    { time: '23 MIN', desc: 'Casco Urbano Guarne' },
    { time: '35 MIN', desc: 'Medellín (Túnel)' }
  ];

  return (
    <section id="ubicacion" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--native-bg)', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px' }}>
          
          {/* Text Content */}
          <div style={{ gridColumn: '1 / span 5', zIndex: 2 }}>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="label-gold"
            >
              Conectividad
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="title-lg" 
              style={{ marginBottom: '60px' }}
            >
              Cerca de TODO, <br />
              lejos del <span className="text-outline">RUIDO</span>
            </motion.h2>

            <div style={{ display: 'grid', gap: '50px' }}>
              {points.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  style={{ display: 'flex', alignItems: 'baseline', gap: '30px' }}
                >
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--native-gold)', fontVariantNumeric: 'tabular-nums' }}>
                    {item.time.split(' ')[0]}
                  </span>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--native-gold)', fontWeight: 700, letterSpacing: '2px', display: 'block' }}>MINUTOS</span>
                    <span style={{ fontSize: '1rem', opacity: 0.6, fontWeight: 500 }}>{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium" 
              style={{ marginTop: '80px' }}
            >
              Explorar Mapa
            </motion.button>
          </div>

          {/* Map Visualization Area */}
          <div style={{ gridColumn: '7 / span 6', position: 'relative', height: '800px' }}>
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              style={{ 
                width: '100%', 
                height: '100%', 
                backgroundColor: 'var(--native-forest)',
                border: '1px solid rgba(176, 164, 109, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Stylized Map Grid Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(var(--native-gold) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                opacity: 0.1
              }}></div>

              {/* Central Marker */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center'
              }}>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{
                    width: '100px',
                    height: '100px',
                    border: '1px solid var(--native-gold)',
                    borderRadius: '50%',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div style={{ width: '10px', height: '10px', backgroundColor: 'var(--native-gold)', borderRadius: '50%' }}></div>
                </motion.div>
                <span style={{ display: 'block', marginTop: '20px', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '4px', color: 'var(--native-gold)' }}>NATIVE</span>
              </div>

              {/* Decorative Coordinates */}
              <div style={{ position: 'absolute', bottom: '40px', left: '40px', fontFamily: 'monospace', fontSize: '0.7rem', opacity: 0.3 }}>
                6° 17' 24" N / 75° 26' 38" W
              </div>
            </motion.div>

            {/* Floating Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-panel"
              style={{
                position: 'absolute',
                top: '10%',
                right: '-5%',
                padding: '40px',
                width: '300px',
                zIndex: 3
              }}
            >
              <h4 style={{ color: 'var(--native-gold)', marginBottom: '15px', fontSize: '0.9rem' }}>UBICACIÓN PRIVILEGIADA</h4>
              <p style={{ fontSize: '0.8rem', opacity: 0.7, lineHeight: 1.8 }}>
                Localizado en la Vereda San José, Guarne. Una zona de alta valorización y reserva natural.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;

