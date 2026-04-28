import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      style={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#000'
      }}
    >
      {/* Cinematic Video Background */}
      <motion.div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          scale: videoScale,
          zIndex: 0
        }}
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.5
          }}
        >
          <source src="/assets/trailer.mp4" type="video/mp4" />
        </video>
        {/* Dark Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(10,18,13,0.4) 0%, rgba(10,18,13,0.8) 100%)',
          zIndex: 1
        }} />
      </motion.div>

      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '0 8%' }}>
        <motion.div style={{ y: textY, opacity }}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="label-gold"
          >
            Antioquia, Colombia // Native San José
          </motion.span>
          
          <h1 className="title-xl" style={{ position: 'relative' }}>
            <motion.span 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'block' }}
            >
              NATIVE
            </motion.span>
            <motion.span 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-outline"
              style={{ display: 'block', marginLeft: '15%' }}
            >
              SAN JOSÉ
            </motion.span>
          </h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            style={{ 
              marginTop: '40px', 
              display: 'flex', 
              gap: '40px', 
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            <p style={{ 
              maxWidth: '400px', 
              fontSize: '1.2rem', 
              fontWeight: 300, 
              color: 'rgba(255,255,255,0.7)',
              borderLeft: '2px solid var(--native-gold)',
              paddingLeft: '30px'
            }}>
              Donde la arquitectura moderna <span className="text-gold">se funde</span> con el bosque nativo.
            </p>
            <a href="#contact" className="btn-premium">Descubrir el Origen</a>
          </motion.div>
        </motion.div>
      </div>

      {/* Vertical Indicators */}
      <div style={{ 
        position: 'absolute', 
        right: '5%', 
        top: '50%', 
        transform: 'translateY(-50%)', 
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        {[0.2, 0.4, 1].map((op, i) => (
          <div key={i} style={{ width: '2px', height: '60px', backgroundColor: 'var(--native-gold)', opacity: op }}></div>
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ 
          position: 'absolute', 
          bottom: '50px', 
          left: '50%', 
          transform: 'translateX(-50%)',
          zIndex: 2,
          opacity: 0.5,
          cursor: 'pointer'
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

