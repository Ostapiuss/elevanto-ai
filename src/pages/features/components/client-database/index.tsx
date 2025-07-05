import { useRef } from 'react';

import { Box } from '@mui/material';
import { motion, useInView } from 'framer-motion';

import BasicTable from './components/basic-tables';

import './style.scss';

const barHeights = [58, 30, 48, 40, 30, 20, 50];

const StatBarChart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <div
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

export default function ClientDatabase() {
  return (
    <Box className="client-database">
      <BasicTable />
      <Box className="client-database__activity">
        <h2 className="title">Activity Volume by Week</h2>
        <StatBarChart />
      </Box>
    </Box>
  );
}
