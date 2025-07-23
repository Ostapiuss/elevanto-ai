import { Box } from '@mui/material';

import { WorkflowStepIntem } from '@interfaces/shared-interfaces';

import { joinClassNames } from '@utils/utility';
import { IF } from '@shared/components/IF';

import StepArrowIcon from '@assets/svg/arrow-step-icon.svg?react';

import './style.scss';

type Props = {
  steps: WorkflowStepIntem[];
  title: string;
};

export default function WorkflowSteps({ steps, title }: Props) {
  return (
    <Box className="workflow-steps">
      <Box className="workflow-steps-container">
        <Box className="workflow-steps-workflow-container">
          {steps.map((step, index) => {
            const lastElementIndex = steps.length - 1;

            return (
              <>
                <Box
                  key={index}
                  sx={{ backgroundColor: step.color, padding: '12px 50px' }}
                  className={joinClassNames('step', {
                    lastStep: lastElementIndex === index,
                  })}
                >
                  {step.text}
                </Box>
                <IF condition={Boolean(lastElementIndex !== index)}>
                  <Box className="workflow-steps-icon">
                    <StepArrowIcon />
                  </Box>
                </IF>
              </>
            );
          })}
        </Box>

        <Box className="workflow-steps-title">
          <h2>{title}</h2>
        </Box>
      </Box>
    </Box>
  );
}
