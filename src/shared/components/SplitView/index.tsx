import { ReactNode } from 'react';

import { Box, Button } from '@mui/material';

import { joinClassNames } from '@utils/utility';

import './style.scss';

type Props = {
  firstColRender: ReactNode;
  position?: 'center' | 'top' | 'bottom';
  text: {
    title: string;
    subtitle: string;
    btnText: string;
  };
};

export default function SplitView({ firstColRender, text, position = 'top' }: Props) {
  return (
    <Box className={joinClassNames('split-view', position)}>
      <Box className="split-view__col1">{firstColRender}</Box>
      <Box className="split-view__col2 col2">
        <Box className="col2__title">{text.title}</Box>
        <p>{text.subtitle}</p>
        <Box className="col2__action">
          <Button variant="contained">{text.btnText}</Button>
        </Box>
      </Box>
    </Box>
  );
}
