import AvatarIcon from '@assets/svg/avatag.svg?react';

import CustomTag from '@shared/components/CustomTag';
import { Box } from '@mui/material';
import InfoBlock from '@shared/components/InfoBlock';

import './style.scss';

const teams = [
  {
    icon: <AvatarIcon />,
    fullName: 'Name Surname',
    tag: <CustomTag bgColor="#FCEAEF" color="#C82859" text="Job Title" />,
    description: 'AI researcher with 10+ years in machine learning and automation.',
  },
  {
    icon: <AvatarIcon />,
    fullName: 'Name Surname',
    tag: <CustomTag bgColor="#FCEAEF" color="#C82859" text="Job Title" />,
    description: 'AI researcher with 10+ years in machine learning and automation.',
  },
  {
    icon: <AvatarIcon />,
    fullName: 'Name Surname',
    tag: <CustomTag bgColor="#FCEAEF" color="#C82859" text="Job Title" />,
    description: 'AI researcher with 10+ years in machine learning and automation.',
  },
  {
    icon: <AvatarIcon />,
    fullName: 'Name Surname',
    tag: <CustomTag bgColor="#FCEAEF" color="#C82859" text="Job Title" />,
    description: 'AI researcher with 10+ years in machine learning and automation.',
  },
  {
    icon: <AvatarIcon />,
    fullName: 'Name Surname',
    tag: <CustomTag bgColor="#FCEAEF" color="#C82859" text="Job Title" />,
    description: 'AI researcher with 10+ years in machine learning and automation.',
  },
  {
    icon: <AvatarIcon />,
    fullName: 'Name Surname',
    tag: <CustomTag bgColor="#FCEAEF" color="#C82859" text="Job Title" />,
    description: 'AI researcher with 10+ years in machine learning and automation.',
  },
];

export default function MeetWithTeam() {
  return (
    <Box className="meet-with-team">
      {teams.map((item, index) => {
        return (
          <InfoBlock
            position="center"
            key={index}
            description={item.description}
            icon={item.icon}
            title={item.fullName}
            tag={item.tag}
          />
        );
      })}
    </Box>
  );
}
