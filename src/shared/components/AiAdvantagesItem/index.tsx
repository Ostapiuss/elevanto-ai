import { Box } from '@mui/material';

import { ReactNode } from 'react';

import './style.scss';

type Props = {
  icon: ReactNode;
  title: string;
  subtitle: string;
};

export default function AiAdvantageItem({ icon, title, subtitle }: Props) {
  return (
    <Box className="ai-advantage-item">
      <Box className="ai-advantage-item__icon">{icon}</Box>
      <Box className="ai-advantage-item__content">
        <div className="title">{title}</div>
        <p className="subtitle">{subtitle}</p>
      </Box>
    </Box>
  );
}
