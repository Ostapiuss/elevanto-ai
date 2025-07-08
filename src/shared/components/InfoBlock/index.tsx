import { Box, styled } from '@mui/material';

import './style.scss';
import { ReactNode } from 'react';
import { IF } from '../IF';

type Props = {
  icon?: ReactNode;
  title: string;
  tag?: ReactNode;
  description: string;
  position?: 'center' | 'flex-start';
};

export default function InfoBlock({ description, icon, title, tag, position }: Props) {
  const StyledInfoBlock = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-radius: 16px;
    border: 1px solid #eaebec;
    box-shadow: 0px 2px 8px 0px #00000014;
    background-color: #ffffff;
    align-items: ${position};
  `;

  return (
    <StyledInfoBlock className="info-block">
      <IF condition={Boolean(icon)}>
        <Box className="info-block__icon">{icon}</Box>
      </IF>
      <Box className="info-block__title">{title}</Box>
      <IF condition={Boolean(tag)}>
        <Box className="info-block__tag">{tag}</Box>
      </IF>
      <p className="info-block__description">{description}</p>
    </StyledInfoBlock>
  );
}
