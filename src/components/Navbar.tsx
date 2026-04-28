import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', id: 'hero' },
    { name: 'Proyecto', id: 'proyecto' },
    { name: 'Amenidades', id: 'amenidades' },
    { name: 'Ubicación', id: 'ubicacion' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
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
        backgroundColor: isScrolled ? 'rgba(5, 7, 5, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(176, 164, 109, 0.1)' : 'none'
      }}
    >
      <div className="logo" style={{ height: '35px', cursor: 'pointer' }}>
        <img 
          src="/assets/logo.png" 
          alt="Native San José" 
          style={{ height: '100%', filter: 'brightness(1.2)' }} 
        />
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
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
    </motion.nav>
  );
};

export default Navbar;


