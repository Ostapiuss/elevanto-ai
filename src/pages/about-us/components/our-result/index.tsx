import { Box } from '@mui/material';

import SharpItem from '@shared/components/SharpItem';

import ArrowUpIcon from '@assets/svg/up-arrow.svg?react';
import HeadphonesIcon from '@assets/svg/headphones-icon.svg?react';
import DollarIcon from '@assets/svg/dollar-icon.svg?react';

import './style.scss';
import SharpContainer from '@shared/components/SharpContainer';

const results = [
  {
    icon: <ArrowUpIcon />,
    iconTitle: '10,000+',
    title: 'businesses served',
  },
  {
    icon: <HeadphonesIcon />,
    iconTitle: '24/7',
    title: 'AI availability',
  },
  {
    icon: <DollarIcon />,
    iconTitle: '30%',
    title: 'average cost savings',
  },
];

export default function OurResults() {
  return (
    <Box className="our-result">
      <SharpContainer>
        {results.map((item, index) => {
          return (
            <SharpItem key={index}>
              <Box className="result-item">
                <Box className="result-item__icon">
                  <Box className="icon">{item.icon}</Box>
                  <h2 className="title">{item.iconTitle}</h2>
                </Box>
                <Box className="result-item__title">{item.title}</Box>
              </Box>
            </SharpItem>
          );
        })}
      </SharpContainer>
    </Box>
  );
}
