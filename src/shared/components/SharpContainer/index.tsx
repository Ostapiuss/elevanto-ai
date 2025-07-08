import { ReactNode } from 'react';

import { Box } from '@mui/material';

import './style.scss';

type Props = {
  children: ReactNode;
};

export default function SharpContainer({ children }: Props) {
  return <Box className="sharp-container">{children}</Box>;
}
