import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Phase = 'text' | 'fading' | 'logo';

const Hero: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('text');

  useEffect(() => {
    // Texto se mantiene 3.5s antes de empezar a desaparecer
    const t1 = setTimeout(() => setPhase('fading'), 3500);
    // Logo aparece 1.4s después (tiempo que tarda el fade-out)
    const t2 = setTimeout(() => setPhase('logo'), 3500 + 1400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const easing = [0.16, 1, 0.3, 1] as [number, number, number, number];

  return (
    <section
      id="hero"
      style={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      {/* ── Video Background ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <video
          autoPlay muted loop playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
        >
          <source src="/assets/trailer_v2.mp4" type="video/mp4" />
        </video>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,18,13,0.4) 0%, rgba(10,18,13,0.8) 100%)',
        }} />
      </div>

      {/* ── Contenido ── */}
      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '0 8%' }}>

        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: easing }}
          className="label-gold"
        >
          Antioquia, Colombia // Native San José
        </motion.span>

        {/* ── Área del título ──
            El h1 SIEMPRE ocupa su espacio en el flujo (evita que el logo
            se encabalgue sobre el subtext). Solo cambia su opacidad.
            El logo se superpone encima con position absolute. ── */}
        <div style={{
          position: 'relative',
          textAlign: 'center',
          margin: '28px 0 44px',
        }}>

          {/* H1: en flujo normal → mantiene el espacio siempre */}
          <motion.h1
            className="title-xl"
            animate={{ opacity: phase === 'text' ? 1 : 0 }}
            transition={{ duration: 1.4, ease: easing }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              lineHeight: 0.85,
              // Cuando opacity=0 el elemento sigue tomando espacio → no hay colapso
              pointerEvents: 'none',
            }}
          >
            <motion.span
              initial={{ x: -120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.2, ease: easing }}
              style={{ display: 'block' }}
            >
              NATIVE
            </motion.span>
            <motion.span
              initial={{ x: 120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.35, ease: easing }}
              className="text-outline"
              style={{ display: 'block' }}
            >
              SAN JOSÉ
            </motion.span>
          </motion.h1>

          {/* Logo: absolute encima del h1, aparece solo en fase 'logo' */}
          <AnimatePresence>
            {phase === 'logo' && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.6, ease: easing }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                }}
              >
                <img
                  src="/assets/logo.webp"
                  alt="Native San José"
                  style={{
                    width: 'clamp(200px, 36vw, 480px)',
                    filter: 'brightness(1.3)',
                    display: 'block',
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Subtext y CTA — siempre visibles ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.0, ease: easing }}
          className="hero-subtext"
        >
          <p style={{
            maxWidth: '400px',
            fontSize: '1.2rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.7)',
            borderLeft: '2px solid var(--native-gold)',
            paddingLeft: '30px',
          }}>
            Donde la arquitectura moderna <span className="text-gold">se funde</span> con el bosque nativo.
          </p>
          <a href="#proyecto" className="btn-premium">Descubrir el Origen</a>
        </motion.div>

      </div>

      {/* Indicadores verticales */}
      <div style={{
        position: 'absolute', right: '5%', top: '50%',
        transform: 'translateY(-50%)', zIndex: 2,
        display: 'flex', flexDirection: 'column', gap: '15px',
      }}>
        {[0.2, 0.4, 1].map((op, i) => (
          <div key={i} style={{ width: '2px', height: '60px', backgroundColor: 'var(--native-gold)', opacity: op }} />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.5, duration: 1.2 }}
        style={{
          position: 'absolute', bottom: '50px',
          left: '50%', transform: 'translateX(-50%)',
          zIndex: 2, cursor: 'pointer',
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
