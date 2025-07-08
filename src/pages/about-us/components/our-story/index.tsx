import { Box } from '@mui/material';

import ShootingStart from '@assets/svg/shooting-star.svg?react';
import RocketIcon from '@assets/svg/rocket-icon.svg?react';
import WorldSmallIcon from '@assets/svg/world-small-icon.svg?react';

import './style.scss';
import SharpContainer from '@shared/components/SharpContainer';
import SharpItem from '@shared/components/SharpItem';

const storyItems = [
  {
    icon: <ShootingStart />,
    iconTitle: '2023',
    title: 'Founded',
    description: 'Elevanto was born from the idea that tools should work for people, not the other way around.',
  },
  {
    icon: <RocketIcon />,
    iconTitle: '2024',
    title: 'First Product Launch',
    description: 'Released AI-powered CRM and chat assistant.',
  },
  {
    icon: <WorldSmallIcon />,
    iconTitle: '2025',
    title: '10k+ Businesses',
    description: 'Helping companies automate and grow globally.',
  },
];

export default function OurStory() {
  return (
    <Box className="our-story">
      <SharpContainer>
        {storyItems.map((item, index) => {
          return (
            <SharpItem key={index}>
              <Box className="story-item">
                <Box className="story-item__icon-content">
                  <Box className="icon">{item.icon}</Box>
                  <h2 className="icon-title">{item.iconTitle}</h2>
                </Box>
                <div className="story-item__title">{item.title}</div>
                <p className="story-item__description">{item.description}</p>
              </Box>
            </SharpItem>
          );
        })}
      </SharpContainer>
    </Box>
  );
}
