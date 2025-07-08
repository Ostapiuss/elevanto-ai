import { Box } from '@mui/material';

import LighterIcon from '@assets/svg/lighter-icon.svg?react';
import HandShakeIcon from '@assets/svg/handshake-icon.svg?react';
import RocketIcon from '@assets/svg/rocket-small-icon.svg?react';

import InfoBlock from '@shared/components/InfoBlock';

import './style.scss';

const teams = [
  {
    icon: <LighterIcon />,
    title: 'Simplicity First',
    description: 'We remove friction so you can focus on growth.',
  },
  {
    icon: <HandShakeIcon />,
    title: 'Customer-Centric',
    description: 'We design with real users, not assumptions.',
  },
  {
    icon: <RocketIcon />,
    title: 'Always Evolving',
    description: 'We iterate fast to keep you ahead.',
  },
];

export default function OurValues() {
  return (
    <Box className="our-values">
      {teams.map((item, index) => {
        return <InfoBlock key={index} icon={item.icon} description={item.description} title={item.title} />;
      })}
    </Box>
  );
}
