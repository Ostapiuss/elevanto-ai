import { Box } from '@mui/material';

import SharpContainer from '@shared/components/SharpContainer';
import SharpItem from '@shared/components/SharpItem';

import ArrowImpactIcon from '@assets/svg/arrow-impact.svg?react';
import LightingIcon from '@assets/svg/lighting-icon.svg?react';
import TimerIcon from '@assets/svg/timer-icon.svg?react';

import './style.scss';

const businessItems = [
  {
    icon: <ArrowImpactIcon />,
    iconTitle: '+38%',
    title: 'More Qualified Leads',
    description: 'AI assistants qualify leads 24/7',
  },
  {
    icon: <LightingIcon />,
    iconTitle: '-42%',
    title: 'Missed Opportunities',
    description: 'Never miss another potential customer',
  },
  {
    icon: <TimerIcon />,
    iconTitle: '10x',
    title: 'Faster Response Times',
    description: 'Instant responses vs hours or days',
  },
];

export default function BusinessImpact() {
  return (
    <Box className="business-impact-component">
      <SharpContainer>
        {businessItems.map((item, index) => {
          return (
            <SharpItem key={index}>
              <Box className="business-impact-item">
                <Box className="business-impact-item__icon-content">
                  <Box className="icon">{item.icon}</Box>
                  <h2 className="icon-title">{item.iconTitle}</h2>
                </Box>
                <div className="business-impact-item__title">{item.title}</div>
                <p className="business-impact-item__description">{item.description}</p>
              </Box>
            </SharpItem>
          );
        })}
      </SharpContainer>
    </Box>
  );
}
