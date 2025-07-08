import CheckPersonalIcon from '@assets/svg/check-personal-icon.svg?react';
import WorldIcon from '@assets/svg/world-icon.svg?react';
import CalculatorIcon from '@assets/svg/calculator.svg?react';
import { PersonailezedItem } from '@interfaces/shared-interfaces';

export const presentationItems: Array<PersonailezedItem> = [
  { title: 'Personalized Demo', subtitle: 'See how it works for your specific business', icon: <CheckPersonalIcon /> },
  { title: 'Quick Setup', subtitle: 'Be up and running in under a day', icon: <WorldIcon /> },
  { title: 'ROI Calculator', subtitle: 'See your potential savings and growth', icon: <CalculatorIcon /> },
];
