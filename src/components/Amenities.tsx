import React from 'react';
import { motion } from 'framer-motion';

interface Amenity {
  title: string;
  category: string;
  image: string;
  size: string;
  description: string;
}

const amenities: Amenity[] = [
  {
    title: 'COWORKING LAB',
    category: 'CONECTIVIDAD',
    image: '/assets/coworking.webp',
    size: 'tall',
    description: 'Espacios diseñados para la productividad en medio del silencio natural.'
  },
  {
    title: 'SPORT COMPLEX',
    category: 'BIENESTAR',
    image: '/assets/sports.webp',
    size: 'wide',
    description: 'Canchas y gimnasio con vistas panorámicas al bosque nativo.'
  },
  {
    title: 'PORTERÍA NATIVA',
    category: 'EXCLUSIVIDAD',
    image: '/assets/porteria.webp',
    size: 'small',
    description: 'Seguridad 24/7 con diseño arquitectónico que honra el entorno.'
  }
];

const Amenities: React.FC = () => {
  return (
    <section id="amenidades" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--native-bg)', overflow: 'hidden' }}>
      <div className="container">
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

        <div className="cinema-grid">
          {/* Main Tall Item */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="amenity-item-tall"
          >
            <AmenityCard item={amenities[0]} />
          </motion.div>

          {/* Wide Item */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="amenity-item-wide"
          >
            <AmenityCard item={amenities[1]} />
          </motion.div>

          {/* Small Item with offset */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="amenity-item-small"
          >
            <AmenityCard item={amenities[2]} />
          </motion.div>

          {/* Abstract Branding Block */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="amenity-branding"
            style={{ 
              borderLeft: undefined,
              borderTop: undefined
            }}
          >
            <p style={{ fontSize: '0.9rem', opacity: 0.6, fontStyle: 'italic' }}>
              "Cada espacio en Native ha sido concebido para ser una extensión del entorno natural, donde la arquitectura desaparece en el paisaje."
            </p>
          </motion.div>
        </div>

        {/* Dynamic Ticker */}
        <div style={{ marginTop: '150px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '60px' }}>
          <div style={{ display: 'flex', overflow: 'hidden' }}>
            <motion.div 
              animate={{ x: [0, -1500] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{ display: 'flex', gap: '80px', flexShrink: 0 }}
            >
              {[
                'MINIMARKET', 'PISCINA CLIMATIZADA', 'SENDEROS ECOLÓGICOS', 
                'ESTANCIAS DEL BOSQUE', 'PORTERÍA 24/7', 'YOGA DECK', 'PET PARK',
                'MIRADOR', 'FIRE PIT', 'SQUASH'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <span style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 700, 
                    color: i % 2 === 0 ? 'var(--native-gold)' : 'transparent',
                    WebkitTextStroke: i % 2 !== 0 ? '1px rgba(255,255,255,0.2)' : 'none',
                    letterSpacing: '5px'
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
  );
};

const AmenityCard: React.FC<{ item: Amenity }> = ({ item }) => (
  <motion.div 
    whileHover="hover"
    style={{ width: '100%', height: '100%', position: 'relative', cursor: 'pointer' }}
  >
    <motion.img 
      variants={{
        hover: { scale: 1.1 }
      }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      src={item.image} 
      alt={item.title} 
      style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.65 }} 
    />
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to top, rgba(6, 15, 10, 0.9) 0%, transparent 60%)',
      zIndex: 2
    }} />
    <div style={{
      position: 'absolute',
      bottom: '40px',
      left: '40px',
      right: '40px',
      zIndex: 3
    }}>
      <motion.span 
        variants={{
          hover: { x: 10, color: '#fff' }
        }}
        style={{ 
          fontSize: '0.7rem', 
          fontWeight: 800, 
          letterSpacing: '4px', 
          color: 'var(--native-gold)',
          display: 'block',
          marginBottom: '10px'
        }}
      >
        {item.category}
      </motion.span>
      <h3 style={{ 
        fontSize: item.size === 'tall' ? 'clamp(2rem, 4vw, 3.5rem)' : 'clamp(1.4rem, 2.5vw, 2rem)', 
        lineHeight: 1, 
        fontWeight: 800,
        textTransform: 'uppercase'
      }}>
        {item.title}
      </h3>
      <motion.p 
        variants={{
          initial: { opacity: 0, y: 20 },
          hover: { opacity: 0.7, y: 0 }
        }}
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

