import SimpleSetupIcon from '@assets/svg/simple-setup-icon.svg?react';
import LaunchEngageIcon from '@assets/svg/launch-engage-icon.svg?react';
import RunOpsDaily from '@assets/svg/run-daily-icon.svg?react';
import AnalyzeRefineIcon from '@assets/svg/analyze-refine-icon.svg?react';
import RunOperations from '@assets/svg/run-daily-operations.svg?react';
import MiniorOptimize from '@assets/svg/monitor-optimize.svg?react';

import ArrowImpactIcon from '@assets/svg/arrow-impact.svg?react';
import LightingIcon from '@assets/svg/lighting-icon.svg?react';
import TimerIcon from '@assets/svg/timer-icon.svg?react';
import StarFolderIcon from '@assets/svg/star-folder-icon.svg?react';
import DollarMediumIcon from '@assets/svg/dollar-mdeium-icon.svg?react';

import { BenefitItem, HowItWorkItem } from '@interfaces/shared-interfaces';

export const workersAiAssistant: HowItWorkItem[] = [
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

export const workersAllInOne: HowItWorkItem[] = [
  {
    key: 1,
    icon: <SimpleSetupIcon />,
    title: 'Setup & Onboarding',
    description: 'Import data and connect calendars, emails, apps.',
  },
  {
    key: 2,
    icon: <LaunchEngageIcon />,
    title: 'Customize & Brand',
    description: 'Define services, upload logo, style invoices and emails.',
  },
  {
    key: 3,
    icon: <RunOperations />,
    title: 'Run Operations',
    description: 'Manage daily work from one unified dashboard.',
  },
  {
    key: 4,
    icon: <MiniorOptimize />,
    title: 'Monitor & Optimize',
    description: 'Track performance, find bottlenecks, optimize as you grow.',
  },
];

export const businessItemsAiAssistant: BenefitItem[] = [
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

export const businessItemsAllInOne: BenefitItem[] = [
  {
    icon: <StarFolderIcon />,
    iconTitle: '+38%',
    title: 'More Qualified Leads',
    description: 'AI assistants qualify leads 24/7',
  },
  {
    icon: <DollarMediumIcon />,
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
