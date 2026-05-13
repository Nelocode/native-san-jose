import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Nosotros: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isModalOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isModalOpen]);

  const values = [
    { title: 'CONFIANZA', desc: 'Respaldo legal y titulación 100% al día.' },
    { title: 'AMBIENTE', desc: 'Conservamos bosques nativos y ecosistemas.' },
    { title: 'INNOVACIÓN', desc: 'Tecnología para encontrar tu lote ideal.' },
    { title: 'DESARROLLO', desc: 'Crecemos junto al Oriente Antioqueño.' },
  ];

  const projects = [
    { name: 'Native Oriente', location: 'San Vicente Ferrer', detail: 'Lotes premium desde 2.600m² con vistas al lago y bosque.' },
    { name: 'El Tonal', location: 'Guatapé', detail: '17 lotes con vista al embalse y vigilancia 24/7.' },
    { name: 'Colinas de Oriente', location: 'Vía Medellín–Bogotá', detail: 'Parcelación agro exclusiva de alto potencial.' },
    { name: 'Marketplace', location: 'Oriente Antioqueño', detail: '+30 propiedades en Concepción, El Santuario, Guarne, Marinilla y Rionegro.' },
  ];

  return (
    <>
      {/* ── SECTION ── */}
      <section
        id="nosotros"
        style={{
          padding: 'var(--section-padding)',
          backgroundColor: 'var(--native-forest)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background decorative gradient */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'radial-gradient(ellipse at 80% 50%, rgba(176, 164, 109, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container">

          {/* ── TOP STRIP: "Desarrollado por" badge ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '60px' }}
          >
            <div className="nosotros-partner-badge">
              <span style={{
                fontSize: '0.6rem',
                letterSpacing: '5px',
                textTransform: 'uppercase',
                opacity: 0.45,
                fontWeight: 700,
                whiteSpace: 'nowrap',
              }}>
                Desarrollado por
              </span>
              <div className="nosotros-logo-divider" />
              <img
                src="/assets/tulote-logo.png"
                alt="TuLote Oriente"
                className="nosotros-logo-img"
              />
            </div>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
            style={{ marginBottom: '80px' }}
          >
            <span className="label-gold">Quiénes Somos</span>
            <h2 className="title-lg" style={{ maxWidth: '860px', marginBottom: '30px' }}>
              Conectamos personas <br />
              <span className="text-outline">CON LA</span>{' '}
              <span className="text-gold">TIERRA</span>
            </h2>
            <p style={{
              maxWidth: '580px',
              opacity: 0.65,
              fontSize: '1rem',
              lineHeight: 1.8,
              fontFamily: 'var(--font-accent)',
            }}>
              TuLote Oriente lleva más de 5 años transformando el sueño del lote propio en una
              realidad con respaldo legal, transparencia y calidad — desde el corazón del
              Oriente Antioqueño.
            </p>
          </motion.div>

          {/* Values grid + quote block */}
          <div className="nosotros-grid" style={{ marginBottom: '80px' }}>
            {/* Values 2x2 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="nosotros-values"
            >
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="glass-panel nosotros-value-card"
                >
                  <h3 style={{
                    fontSize: '0.75rem',
                    color: 'var(--native-gold)',
                    letterSpacing: '4px',
                    marginBottom: '12px',
                    fontWeight: 800,
                  }}>
                    {v.title}
                  </h3>
                  <p style={{ opacity: 0.65, fontSize: '0.85rem', lineHeight: 1.7 }}>{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Quote + differentiators */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
            >
              {/* Big quote */}
              <div style={{ borderLeft: '3px solid var(--native-gold)', paddingLeft: '30px' }}>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                  fontWeight: 700,
                  lineHeight: 1.5,
                  letterSpacing: '-0.02em',
                  color: 'var(--native-sand)',
                }}>
                  "No solo vendemos lotes — los diseñamos y desarrollamos, siendo los únicos
                  dueños de cada proyecto."
                </p>
              </div>

              {/* Key differentiators */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  '100% titulación inmediata',
                  'Financiación directa hasta 18 cuotas',
                  'Cobertura en todo el Oriente Antioqueño',
                  'Plataforma digital para búsqueda de lotes',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '14px', opacity: 0.75 }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--native-gold)',
                      flexShrink: 0,
                    }} />
                    <span style={{ fontSize: '0.9rem', fontFamily: 'var(--font-accent)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="nosotros-cta"
          >
            <button onClick={openModal} className="btn-premium">
              VER MÁS
            </button>
            <a
              href="https://tulote.com.co"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              IR A TULOTE.COM.CO ↗
            </a>
          </motion.div>

        </div>

        {/* Decorative vertical text — hidden on mobile */}
        <div className="nosotros-deco-text">
          ORIENTE ANTIOQUEÑO — COLOMBIA
        </div>

        {/* ── CREATIVE BRANDING STRIP at the bottom ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="nosotros-brand-strip"
        >
          <div className="nosotros-brand-inner">
            <div className="nosotros-brand-line" />
            <div className="nosotros-brand-content">
              <span style={{
                fontSize: '0.6rem',
                letterSpacing: '5px',
                textTransform: 'uppercase',
                opacity: 0.35,
                fontWeight: 700,
              }}>
                Con el respaldo de
              </span>
              <img
                src="/assets/tulote-logo.png"
                alt="TuLote Oriente"
                style={{ height: '52px', opacity: 0.75, filter: 'brightness(1.4) saturate(0.4)' }}
              />
              <span style={{
                fontSize: '0.6rem',
                letterSpacing: '5px',
                textTransform: 'uppercase',
                opacity: 0.35,
                fontWeight: 700,
              }}>
                Oriente Antioqueño
              </span>
            </div>
            <div className="nosotros-brand-line" />
          </div>
        </motion.div>
      </section>

      {/* ── MODAL ── */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={closeModal}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(6, 15, 10, 0.92)',
                backdropFilter: 'blur(12px)',
                zIndex: 2000,
              }}
            />

            {/* Modal scroll wrapper — full screen, centered */}
            <div
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 2001,
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                padding: 'clamp(16px, 4vw, 40px)',
                overflowY: 'auto',
              }}
              onClick={closeModal}
            >
              {/* Modal panel */}
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.96 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: '100%',
                  maxWidth: '900px',
                  backgroundColor: 'var(--native-forest)',
                  border: '1px solid rgba(176, 164, 109, 0.2)',
                  padding: 'clamp(28px, 6vw, 72px)',
                  position: 'relative',
                  margin: 'auto 0',
                  marginTop: 'clamp(16px, 4vw, 40px)',
                  marginBottom: 'clamp(16px, 4vw, 40px)',
                }}
              >
                {/* Close button */}
                <button
                  onClick={closeModal}
                  aria-label="Cerrar"
                  style={{
                    position: 'absolute',
                    top: 'clamp(16px, 3vw, 32px)',
                    right: 'clamp(16px, 3vw, 32px)',
                    background: 'none',
                    border: '1px solid rgba(176, 164, 109, 0.3)',
                    color: 'var(--native-gold)',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    width: '44px',
                    height: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    zIndex: 10,
                  }}
                >
                  ✕
                </button>

                {/* Modal header with TuLote logo */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', marginBottom: '16px', paddingRight: '60px', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1 }}>
                    <span className="label-gold" style={{ display: 'block', marginBottom: '10px' }}>TuLote Oriente</span>
                    <h2 style={{
                      fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.04em',
                      textTransform: 'uppercase',
                      marginBottom: '0',
                      lineHeight: 1,
                      color: 'var(--native-white)',
                    }}>
                      Nuestra Historia
                    </h2>
                  </div>
                  {/* Logo in modal header */}
                  <div style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(176,164,109,0.15)',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    flexShrink: 0,
                  }}>
                    <img
                      src="/assets/tulote-logo.png"
                      alt="TuLote Oriente"
                      style={{ height: '48px', filter: 'brightness(1.3) saturate(0.5)', opacity: 0.9 }}
                    />
                  </div>
                </div>
                <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--native-gold)', marginBottom: '36px' }} />

                {/* About paragraph */}
                <p style={{ opacity: 0.75, fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', lineHeight: 1.9, fontFamily: 'var(--font-accent)', marginBottom: '48px' }}>
                  TuLote Oriente es una empresa colombiana de finca raíz y loteo con más de 5 años
                  de experiencia. Nos diferenciamos porque no solo comercializamos propiedades —
                  diseñamos y desarrollamos nuestros propios proyectos, siendo los únicos dueños
                  de cada uno. Trabajamos con tecnología, transparencia y un profundo respeto por
                  la naturaleza del Oriente Antioqueño.
                </p>

                {/* Misión y Visión */}
                <div className="nosotros-modal-mv" style={{ marginBottom: '48px' }}>
                  {[
                    {
                      label: 'MISIÓN',
                      text: 'Brindar oportunidades para conectar con la naturaleza a través de lotes de alta calidad, con seguridad jurídica y alto potencial de inversión, respaldados por tecnología y un servicio transparente.',
                    },
                    {
                      label: 'VISIÓN',
                      text: 'Ser la inmobiliaria de lotes más grande del Oriente Antioqueño en 5 años, reconocida por su innovación, desarrollo sostenible y compromiso con las comunidades.',
                    },
                  ].map((item) => (
                    <div key={item.label} className="glass-panel" style={{ padding: 'clamp(24px, 4vw, 36px) clamp(20px, 3vw, 28px)' }}>
                      <h3 style={{ fontSize: '0.7rem', color: 'var(--native-gold)', letterSpacing: '5px', fontWeight: 800, marginBottom: '14px' }}>
                        {item.label}
                      </h3>
                      <p style={{ opacity: 0.7, fontSize: 'clamp(0.82rem, 1.4vw, 0.88rem)', lineHeight: 1.8 }}>{item.text}</p>
                    </div>
                  ))}
                </div>

                {/* Proyectos */}
                <h3 style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px' }}>
                  Nuestros Proyectos
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '48px' }}>
                  {projects.map((p, i) => (
                    <div
                      key={i}
                      className="nosotros-project-row"
                      style={{
                        padding: 'clamp(16px, 2.5vw, 24px) clamp(16px, 3vw, 28px)',
                        borderBottom: '1px solid rgba(176, 164, 109, 0.1)',
                      }}
                    >
                      <div>
                        <p style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--native-gold)', marginBottom: '4px' }}>{p.name}</p>
                        <p style={{ opacity: 0.5, fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase' }}>{p.location}</p>
                      </div>
                      <p style={{ opacity: 0.65, fontSize: '0.85rem', lineHeight: 1.6 }}>{p.detail}</p>
                    </div>
                  ))}
                </div>

                {/* Contact info */}
                <div className="glass-panel" style={{ padding: 'clamp(24px, 4vw, 36px) clamp(20px, 3vw, 32px)', marginBottom: '36px' }}>
                  <h3 style={{ fontSize: '0.7rem', letterSpacing: '5px', fontWeight: 800, color: 'var(--native-gold)', marginBottom: '20px' }}>
                    CONTACTO DIRECTO
                  </h3>
                  <div className="nosotros-contact-grid">
                    {[
                      { label: 'WhatsApp', value: '+57 316 166 5347' },
                      { label: 'Correo', value: 'servicioalclientetulote@gmail.com' },
                      { label: 'Instagram', value: '@native_oriente' },
                      { label: 'Web', value: 'tulote.com.co' },
                    ].map((c) => (
                      <div key={c.label}>
                        <p style={{ fontSize: '0.65rem', letterSpacing: '3px', opacity: 0.5, marginBottom: '4px', textTransform: 'uppercase' }}>{c.label}</p>
                        <p style={{ fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)', fontWeight: 600, color: 'var(--native-sand)', wordBreak: 'break-all' }}>{c.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal CTA */}
                <a
                  href="https://tulote.com.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium"
                  style={{ display: 'inline-block' }}
                >
                  IR A TULOTE.COM.CO ↗
                </a>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nosotros;
