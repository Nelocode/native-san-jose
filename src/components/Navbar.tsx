import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navItems = [
    { name: 'Inicio', id: 'hero' },
    { name: 'Proyecto', id: 'proyecto' },
    { name: 'Nosotros', id: 'nosotros' },
    { name: 'Amenidades', id: 'amenidades' },
    { name: 'Ubicación', id: 'ubicacion' }
  ];

  const menuVariants = {
    initial: { opacity: 0, x: '100%' },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    },
    exit: { 
      opacity: 0, 
      x: '100%',
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  const linkVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.4 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    })
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          padding: isScrolled ? '15px 5%' : '40px 5%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 1000,
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: isScrolled || isOpen ? 'rgba(6, 15, 10, 0.95)' : 'transparent',
          backdropFilter: isScrolled || isOpen ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(176, 164, 109, 0.1)' : 'none'
        }}
      >
        <div className="logo" style={{ height: '35px', cursor: 'pointer', zIndex: 1001 }}>
          <img 
            src="/assets/logo.webp" 
            alt="Native San José" 
            style={{ height: '100%', filter: 'brightness(1.2)' }} 
          />
        </div>
        
        {/* Desktop Menu */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
          <ul style={{ 
            display: 'flex', 
            gap: '40px', 
            listStyle: 'none',
            fontSize: '0.6rem', 
            fontWeight: 700, 
            textTransform: 'uppercase', 
            letterSpacing: '4px' 
          }}>
            {navItems.map((item) => (
              <li key={item.name}>
                <motion.a 
                  href={`#${item.id}`} 
                  whileHover={{ color: 'var(--native-gold)', opacity: 1 }}
                  style={{ 
                    textDecoration: 'none', 
                    color: 'var(--native-white)',
                    opacity: 0.6,
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  {item.name}
                </motion.a>
              </li>
            ))}
          </ul>
          <a 
            href="#contacto" 
            className="btn-premium" 
            style={{ padding: '12px 30px', fontSize: '0.6rem', letterSpacing: '4px' }}
          >
            CONTACTO
          </a>
        </div>

        {/* Mobile Toggle */}
        <div 
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            zIndex: 1001,
            cursor: 'pointer',
            display: 'none', // Managed via CSS
            flexDirection: 'column',
            gap: '6px'
          }}
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            style={{ width: '30px', height: '2px', background: 'var(--native-gold)', display: 'block' }} 
          />
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            style={{ width: '30px', height: '2px', background: 'var(--native-gold)', display: 'block' }} 
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            style={{ width: '30px', height: '2px', background: 'var(--native-gold)', display: 'block' }} 
          />
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background: 'var(--native-bg)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0 10%'
            }}
          >
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={`#${item.id}`}
                  custom={i}
                  variants={linkVariants}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontSize: 'clamp(2rem, 8vw, 4rem)',
                    fontWeight: 800,
                    color: 'var(--native-white)',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    letterSpacing: '-2px'
                  }}
                  whileHover={{ x: 20, color: 'var(--native-gold)' }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contacto"
                variants={linkVariants}
                custom={navItems.length}
                onClick={() => setIsOpen(false)}
                className="btn-premium"
                style={{ marginTop: '40px', alignSelf: 'center' }}
              >
                CONTACTO
              </motion.a>
            </div>

            {/* Social / Info Footer in Menu */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 1 }}
              style={{
                position: 'absolute',
                bottom: '60px',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '4px',
                textAlign: 'center'
              }}
            >
              NATIVE SAN JOSÉ — GUARNE, ANTIOQUIA
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;


