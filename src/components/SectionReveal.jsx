import { motion } from 'framer-motion';

export default function SectionReveal({
  children,
  className = '',
  delay = 0,
  variant = 'slideUp', // 'slideUp' | 'badge' | 'scale'
}) {
  if (variant === 'badge') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 6 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{
          type: 'spring',
          stiffness: 320,
          damping: 22,
          delay,
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
