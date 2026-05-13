import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Tipos ─────────────────────────────────────────────── */
interface Zone {
  id: string;
  label: string;
  title: string;
  description: string;
  photos: string[];
}

interface Amenity {
  title: string;
  category: string;
  image: string;
  size: string;
  description: string;
  zoneId: string;
}

/* ── Datos ─────────────────────────────────────────────── */
const zones: Zone[] = [
  {
    id: 'porteria',
    label: 'EXCLUSIVIDAD',
    title: 'Portería & Ermita',
    description: 'Acceso vigilado 24/7 y un oratorio íntimo en el corazón del bosque. El umbral que separa el mundo exterior de la vida Native.',
    photos: [
      '/assets/amenities/porteria-1.jpg',
      '/assets/amenities/porteria-2.jpg',
      '/assets/amenities/porteria-3.jpg',
      '/assets/amenities/porteria-4.jpg',
      '/assets/amenities/porteria-5.jpg',
      '/assets/amenities/porteria-6.jpg',
    ],
  },
  {
    id: 'coworking',
    label: 'CONECTIVIDAD',
    title: 'Coworking Lab',
    description: 'Espacios de trabajo diseñados para la productividad en medio del silencio natural. Fibra óptica, luz cenital y vistas al bosque.',
    photos: [
      '/assets/amenities/coworking-1.jpg',
      '/assets/amenities/coworking-2.jpg',
      '/assets/amenities/coworking-3.jpg',
      '/assets/amenities/coworking-4.jpg',
      '/assets/amenities/coworking-5.jpg',
      '/assets/amenities/coworking-6.jpg',
      '/assets/amenities/coworking-7.jpg',
    ],
  },
  {
    id: 'deportivo',
    label: 'BIENESTAR',
    title: 'Complejo Deportivo',
    description: 'Canchas multifuncionales, gimnasio y zonas de deporte con vistas panorámicas al bosque nativo.',
    photos: [
      '/assets/amenities/deportivo-1.jpg',
      '/assets/amenities/deportivo-2.jpg',
      '/assets/amenities/deportivo-3.jpg',
      '/assets/amenities/deportivo-4.jpg',
      '/assets/amenities/deportivo-5.jpg',
    ],
  },
];

const amenities: Amenity[] = [
  { title: 'COWORKING LAB', category: 'CONECTIVIDAD', image: '/assets/coworking.webp', size: 'tall', description: 'Espacios diseñados para la productividad en medio del silencio natural.', zoneId: 'coworking' },
  { title: 'SPORT COMPLEX', category: 'BIENESTAR', image: '/assets/sports.webp', size: 'wide', description: 'Canchas y gimnasio con vistas panorámicas al bosque nativo.', zoneId: 'deportivo' },
  { title: 'PORTERÍA NATIVA', category: 'EXCLUSIVIDAD', image: '/assets/porteria.webp', size: 'small', description: 'Seguridad 24/7 con diseño arquitectónico que honra el entorno.', zoneId: 'porteria' },
];

