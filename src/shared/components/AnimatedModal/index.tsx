import { ReactNode } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  children: ReactNode;
};

export default function AnimatedModal({ children }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        initial={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
        animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
        exit={{ opacity: 0, scale: 0.9, x: '-50%', y: '-50%' }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
