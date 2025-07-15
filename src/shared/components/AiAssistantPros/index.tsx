import { Box } from '@mui/material';

import { ReactNode } from 'react';

import './style.scss';

type Props = {
  icon: ReactNode;
  title: string;
  subtitle: string;
};

export default function AiAssistantPros({ icon, subtitle, title }: Props) {
  return (
    <Box className="ai-assistant-item">
      <Box className="ai-assistant-item__icon">{icon}</Box>
      <Box className="ai-assistant-item__title-container">
        <div className="title">{title}</div>
        <p className="subtitle">{subtitle}</p>
      </Box>
    </Box>
  );
}
