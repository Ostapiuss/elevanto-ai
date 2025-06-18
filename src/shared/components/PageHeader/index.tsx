import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import './style.scss';
import { ReactNode } from 'react';
import { IF } from '../IF';

type Props = {
  title: string | ReactNode;
  subTitle?: string;
  size?: number;
};

export const PageHeader: React.FC<Props> = ({ title, subTitle, size }) => {
  return (
    <Box className="page-header">
      <Typography style={{ fontSize: size ? `${size}px` : '56px' }} className="page-header__title" variant="h1">
        {title}
      </Typography>
      <IF condition={Boolean(subTitle)}>
        <p className="page-header__subtitle">{subTitle}</p>
      </IF>
    </Box>
  );
};
