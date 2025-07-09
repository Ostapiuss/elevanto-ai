import { ReactNode } from 'react';

import { useNavigate } from 'react-router';

import { Box } from '@mui/material';
import { joinClassNames } from '@utils/utility';

import WrapStyleDoc from '../WrapDocStyles';

import BackIcon from '@assets/svg/back-icon.svg?react';

import './style.scss';

type Props = {
  className?: string;
  children: ReactNode;
};

export default function DocSection({ className, children }: Props) {
  const navigate = useNavigate();

  return (
    <Box className={joinClassNames('doc-section', className)}>
      <Box className="action" onClick={() => navigate(-1)}>
        <BackIcon />
        <p>Back</p>
      </Box>
      <Box className="content">
        <WrapStyleDoc>{children}</WrapStyleDoc>
      </Box>
    </Box>
  );
}
