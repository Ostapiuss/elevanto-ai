import { Box } from '@mui/material';

import { AutomatedProcessItem } from '@interfaces/shared-interfaces';
import StepArrowIcon from '@assets/svg/arrow-step-icon.svg?react';

import { joinClassNames } from '@utils/utility';
import { IF } from '../IF';

import './style.scss';

type Props = {
  process: AutomatedProcessItem[];
};

export default function AutomatedProcess({ process }: Props) {
  const lastIndex = process.length - 1;

  return (
    <Box className="automated-process">
      <Box className="automated-process__list">
        {process.map((processItem, index) => {
          return (
            <>
              <Box key={index} className={joinClassNames('process-item-list', processItem.status)}>
                <Box className="process-item-list__icon">{processItem.title}</Box>
                <h4 className="process-item-list__title">{processItem.text}</h4>
              </Box>
              <IF condition={index !== lastIndex}>
                <Box className="process-item-list__arrow-image">
                  <StepArrowIcon />
                </Box>
              </IF>
            </>
          );
        })}
      </Box>
    </Box>
  );
}
