import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Tipos ─────────────────────────────────────────────── */
interface Zone {
  id: string;
  label: string;        // etiqueta dorada
  title: string;        // título del modal
  description: string;
  cover: string;        // imagen de portada (card existente)
  photos: string[];     // galería
}

interface Amenity {
  title: string;
  category: string;
  image: string;
  size: string;
  description: string;
  zoneId: string;       // relaciona la card con una Zone
}

/* ── Datos ─────────────────────────────────────────────── */
const zones: Zone[] = [
  {
    id: 'porteria',
    label: 'EXCLUSIVIDAD',
    title: 'Portería & Ermita',
    description:
      'Acceso vigilado 24/7 y un oratorio íntimo en el corazón del bosque. El umbral que separa el mundo exterior de la vida Native.',
    cover: '/assets/porteria.webp',
    photos: [
      '/assets/amenities/porteria-1.png',
      '/assets/amenities/porteria-2.png',
      '/assets/amenities/porteria-3.png',
      '/assets/amenities/porteria-4.png',
      '/assets/amenities/porteria-5.png',
      '/assets/amenities/porteria-6.png',
    ],
  },
  {
    id: 'coworking',
    label: 'CONECTIVIDAD',
    title: 'Coworking Lab',
    description:
      'Espacios de trabajo diseñados para la productividad en medio del silencio natural. Fibra óptica, luz cenital y vistas al bosque.',
    cover: '/assets/coworking.webp',
    photos: [
      '/assets/amenities/coworking-1.png',
      '/assets/amenities/coworking-2.png',
      '/assets/amenities/coworking-3.png',
      '/assets/amenities/coworking-4.png',
      '/assets/amenities/coworking-5.png',
      '/assets/amenities/coworking-6.png',
      '/assets/amenities/coworking-7.png',
    ],
  },
  {
    id: 'deportivo',
    label: 'BIENESTAR',
    title: 'Complejo Deportivo',
    description:
      'Canchas multifuncionales, gimnasio y zonas de deporte con vistas panorámicas al bosque nativo. El cuerpo y la mente en equilibrio.',
    cover: '/assets/sports.webp',
    photos: [
      '/assets/amenities/deportivo-1.png',
      '/assets/amenities/deportivo-2.png',
      '/assets/amenities/deportivo-3.png',
      '/assets/amenities/deportivo-4.png',
      '/assets/amenities/deportivo-5.png',
    ],
  },
];

const amenities: Amenity[] = [
  {
    title: 'COWORKING LAB',
    category: 'CONECTIVIDAD',
    image: '/assets/coworking.webp',
    size: 'tall',
    description: 'Espacios diseñados para la productividad en medio del silencio natural.',
    zoneId: 'coworking',
  },
  {
    title: 'SPORT COMPLEX',
    category: 'BIENESTAR',
    image: '/assets/sports.webp',
    size: 'wide',
    description: 'Canchas y gimnasio con vistas panorámicas al bosque nativo.',
    zoneId: 'deportivo',
  },
  {
    title: 'PORTERÍA NATIVA',
    category: 'EXCLUSIVIDAD',
    image: '/assets/porteria.webp',
    size: 'small',
    description: 'Seguridad 24/7 con diseño arquitectónico que honra el entorno.',
    zoneId: 'porteria',
  },
];

