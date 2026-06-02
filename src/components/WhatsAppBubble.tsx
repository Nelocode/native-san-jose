import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppBubble: React.FC = () => {
  const phoneNumber = '573205115976';
  const message = 'Hola! Me gustaría recibir más información sobre Native San José.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="whatsapp-bubble"
      aria-label="Chatear en WhatsApp"
    >
      {/* Pulse effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="whatsapp-pulse"
      />
      
      {/* SVG Icon */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0"
        className="whatsapp-svg"
      >
        <path
          fill="currentColor"
          d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.37 5.048L2 22l5.127-1.341a9.926 9.926 0 0 0 4.887 1.29h.005c5.507 0 9.99-4.479 9.991-9.985C22.01 6.479 17.523 2 12.012 2zm4.957 14.22c-.272.76-1.378 1.373-1.91 1.41-.478.034-.944.188-3.05-.688-2.531-1.052-4.14-3.626-4.266-3.795-.125-.169-1.023-1.353-1.01-2.585.012-1.232.653-1.828.88-2.066.228-.238.498-.297.663-.297.166 0 .332.001.476.007.151.006.353-.06.551.417.202.489.691 1.678.75 1.797.06.12.099.258.019.417-.079.158-.12.257-.238.397-.12.139-.251.31-.358.416-.12.119-.244.25-.105.489.139.238.616.994 1.324 1.621.911.808 1.678 1.058 1.916 1.177.238.12.377.099.516-.06.139-.159.616-.714.781-.952.166-.238.332-.2.558-.12.225.079 1.429.674 1.674.795.245.12.41.18.47.28.06.1.06.574-.212 1.334z"
        />
      </svg>
    </motion.a>
  );
};

export default WhatsAppBubble;
