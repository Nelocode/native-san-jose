import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

type Phase = 'text' | 'fading' | 'logo';

const Hero: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('text');
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll tracking — solo para el parallax del logo
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // El logo "se queda atrás" al scrollear: se desplaza más lento que el resto
  // (opone resistencia al scroll moviéndose en la dirección contraria)
  const logoParallaxY  = useTransform(scrollYProgress, [0, 1], ['0vh', '28vh']);
  // El logo se va desvaneciendo al final del recorrido, no al inicio
  const logoScrollFade = useTransform(scrollYProgress, [0.25, 0.75], [1, 0]);

  const easing = [0.16, 1, 0.3, 1] as [number, number, number, number];

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('fading'), 3500);
    const t2 = setTimeout(() => setPhase('logo'),   3500 + 1400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section
      ref={sectionRef}
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
            h1 permanece en flujo normal (invisible cuando opacity=0)
            para que el subtext no suba. El logo flota encima. ── */}
        <div style={{ position: 'relative', textAlign: 'center', margin: '28px 0 44px' }}>

          {/* TEXTO — flujo normal, solo cambia opacidad */}
          <motion.h1
            className="title-xl"
            animate={{ opacity: phase === 'text' ? 1 : 0 }}
            transition={{ duration: 1.4, ease: easing }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              lineHeight: 0.85,
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

          {/* LOGO — absoluto encima del h1, con parallax al scroll */}
          <AnimatePresence>
            {phase === 'logo' && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.6, ease: easing }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                  // Parallax: el logo se "resiste" al scroll y se desvanece tarde
                  y: logoParallaxY,
                  opacity: logoScrollFade,
                }}
              >
                <img
                  src="/assets/logo.webp"
                  alt="Native San José"
                  style={{
                    // Un poco más pequeño para evitar pixelación
                    width: 'clamp(160px, 26vw, 360px)',
                    imageRendering: 'crisp-edges',
                    filter: 'brightness(1.25)',
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
