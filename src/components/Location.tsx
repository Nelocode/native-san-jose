import React from 'react';
import { motion } from 'framer-motion';

const Location: React.FC = () => {
  const points = [
    { time: '15', desc: 'Aeropuerto J.M.C', label: 'INTERNACIONAL' },
    { time: '23', desc: 'Casco Urbano Guarne', label: 'COMERCIO' },
    { time: '35', desc: 'Medellín (Túnel)', label: 'CIUDAD' }
  ];

  return (
    <section id="ubicacion" style={{ backgroundColor: 'var(--native-bg)', position: 'relative', overflow: 'hidden' }}>

      {/* Background Decorative Text */}
      <div style={{
        position: 'absolute',
        top: '5%',
        right: '-5%',
        fontSize: '20vw',
        fontWeight: 900,
        color: 'white',
        opacity: 0.02,
        pointerEvents: 'none',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        zIndex: 0
      }}>
        LOCATION
      </div>

      {/* ── BLOQUE TEXTO ── */}
      <div className="container" style={{ padding: 'var(--section-padding)', paddingBottom: '80px', position: 'relative', zIndex: 1 }}>

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="label-gold"
        >
          Conectividad Estratégica
        </motion.span>

        {/* ── Título + Tiempos en columnas ── */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '60px',
          flexWrap: 'wrap',
          marginBottom: '60px'
        }}>

          {/* Título — izquierda */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="title-lg"
            style={{ flex: '1 1 340px', margin: 0 }}
          >
            Cerca de TODO, <br />
            lejos del <span className="text-outline">RUIDO</span>
          </motion.h2>

          {/* Tiempos — derecha */}
          <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: '28px', paddingTop: '8px' }}>
            {points.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                className="connectivity-item"
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                  {/* Número + mins */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
                    <span style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--native-gold)', lineHeight: 1 }}>
                      {item.time}
                    </span>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--native-gold)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                      mins
                    </span>
                  </div>
                  {/* Descripción */}
                  <div>
                    <span style={{ fontSize: '0.6rem', color: 'var(--native-gold)', fontWeight: 800, letterSpacing: '3px', display: 'block' }}>
                      {item.label}
                    </span>
                    <span style={{ fontSize: '0.95rem', color: 'var(--native-white)', fontWeight: 300, opacity: 0.8 }}>
                      {item.desc}
                    </span>
                  </div>
                </div>
                <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, var(--native-gold) 0%, transparent 100%)', opacity: 0.2, marginTop: '10px' }} />
              </motion.div>
            ))}
          </div>

        </div>

      </div>

      {/* ── PLANTA COMERCIAL FULL WIDTH ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{ position: 'relative', width: '100%', zIndex: 1, overflow: 'hidden' }}
      >
        {/* Imagen */}
        <img
          src="/assets/planta-comercial.png"
          alt="Planta Comercial Native San José"
          style={{
            width: '100%',
            display: 'block',
            objectFit: 'contain'
          }}
        />

        {/* Filtro verde — integra la imagen con la paleta del sitio */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(160deg, rgba(6,28,15,0.72) 0%, rgba(10,40,20,0.55) 50%, rgba(6,28,15,0.72) 100%)',
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
          zIndex: 1
        }} />

        {/* Viñeta de bordes */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(4,12,8,0.8) 100%)',
          pointerEvents: 'none',
          zIndex: 2
        }} />

        {/* Círculos pulsantes centrados */}
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            animate={{ scale: [1, 1.5, 1], opacity: [0.06, 0.2, 0.06] }}
            transition={{ duration: 4, delay: ring, repeat: Infinity }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: `${ring * 100}px`,
              height: `${ring * 100}px`,
              border: '1px solid var(--native-gold)',
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 3
            }}
          />
        ))}

        {/* Marcador central */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 4
        }}>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '40px',
              height: '40px',
              background: 'var(--native-gold)',
              clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)'
            }}
          />
          <span style={{ fontSize: '0.65rem', letterSpacing: '4px', fontWeight: 800, color: 'var(--native-gold)' }}>
            NATIVE
          </span>
        </div>

        {/* Card info + coordenadas — esquina inferior izquierda */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="location-info-cluster"
        >
          <div className="glass-panel" style={{ padding: '30px 40px' }}>
            <h4 style={{ color: 'var(--native-gold)', marginBottom: '10px', fontSize: '0.85rem', letterSpacing: '2px' }}>
              GUARNE, ANTIOQUIA
            </h4>
            <p style={{ fontSize: '0.8rem', opacity: 0.7, lineHeight: 1.8, fontWeight: 300 }}>
              Un enclave natural estratégicamente ubicado para ofrecer la paz del campo con la agilidad de la ciudad.
            </p>
          </div>

          {/* Coordenadas — debajo del recuadro */}
          <div style={{ opacity: 0.5, paddingLeft: '4px' }}>
            <div style={{ fontSize: '0.7rem', letterSpacing: '2px', fontWeight: 500 }}>6° 17' 24" N / 75° 26' 38" W</div>
            <div style={{ fontSize: '0.7rem', letterSpacing: '2px', fontWeight: 500, marginTop: '4px' }}>ALT. 2.150 MSNM</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Botón — debajo de la imagen, centrado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ display: 'flex', justifyContent: 'center', padding: '60px 0', position: 'relative', zIndex: 1 }}
      >
        <motion.button
          whileHover={{ scale: 1.02, x: 10 }}
          whileTap={{ scale: 0.98 }}
          className="btn-premium"
        >
          Ver Mapa Interactivo
        </motion.button>
      </motion.div>

    </section>
  );
};

export default Location;
