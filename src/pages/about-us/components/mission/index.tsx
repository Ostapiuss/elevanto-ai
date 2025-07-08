import TargetIcon from '@assets/svg/target-icon.svg?react';
import VisionIcon from '@assets/svg/eye-icon.svg?react';

import { Box } from '@mui/material';
import SharpItem from '@shared/components/SharpItem';

import './style.scss';
import SharpContainer from '@shared/components/SharpContainer';

const companyMissions = [
  {
    title: 'Our Mission',
    icon: <TargetIcon />,
    description: 'Empower growing businesses with AI-driven tools that simplify operations and drive real results.',
  },
  {
    title: 'Our Vision',
    icon: <VisionIcon />,
    description:
      'To become the go-to platform for seamless, intelligent business automation across industries worldwide.',
  },
];

export default function CompanyMission() {
  return (
    <Box className="company-mission">
      <SharpContainer>
        {companyMissions.map((item, index) => {
          return (
            <SharpItem key={index}>
              <Box className="item">
                <Box className="item__icon">{item.icon}</Box>
                <Box className="item__title">{item.title}</Box>
                <p className="item__description">{item.description}</p>
              </Box>
            </SharpItem>
          );
        })}
      </SharpContainer>
    </Box>
  );
}
