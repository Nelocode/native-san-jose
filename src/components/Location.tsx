import React from 'react';
import { motion } from 'framer-motion';

const Location: React.FC = () => {
  const points = [
    { time: '15 MIN', desc: 'Aeropuerto J.M.C', label: 'INTERNACIONAL' },
    { time: '23 MIN', desc: 'Casco Urbano Guarne', label: 'COMERCIO' },
    { time: '35 MIN', desc: 'Medellín (Túnel)', label: 'CIUDAD' }
  ];

  return (
    <section id="ubicacion" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--native-bg)', position: 'relative', overflow: 'hidden' }}>
      {/* Background Decorative Text */}
      <div style={{ 
        position: 'absolute', 
        top: '10%', 
        right: '-5%', 
        fontSize: '20vw', 
        fontWeight: 900, 
        color: 'white', 
        opacity: 0.02, 
        pointerEvents: 'none',
        lineHeight: 1,
        whiteSpace: 'nowrap'
      }}>
        LOCATION
      </div>

      <div className="container">
        <div className="location-grid">
          
          {/* Text Content */}
          <div className="location-text">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="label-gold"
            >
              Conectividad Estratégica
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

            <div style={{ display: 'grid', gap: '40px' }}>
              {points.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="connectivity-item"
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px' }}>
                    <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--native-gold)', fontVariantNumeric: 'tabular-nums', lineHeight: 1 }}>
                      {item.time.split(' ')[0]}
                    </span>
                    <div>
                      <span style={{ fontSize: '0.6rem', color: 'var(--native-gold)', fontWeight: 800, letterSpacing: '3px', display: 'block' }}>{item.label}</span>
                      <span style={{ fontSize: '1.1rem', color: 'var(--native-white)', fontWeight: 300, opacity: 0.8 }}>{item.desc}</span>
                    </div>
                  </div>
                  <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, var(--native-gold) 0%, transparent 100%)', opacity: 0.2, marginTop: '15px' }} />
                </motion.div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.02, x: 10 }}
              whileTap={{ scale: 0.98 }}
              className="btn-premium" 
              style={{ marginTop: '60px' }}
            >
              Ver Mapa Interactivo
            </motion.button>
          </div>

          {/* Map Visualization Area */}
          <div className="location-map-container">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="map-visual"
            >
              {/* Cinematic Background */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, var(--native-forest) 0%, var(--native-bg) 100%)',
                opacity: 0.8
              }}></div>

              {/* Topographic Grid */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(rgba(176, 164, 109, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(176, 164, 109, 0.05) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
              }}></div>

              {/* Pulsing Circles */}
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 4, delay: ring, repeat: Infinity }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: `${ring * 200}px`,
                    height: `${ring * 200}px`,
                    border: '1px solid var(--native-gold)',
                    borderRadius: '50%',
                    pointerEvents: 'none'
                  }}
                />
              ))}

              {/* Central Marker */}
              <div className="map-marker">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'var(--native-gold)',
                    clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)',
                    margin: '0 auto'
                  }}
                />
                <span className="marker-label">NATIVE</span>
              </div>

              {/* Map UI Elements */}
              <div className="map-ui-bottom">
                <div className="coord">6° 17' 24" N / 75° 26' 38" W</div>
                <div className="alt">ALT. 2.150 MSNM</div>
              </div>
            </motion.div>

            {/* Floating Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="glass-panel map-info-card"
            >
              <h4 style={{ color: 'var(--native-gold)', marginBottom: '15px', fontSize: '0.9rem', letterSpacing: '2px' }}>GUARNE, ANTIOQUIA</h4>
              <p style={{ fontSize: '0.8rem', opacity: 0.7, lineHeight: 1.8, fontWeight: 300 }}>
                Un enclave natural estratégicamente ubicado para ofrecer la paz del campo con la agilidad de la ciudad.
              </p>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Location;

