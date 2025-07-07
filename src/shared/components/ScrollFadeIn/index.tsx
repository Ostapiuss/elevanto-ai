import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollFadeInProps {
  children: React.ReactNode;
  delay?: number;
}

export const ScrollFadeIn = ({ children, delay = 0 }: ScrollFadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
};
