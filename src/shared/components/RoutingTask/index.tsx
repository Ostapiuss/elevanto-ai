import { Box } from '@mui/material';

import { ReactNode } from 'react';

import './style.scss';

type Props = {
  icon: ReactNode;
  title: string;
  subtitle: string;
};

export default function RoutingTask({ icon, subtitle, title }: Props) {
  return (
    <Box className="routing-tasks">
      <Box className="routing-tasks__icon">{icon}</Box>
      <Box className="routing-tasks__content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </Box>
    </Box>
  );
}