/* ── Componente principal ──────────────────────────────── */
const Amenities: React.FC = () => {
  const [activeZone, setActiveZone] = useState<Zone | null>(null);
  const [activePhoto, setActivePhoto] = useState<number>(0);

  const openZone = (zoneId: string) => {
    const zone = zones.find((z) => z.id === zoneId);
    if (zone) {
      setActiveZone(zone);
      setActivePhoto(0);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeZone = () => {
    setActiveZone(null);
    document.body.style.overflow = 'unset';
  };

  const prevPhoto = () =>
    setActivePhoto((p) => (p === 0 ? (activeZone!.photos.length - 1) : p - 1));
  const nextPhoto = () =>
    setActivePhoto((p) => (p === activeZone!.photos.length - 1 ? 0 : p + 1));

  // Cerrar con Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') closeZone(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const easing = [0.16, 1, 0.3, 1] as [number, number, number, number];

  return (
    <>
      <section
        id="amenidades"
        style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--native-bg)', overflow: 'hidden' }}
      >
        <div className="container">
          {/* Header */}
          <div style={{ marginBottom: '120px', position: 'relative' }}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="label-gold"
            >
              Vida Elevada
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="title-lg"
              style={{ maxWidth: '900px' }}
            >
              EXPERIENCIAS <span className="text-outline">SIN</span> <br />
              <span className="text-gold">LÍMITES</span> DEFINIDOS
            </motion.h2>
          </div>

          {/* Grid de amenidades — cards clickeables */}
          <div className="cinema-grid">
            {/* Tall */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="amenity-item-tall"
            >
              <AmenityCard item={amenities[0]} onClick={() => openZone(amenities[0].zoneId)} />
            </motion.div>

            {/* Wide */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="amenity-item-wide"
            >
              <AmenityCard item={amenities[1]} onClick={() => openZone(amenities[1].zoneId)} />
            </motion.div>

            {/* Small */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="amenity-item-small"
            >
              <AmenityCard item={amenities[2]} onClick={() => openZone(amenities[2].zoneId)} />
            </motion.div>

            {/* Branding block */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="amenity-branding"
            >
              <p style={{ fontSize: '0.9rem', opacity: 0.6, fontStyle: 'italic' }}>
                "Cada espacio en Native ha sido concebido para ser una extensión del entorno
                natural, donde la arquitectura desaparece en el paisaje."
              </p>
            </motion.div>
          </div>

          {/* Ticker */}
          <div style={{ marginTop: '150px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '60px' }}>
            <div style={{ display: 'flex', overflow: 'hidden' }}>
              <motion.div
                animate={{ x: [0, -1500] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                style={{ display: 'flex', gap: '80px', flexShrink: 0 }}
              >
                {[
                  'MINIMARKET', 'PISCINA CLIMATIZADA', 'SENDEROS ECOLÓGICOS',
                  'ESTANCIAS DEL BOSQUE', 'PORTERÍA 24/7', 'YOGA DECK', 'PET PARK',
                  'MIRADOR', 'FIRE PIT', 'SQUASH',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span style={{
                      fontSize: '1.5rem', fontWeight: 700, letterSpacing: '5px',
                      color: i % 2 === 0 ? 'var(--native-gold)' : 'transparent',
                      WebkitTextStroke: i % 2 !== 0 ? '1px rgba(255,255,255,0.2)' : 'none',
                    }}>
                      {item}
                    </span>
                    <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--native-gold)', borderRadius: '50%' }} />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODAL GALERÍA ── */}
      <AnimatePresence>
        {activeZone && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={closeZone}
              style={{
                position: 'fixed', inset: 0,
                backgroundColor: 'rgba(0,0,0,0.96)',
                backdropFilter: 'blur(16px)',
                zIndex: 3000,
              }}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: easing }}
              style={{
                position: 'fixed', inset: 0,
                zIndex: 3001,
                display: 'flex',
                flexDirection: 'column',
                padding: 'clamp(20px, 4vw, 60px)',
                gap: '24px',
                overflowY: 'auto',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── Header del modal ── */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <span className="label-gold">{activeZone.label}</span>
                  <h2 style={{
                    fontSize: 'clamp(2rem, 6vw, 4rem)',
                    fontWeight: 800, letterSpacing: '-0.04em',
                    textTransform: 'uppercase', lineHeight: 1,
                    color: 'var(--native-white)',
                  }}>
                    {activeZone.title}
                  </h2>
                  <p style={{
                    maxWidth: '560px', opacity: 0.6,
                    fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)',
                    lineHeight: 1.8, marginTop: '12px',
                    fontFamily: 'var(--font-accent)',
                  }}>
                    {activeZone.description}
                  </p>
                </div>
                <button
                  onClick={closeZone}
                  style={{
                    background: 'none', border: '1px solid rgba(176,164,109,0.3)',
                    color: 'var(--native-gold)', cursor: 'pointer',
                    width: '48px', height: '48px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem', fontWeight: 700, flexShrink: 0,
                  }}
                >
                  ✕
                </button>
              </div>

              {/* ── Foto principal ── */}
              <div style={{ position: 'relative', flex: '1 1 auto', minHeight: '0', maxHeight: '60vh' }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activePhoto}
                    src={activeZone.photos[activePhoto]}
                    alt={`${activeZone.title} ${activePhoto + 1}`}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.5, ease: easing }}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </AnimatePresence>

                {/* Flechas */}
                <button
                  onClick={prevPhoto}
                  style={{
                    position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
                    background: 'rgba(6,15,10,0.7)', border: '1px solid rgba(176,164,109,0.3)',
                    color: 'var(--native-gold)', cursor: 'pointer',
                    width: '52px', height: '52px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem', backdropFilter: 'blur(8px)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  ‹
                </button>
                <button
                  onClick={nextPhoto}
                  style={{
                    position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
                    background: 'rgba(6,15,10,0.7)', border: '1px solid rgba(176,164,109,0.3)',
                    color: 'var(--native-gold)', cursor: 'pointer',
                    width: '52px', height: '52px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem', backdropFilter: 'blur(8px)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  ›
                </button>

                {/* Contador */}
                <div style={{
                  position: 'absolute', bottom: '20px', right: '20px',
                  background: 'rgba(6,15,10,0.8)', backdropFilter: 'blur(8px)',
                  padding: '8px 16px',
                  border: '1px solid rgba(176,164,109,0.2)',
                  fontSize: '0.7rem', fontWeight: 700, letterSpacing: '3px',
                  color: 'var(--native-gold)',
                }}>
                  {String(activePhoto + 1).padStart(2, '0')} / {String(activeZone.photos.length).padStart(2, '0')}
                </div>
              </div>

              {/* ── Thumbnails ── */}
              <div style={{
                display: 'flex', gap: '10px',
                overflowX: 'auto', paddingBottom: '4px',
                scrollbarWidth: 'none',
              }}>
                {activeZone.photos.map((photo, i) => (
                  <motion.div
                    key={i}
                    onClick={() => setActivePhoto(i)}
                    whileHover={{ scale: 1.04 }}
                    style={{
                      flexShrink: 0,
                      width: 'clamp(70px, 10vw, 110px)',
                      height: 'clamp(50px, 7vw, 75px)',
                      cursor: 'pointer',
                      border: i === activePhoto
                        ? '2px solid var(--native-gold)'
                        : '2px solid transparent',
                      opacity: i === activePhoto ? 1 : 0.45,
                      transition: 'all 0.3s ease',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={photo}
                      alt={`thumb-${i}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* ── Tabs de zona en el footer del modal ── */}
              <div style={{
                display: 'flex', gap: '12px', flexWrap: 'wrap',
                borderTop: '1px solid rgba(176,164,109,0.1)',
                paddingTop: '16px',
              }}>
                {zones.map((z) => (
                  <button
                    key={z.id}
                    onClick={() => { setActiveZone(z); setActivePhoto(0); }}
                    style={{
                      background: activeZone.id === z.id ? 'var(--native-gold)' : 'transparent',
                      border: '1px solid rgba(176,164,109,0.3)',
                      color: activeZone.id === z.id ? 'var(--native-bg)' : 'var(--native-gold)',
                      cursor: 'pointer',
                      padding: '10px 24px',
                      fontSize: '0.65rem',
                      fontWeight: 800,
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      transition: 'all 0.3s ease',
                      fontFamily: 'var(--font-main)',
                    }}
                  >
                    {z.title}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

/* ── Card de amenidad ── */
const AmenityCard: React.FC<{ item: Amenity; onClick: () => void }> = ({ item, onClick }) => (
  <motion.div
    whileHover="hover"
    onClick={onClick}
    style={{ width: '100%', height: '100%', position: 'relative', cursor: 'pointer' }}
  >
    <motion.img
      variants={{ hover: { scale: 1.08 } }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      src={item.image}
      alt={item.title}
      style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.65 }}
    />
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(to top, rgba(6,15,10,0.9) 0%, transparent 60%)',
      zIndex: 2,
    }} />

    {/* Hover overlay — "Ver galería" */}
    <motion.div
      variants={{ hover: { opacity: 1 } }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        position: 'absolute', inset: 0, zIndex: 3,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(6,15,10,0.35)',
      }}
    >
      <span style={{
        fontSize: '0.7rem', fontWeight: 800, letterSpacing: '4px',
        textTransform: 'uppercase', color: 'var(--native-gold)',
        border: '1px solid var(--native-gold)', padding: '14px 28px',
      }}>
        VER GALERÍA
      </span>
    </motion.div>

    <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px', zIndex: 4 }}>
      <motion.span
        variants={{ hover: { x: 10, color: '#fff' } }}
        style={{
          fontSize: '0.7rem', fontWeight: 800, letterSpacing: '4px',
          color: 'var(--native-gold)', display: 'block', marginBottom: '10px',
        }}
      >
        {item.category}
      </motion.span>
      <h3 style={{
        fontSize: item.size === 'tall' ? 'clamp(2rem, 4vw, 3.5rem)' : 'clamp(1.4rem, 2.5vw, 2rem)',
        lineHeight: 1, fontWeight: 800, textTransform: 'uppercase',
      }}>
        {item.title}
      </h3>
      <motion.p
        variants={{ initial: { opacity: 0, y: 20 }, hover: { opacity: 0.7, y: 0 } }}
        initial="initial"
        transition={{ duration: 0.5 }}
        style={{ fontSize: '0.9rem', marginTop: '15px', maxWidth: '300px' }}
      >
        {item.description}
      </motion.p>
    </div>
  </motion.div>
);

export default Amenities;
