import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const StatBarChart = () => {
  const barHeights = [58, 30, 48, 40, 30, 20, 50];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <div
      className="bar-chart-simple"
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '6px',
        height: '80px',
        background: '#fdebef',
        padding: '20px',
        paddingLeft: 0,
        borderRadius: '12px',
        marginTop: '8px',
      }}
    >
      {barHeights.map((height, index) => (
        <motion.div
          key={index}
          initial={{ height: 0 }}
          animate={isInView ? { height } : { height: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          style={{
            width: '13px',
            backgroundColor: '#d62857',
            borderRadius: '2px',
          }}
        />
      ))}
    </div>
  );
};
