import { Box } from '@mui/material';

import { RealCaseItem } from '@interfaces/shared-interfaces';

import UserPlusIcon from '@assets/svg/user-plus-icon.svg?react';
import CircaledCheckIcon from '@assets/svg/circaled-check-icon.svg?react';

import './style.scss';
import RealCase from '@shared/components/RealCase';

const realWorldCases: RealCaseItem[] = [
  {
    title: 'Client Onboarding',
    description:
      'Trigger setup after sign-up: welcome email, introductory call scheduling, and onboarding form distribution.',
    icon: <UserPlusIcon />,
    list: [
      {
        icon: <CircaledCheckIcon />,
        text: 'Client Onboarding',
      },
      {
        icon: <CircaledCheckIcon />,
        text: 'Client Onboarding',
      },
      {
        icon: <CircaledCheckIcon />,
        text: 'Client Onboarding',
      },
      {
        icon: <CircaledCheckIcon />,
        text: 'Client Onboarding',
      },
    ],
  },
  {
    title: 'Client Onboarding',
    description:
      'Trigger setup after sign-up: welcome email, introductory call scheduling, and onboarding form distribution.',
    icon: <UserPlusIcon />,
    list: [
      {
        icon: <CircaledCheckIcon />,
        text: 'Client Onboarding',
      },
      {
        icon: <CircaledCheckIcon />,
        text: 'Client Onboarding',
      },
      {
        icon: <CircaledCheckIcon />,
        text: 'Client Onboarding',
      },
      {
        icon: <CircaledCheckIcon />,
        text: 'Client Onboarding',
      },
    ],
  },
  {
    title: 'Client Onboarding',
    description:
      'Trigger setup after sign-up: welcome email, introductory call scheduling, and onboarding form distribution.',
    icon: <UserPlusIcon />,
    list: [
      {
        icon: <CircaledCheckIcon />,
        text: 'Client Onboarding',
      },
      {
        icon: <CircaledCheckIcon />,
        text: 'Client Onboarding',
      },
      {
        icon: <CircaledCheckIcon />,
        text: 'Client Onboarding',
      },
      {
        icon: <CircaledCheckIcon />,
        text: 'Client Onboarding',
      },
    ],
  },
  {
    title: 'Client Onboarding',
    description:
      'Trigger setup after sign-up: welcome email, introductory call scheduling, and onboarding form distribution.',
    icon: <UserPlusIcon />,
    list: [
      {
        icon: <CircaledCheckIcon />,
        text: 'Client Onboarding',
      },
      {
        icon: <CircaledCheckIcon />,
        text: 'Client Onboarding',
      },
      {
        icon: <CircaledCheckIcon />,
        text: 'Client Onboarding',
      },
      {
        icon: <CircaledCheckIcon />,
        text: 'Client Onboarding',
      },
    ],
  },
];

export default function RealWorldUseCases() {
  return (
    <Box className="real-world-use-cases-comp">
      {realWorldCases.map((caseItem, index) => (
        <RealCase key={index} case={caseItem} />
      ))}
    </Box>
  );
}
