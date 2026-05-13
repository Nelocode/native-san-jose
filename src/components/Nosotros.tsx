import React, { useState } from 'react';
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
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            marginBottom: '80px',
            alignItems: 'start',
          }}
            className="nosotros-grid"
          >
            {/* Values */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}
            >
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="glass-panel"
                  style={{ padding: '36px 30px' }}
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
              <div style={{
                borderLeft: '3px solid var(--native-gold)',
                paddingLeft: '30px',
              }}>
                <p style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
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
            style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <button
              onClick={openModal}
              className="btn-premium"
              style={{ textDecoration: 'none' }}
            >
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

        {/* Decorative vertical text */}
        <div style={{
          position: 'absolute',
          right: '2%',
          top: '50%',
          transform: 'rotate(90deg) translateY(-50%)',
          fontSize: '0.7rem',
          letterSpacing: '10px',
          opacity: 0.12,
          fontWeight: 700,
          whiteSpace: 'nowrap',
        }}>
          ORIENTE ANTIOQUEÑO — COLOMBIA
        </div>
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

            {/* Modal panel */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'min(900px, 94vw)',
                maxHeight: '88vh',
                overflowY: 'auto',
                backgroundColor: 'var(--native-forest)',
                border: '1px solid rgba(176, 164, 109, 0.2)',
                zIndex: 2001,
                padding: 'clamp(36px, 6vw, 72px)',
              }}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                style={{
                  position: 'sticky',
                  top: 0,
                  float: 'right',
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
                  marginBottom: '16px',
                }}
              >
                ✕
              </button>

              {/* Modal header */}
              <span className="label-gold" style={{ display: 'block', marginBottom: '10px' }}>TuLote Oriente</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
                marginBottom: '16px',
                lineHeight: 1,
                color: 'var(--native-white)',
              }}>
                Nuestra Historia
              </h2>
              <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--native-gold)', marginBottom: '36px' }} />

              {/* About paragraph */}
              <p style={{ opacity: 0.75, fontSize: '0.95rem', lineHeight: 1.9, fontFamily: 'var(--font-accent)', marginBottom: '48px' }}>
                TuLote Oriente es una empresa colombiana de finca raíz y loteo con más de 5 años
                de experiencia. Nos diferenciamos porque no solo comercializamos propiedades —
                diseñamos y desarrollamos nuestros propios proyectos, siendo los únicos dueños
                de cada uno. Trabajamos con tecnología, transparencia y un profundo respeto por
                la naturaleza del Oriente Antioqueño.
              </p>

              {/* Misión y Visión */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '48px' }}
                className="nosotros-modal-mv">
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
                  <div key={item.label} className="glass-panel" style={{ padding: '36px 28px' }}>
                    <h3 style={{ fontSize: '0.7rem', color: 'var(--native-gold)', letterSpacing: '5px', fontWeight: 800, marginBottom: '14px' }}>
                      {item.label}
                    </h3>
                    <p style={{ opacity: 0.7, fontSize: '0.88rem', lineHeight: 1.8 }}>{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Proyectos */}
              <h3 style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '24px' }}>
                Nuestros Proyectos
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
                {projects.map((p, i) => (
                  <div key={i} style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                    padding: '24px 28px',
                    borderBottom: '1px solid rgba(176, 164, 109, 0.1)',
                    alignItems: 'center',
                  }}
                    className="nosotros-project-row">
                    <div>
                      <p style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--native-gold)', marginBottom: '4px' }}>{p.name}</p>
                      <p style={{ opacity: 0.5, fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase' }}>{p.location}</p>
                    </div>
                    <p style={{ opacity: 0.65, fontSize: '0.85rem', lineHeight: 1.6 }}>{p.detail}</p>
                  </div>
                ))}
              </div>

              {/* Contact info */}
              <div className="glass-panel" style={{ padding: '36px 32px', marginBottom: '36px' }}>
                <h3 style={{ fontSize: '0.7rem', letterSpacing: '5px', fontWeight: 800, color: 'var(--native-gold)', marginBottom: '20px' }}>
                  CONTACTO DIRECTO
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px 48px' }}>
                  {[
                    { label: 'WhatsApp', value: '+57 316 166 5347' },
                    { label: 'Correo', value: 'servicioalclientetulote@gmail.com' },
                    { label: 'Instagram', value: '@native_oriente' },
                    { label: 'Web', value: 'tulote.com.co' },
                  ].map((c) => (
                    <div key={c.label}>
                      <p style={{ fontSize: '0.65rem', letterSpacing: '3px', opacity: 0.5, marginBottom: '4px', textTransform: 'uppercase' }}>{c.label}</p>
                      <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--native-sand)' }}>{c.value}</p>
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
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nosotros;
