import { ReactNode } from 'react';
import { Box } from '@mui/material';

import './style.scss';

type Props = {
  children: ReactNode;
};

export default function SharpItem({ children }: Props) {
  return <Box className="sharp-item">{children}</Box>;
}
