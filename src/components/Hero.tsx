import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Fases de la animación
// 0 → texto aparece | 1 → texto desaparece | 2 → logo aparece (y se queda)
type Phase = 0 | 1 | 2;

const PHASE_TIMINGS = {
  textHold:     2200,  // ms que el texto se mantiene visible
  textFadeOut:  600,   // duración del fade-out del texto
  logoPause:    200,   // pausa entre texto y logo
};

const Hero: React.FC = () => {
  const [phase, setPhase] = useState<Phase>(0);

  useEffect(() => {
    // Después de mantener el texto → iniciar fade-out
    const t1 = setTimeout(() => setPhase(1), PHASE_TIMINGS.textHold);
    // Después del fade-out → mostrar logo
    const t2 = setTimeout(
      () => setPhase(2),
      PHASE_TIMINGS.textHold + PHASE_TIMINGS.textFadeOut + PHASE_TIMINGS.logoPause
    );
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

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

        {/* Label — siempre visible */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="label-gold"
        >
          Antioquia, Colombia // Native San José
        </motion.span>

        {/* ── Área del título: texto ↔ logo ── */}
        <div style={{
          position: 'relative',
          textAlign: 'center',
          margin: '24px 0 40px',
          minHeight: 'clamp(120px, 22vw, 280px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <AnimatePresence mode="wait">

            {/* FASE 0 + 1: Texto NATIVE / SAN JOSÉ */}
            {phase < 2 && (
              <motion.div
                key="text"
                initial={{ opacity: 0 }}
                animate={{ opacity: phase === 1 ? 0 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{ position: 'absolute', width: '100%' }}
              >
                <h1 className="title-xl" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  lineHeight: 0.85,
                }}>
                  <motion.span
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    style={{ display: 'block' }}
                  >
                    NATIVE
                  </motion.span>
                  <motion.span
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    className="text-outline"
                    style={{ display: 'block' }}
                  >
                    SAN JOSÉ
                  </motion.span>
                </h1>
              </motion.div>
            )}

            {/* FASE 2: Logo */}
            {phase === 2 && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                style={{ position: 'absolute', width: '100%', display: 'flex', justifyContent: 'center' }}
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
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
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute', bottom: '50px',
          left: '50%', transform: 'translateX(-50%)',
          zIndex: 2, opacity: 0.5, cursor: 'pointer',
        }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