const easing = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ── Componente principal ──────────────────────────────── */
const Amenities: React.FC = () => {
  const [activeZone, setActiveZone] = useState<Zone | null>(null);
  const [activePhoto, setActivePhoto] = useState<number>(0);

  const openZone = (zoneId: string) => {
    const zone = zones.find((z) => z.id === zoneId);
    if (zone) { setActiveZone(zone); setActivePhoto(0); document.body.style.overflow = 'hidden'; }
  };
  const closeZone = () => { setActiveZone(null); document.body.style.overflow = 'unset'; };
  const prevPhoto = () => setActivePhoto((p) => (p === 0 ? activeZone!.photos.length - 1 : p - 1));
  const nextPhoto = () => setActivePhoto((p) => (p === activeZone!.photos.length - 1 ? 0 : p + 1));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!activeZone) return;
      if (e.key === 'Escape') closeZone();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeZone, activePhoto]);

  return (
    <>
      <section id="amenidades" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--native-bg)', overflow: 'hidden' }}>
        <div className="container">
          {/* Header */}
          <div style={{ marginBottom: '120px', position: 'relative' }}>
            <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="label-gold">
              Vida Elevada
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="title-lg" style={{ maxWidth: '900px' }}>
              EXPERIENCIAS <span className="text-outline">SIN</span> <br />
              <span className="text-gold">LÍMITES</span> DEFINIDOS
            </motion.h2>
          </div>

          {/* Cards grid */}
          <div className="cinema-grid">
            <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="amenity-item-tall">
              <AmenityCard item={amenities[0]} onClick={() => openZone(amenities[0].zoneId)} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 }} className="amenity-item-wide">
              <AmenityCard item={amenities[1]} onClick={() => openZone(amenities[1].zoneId)} />
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.4 }} className="amenity-item-small">
              <AmenityCard item={amenities[2]} onClick={() => openZone(amenities[2].zoneId)} />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="amenity-branding">
              <p style={{ fontSize: '0.9rem', opacity: 0.6, fontStyle: 'italic' }}>
                "Cada espacio en Native ha sido concebido para ser una extensión del entorno natural, donde la arquitectura desaparece en el paisaje."
              </p>
            </motion.div>
          </div>

          {/* Ticker */}
          <div style={{ marginTop: '150px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '60px' }}>
            <div style={{ display: 'flex', overflow: 'hidden' }}>
              <motion.div animate={{ x: [0, -1500] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} style={{ display: 'flex', gap: '80px', flexShrink: 0 }}>
                {['MINIMARKET', 'PISCINA CLIMATIZADA', 'SENDEROS ECOLÓGICOS', 'ESTANCIAS DEL BOSQUE', 'PORTERÍA 24/7', 'YOGA DECK', 'PET PARK', 'MIRADOR', 'FIRE PIT', 'SQUASH'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '5px', color: i % 2 === 0 ? 'var(--native-gold)' : 'transparent', WebkitTextStroke: i % 2 !== 0 ? '1px rgba(255,255,255,0.2)' : 'none' }}>{item}</span>
                    <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--native-gold)', borderRadius: '50%' }} />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODAL GALERÍA — fullscreen lightbox ── */}
      <AnimatePresence>
        {activeZone && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }} onClick={closeZone}
              style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.97)', zIndex: 3000 }}
            />

            {/* Lightbox: grid topbar | imagen | bottombar */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.45, ease: easing }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'fixed', inset: 0, zIndex: 3001,
                display: 'grid',
                gridTemplateRows: 'auto 1fr auto',
              }}
            >
              {/* TOP BAR */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 28px', gap: '16px', flexWrap: 'wrap',
                background: 'rgba(6,15,10,0.98)', borderBottom: '1px solid rgba(176,164,109,0.12)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                  <span className="label-gold" style={{ margin: 0 }}>{activeZone.label}</span>
                  <div style={{ width: '1px', height: '16px', background: 'rgba(176,164,109,0.3)' }} />
                  <h2 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.6rem)', fontWeight: 800, letterSpacing: '-0.03em', textTransform: 'uppercase', margin: 0, lineHeight: 1 }}>
                    {activeZone.title}
                  </h2>
                  <span style={{ opacity: 0.4, fontSize: '0.78rem', fontFamily: 'var(--font-accent)', maxWidth: '380px', display: 'none' }} className="lightbox-desc">
                    {activeZone.description}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '3px', color: 'var(--native-gold)', opacity: 0.75 }}>
                    {String(activePhoto + 1).padStart(2, '0')} / {String(activeZone.photos.length).padStart(2, '0')}
                  </span>
                  <button onClick={closeZone} style={{
                    background: 'none', border: '1px solid rgba(176,164,109,0.3)',
                    color: 'var(--native-gold)', cursor: 'pointer',
                    width: '40px', height: '40px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.95rem', fontWeight: 700,
                  }}>✕</button>
                </div>
              </div>

              {/* IMAGEN PRINCIPAL */}
              <div style={{ position: 'relative', overflow: 'hidden', background: '#050c08' }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activePhoto}
                    src={activeZone.photos[activePhoto]}
                    alt={`${activeZone.title} ${activePhoto + 1}`}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: easing }}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                  />
                </AnimatePresence>

                <button onClick={prevPhoto} style={{
                  position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
                  background: 'rgba(6,15,10,0.82)', border: '1px solid rgba(176,164,109,0.35)',
                  color: 'var(--native-gold)', cursor: 'pointer', width: '52px', height: '52px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.8rem', backdropFilter: 'blur(8px)',
                }}>‹</button>

                <button onClick={nextPhoto} style={{
                  position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
                  background: 'rgba(6,15,10,0.82)', border: '1px solid rgba(176,164,109,0.35)',
                  color: 'var(--native-gold)', cursor: 'pointer', width: '52px', height: '52px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.8rem', backdropFilter: 'blur(8px)',
                }}>›</button>
              </div>

              {/* BOTTOM BAR: thumbnails + zone tabs */}
              <div style={{
                background: 'rgba(6,15,10,0.98)', borderTop: '1px solid rgba(176,164,109,0.12)',
                padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '16px',
              }}>
                {/* Thumbnails */}
                <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', flex: '1 1 0', scrollbarWidth: 'none' }}>
                  {activeZone.photos.map((photo, i) => (
                    <motion.div
                      key={i} onClick={() => setActivePhoto(i)} whileHover={{ scale: 1.06 }}
                      style={{
                        flexShrink: 0, width: '88px', height: '58px',
                        cursor: 'pointer', overflow: 'hidden',
                        border: i === activePhoto ? '2px solid var(--native-gold)' : '2px solid rgba(255,255,255,0.08)',
                        opacity: i === activePhoto ? 1 : 0.45,
                        transition: 'all 0.25s ease',
                      }}
                    >
                      <img src={photo} alt={`thumb-${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    </motion.div>
                  ))}
                </div>

                <div style={{ width: '1px', height: '36px', background: 'rgba(176,164,109,0.2)', flexShrink: 0 }} />

                {/* Zone tabs */}
                <div style={{ display: 'flex', gap: '8px', flexShrink: 0, flexWrap: 'wrap' }}>
                  {zones.map((z) => (
                    <button key={z.id} onClick={() => { setActiveZone(z); setActivePhoto(0); }} style={{
                      background: activeZone.id === z.id ? 'var(--native-gold)' : 'transparent',
                      border: '1px solid rgba(176,164,109,0.35)',
                      color: activeZone.id === z.id ? 'var(--native-bg)' : 'var(--native-gold)',
                      cursor: 'pointer', padding: '9px 18px',
                      fontSize: '0.58rem', fontWeight: 800,
                      letterSpacing: '2px', textTransform: 'uppercase',
                      transition: 'all 0.25s ease', fontFamily: 'var(--font-main)', whiteSpace: 'nowrap',
                    }}>
                      {z.title}
                    </button>
                  ))}
                </div>
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
  <motion.div whileHover="hover" onClick={onClick} style={{ width: '100%', height: '100%', position: 'relative', cursor: 'pointer' }}>
    <motion.img
      variants={{ hover: { scale: 1.08 } }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      src={item.image} alt={item.title}
      style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.65 }}
    />
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,15,10,0.9) 0%, transparent 60%)', zIndex: 2 }} />

    <motion.div
      variants={{ hover: { opacity: 1 } }} initial={{ opacity: 0 }} transition={{ duration: 0.4 }}
      style={{ position: 'absolute', inset: 0, zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(6,15,10,0.3)' }}
    >
      <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--native-gold)', border: '1px solid var(--native-gold)', padding: '14px 28px' }}>
        VER GALERÍA
      </span>
    </motion.div>

    <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px', zIndex: 4 }}>
      <motion.span variants={{ hover: { x: 10, color: '#fff' } }} style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '4px', color: 'var(--native-gold)', display: 'block', marginBottom: '10px' }}>
        {item.category}
      </motion.span>
      <h3 style={{ fontSize: item.size === 'tall' ? 'clamp(2rem, 4vw, 3.5rem)' : 'clamp(1.4rem, 2.5vw, 2rem)', lineHeight: 1, fontWeight: 800, textTransform: 'uppercase' }}>
        {item.title}
      </h3>
      <motion.p variants={{ initial: { opacity: 0, y: 20 }, hover: { opacity: 0.7, y: 0 } }} initial="initial" transition={{ duration: 0.5 }} style={{ fontSize: '0.9rem', marginTop: '15px', maxWidth: '300px' }}>
        {item.description}
      </motion.p>
    </div>
  </motion.div>
);

export default Amenities;
