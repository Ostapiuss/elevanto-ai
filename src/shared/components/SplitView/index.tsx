import { ReactNode } from 'react';

import { Box, Button } from '@mui/material';

import { IF } from '@shared/components/IF';

import { joinClassNames } from '@utils/utility';

import './style.scss';

type Props = {
  firstColRender: ReactNode;
  position?: 'center' | 'top' | 'bottom';
  text: {
    title: string;
    subtitle: string;
    btnText?: string | ReactNode;
  };
  onButtonClick?: () => void;
  footerRenderProps?: () => ReactNode;
};

export default function SplitView({ firstColRender, text, footerRenderProps, onButtonClick, position = 'top' }: Props) {
  return (
    <Box className={joinClassNames('split-view', position)}>
      <Box className="split-view__col1">{firstColRender}</Box>
      <Box className="split-view__col2 col2">
        <Box className="col2__title">{text.title}</Box>
        <p>{text.subtitle}</p>
        <IF condition={Boolean(text.btnText)}>
          <Box className="col2__action">
            <IF condition={Boolean(typeof text.btnText === 'string')}>
              <Button onClick={onButtonClick} variant="contained">
                {text.btnText}
              </Button>
            </IF>
            <IF condition={Boolean(typeof text.btnText !== 'string')}>{text.btnText}</IF>
          </Box>
        </IF>
        <IF condition={Boolean(footerRenderProps)}>{footerRenderProps?.()}</IF>
      </Box>
    </Box>
  );
}
