import { Box } from '@mui/material';

import SharpItem from '@shared/components/SharpItem';

import SharpContainer from '@shared/components/SharpContainer';

import { HowItWorkItem } from '@interfaces/shared-interfaces';

import './style.scss';

type Props = {
  workers: HowItWorkItem[];
};

export default function HowItWorks({ workers }: Props) {
  return (
    <Box className="how-it-works">
      <SharpContainer>
        {workers.map((worker) => {
          return (
            <SharpItem key={worker.key}>
              <Box key={worker.key} className="work-item">
                <Box className="work-item__number">
                  <p>{worker.key}</p>
                </Box>
                <Box className="work-item__icon">{worker.icon}</Box>
                <div className="work-item__title">{worker.title}</div>
                <p className="work-item__description">{worker.description}</p>
              </Box>
            </SharpItem>
          );
        })}
      </SharpContainer>
    </Box>
  );
}
