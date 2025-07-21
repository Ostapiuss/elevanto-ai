import { Box } from '@mui/material';

import SimpleSetupIcon from '@assets/svg/simple-setup-icon.svg?react';
import LaunchEngageIcon from '@assets/svg/launch-engage-icon.svg?react';
import RunOpsDaily from '@assets/svg/run-daily-icon.svg?react';
import AnalyzeRefineIcon from '@assets/svg/analyze-refine-icon.svg?react';

import SharpItem from '@shared/components/SharpItem';

import SharpContainer from '@shared/components/SharpContainer';

import './style.scss';

const workers = [
  {
    key: 1,
    icon: <SimpleSetupIcon />,
    title: 'Simple Setup',
    description: 'Connect Elevanto to your website and phone system in minutes',
  },
  {
    key: 2,
    icon: <LaunchEngageIcon />,
    title: 'Launch & Engage',
    description: 'Go live and start engaging customers 24/7 automatically',
  },
  {
    key: 3,
    icon: <RunOpsDaily />,
    title: 'Run Ops Daily',
    description: 'Go live and start engaging customers 24/7 automatically',
  },
  {
    key: 4,
    icon: <AnalyzeRefineIcon />,
    title: 'Analyze & Refine',
    description: 'Monitor performance and optimize for better results',
  },
];

export default function HowItWorks() {
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
