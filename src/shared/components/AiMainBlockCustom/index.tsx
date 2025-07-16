/* eslint-disable @typescript-eslint/no-unused-vars */

import AiVoiceIcon from '@assets/svg/ai-voice.svg?react';
import AiChatBot from '@assets/svg/ai-chat.svg?react';
import AutomatedWorkflow from '@assets/svg/automated-workflow.svg?react';
import AutomatedCrm from '@assets/svg/automated-srm.svg?react';
import InvoiceBilling from '@assets/svg/billing-ai.svg?react';
import PhoneIcon from '@assets/svg/phone-inbound.svg?react';
import CustomTag from '@shared/components/CustomTag';

import CalendarIcon from '@assets/svg/calendar.svg?react';
import AvailabilityIcon from '@assets/svg/availability.svg?react';
import SmallPlusIcon from '@assets/svg/small-plus-icon.svg?react';

import WorldIntegration from '@assets/svg/world-integration.svg?react';
import WorldMultiLanguage from '@assets/svg/world-multilanguage.svg?react';
import LeadQuality from '@assets/svg/lead-quality.svg?react';

import TaskAutomation from '@assets/svg/task-automation.svg?react';
import DeadlineIcon from '@assets/svg/deadline-icon.svg?react';
import PuzzleIcon from '@assets/svg/puzzle-icon.svg?react';

import ContactIcon from '@assets/svg/contact-icon.svg?react';
import PerfomanceIcon from '@assets/svg/perfomance-icon.svg?react';
import MobileIcon from '@assets/svg/mobile-icon.svg?react';

import ListIcon from '@assets/svg/list-icon.svg?react';
import PaymentIcon from '@assets/svg/payment-icon.svg?react';
import SmallDollarIcon from '@assets/svg/small-dollar-icon.svg?react';

import { Box } from '@mui/material';
import AiBlock from '../AiBlock';

import ConnectionLineEl1Bottom from '@assets/svg/ui-agents/connection-line-bottom-01.svg?react';
import ConnectionLineCentered from '@assets/svg/ui-agents/connection-line-centered.svg?react';
import ConnectionLineEl2Top from '@assets/svg/ui-agents/connection-line-top-02.svg?react';
import ConnectionLineEl2Right from '@assets/svg/ui-agents/connection-line-right-02.svg?react';
import ConnectionLineEl5Bottom from '@assets/svg/ui-agents/connection-line-bottom-05.svg?react';
import ConnectionLineEl5Left from '@assets/svg/ui-agents/connection-line-left-05.svg?react';
import TabletConnectionLineEl02 from '@assets/svg/ui-agents/tablet-connection-line-02.svg?react';
import TabletConnectionLineEl03 from '@assets/svg/ui-agents/tablet-connection-line-03.svg?react';
import TabletConnectionLineEl04 from '@assets/svg/ui-agents/tablet-connection-line-04.svg?react';
import TabletConnectionLineEl01 from '@assets/svg/ui-agents/tablet-connection-line-01.svg?react';
import TabletConnectionLineEl05 from '@assets/svg/ui-agents/tablet-connection-line-05.svg?react';

import TopMultiplePoints from '@assets/svg/ui-agents/top-multiple-points.svg?react';
import SinglePoint from '@assets/svg/ui-agents/single-point.svg?react';
import BottomPoints from '@assets/svg/ui-agents/bottom-multiple-points.svg?react';

import { AiBlockItem } from '@interfaces/shared-interfaces';

import './style.scss';

type NodeItem = {
  id: string;
  data: AiBlockItem;
};

const initialNodes: NodeItem[] = [
  {
    id: '1',
    data: {
      title: 'Ai Voice Agent',
      rightPoints: true,
      className: 'ai-01',
      icon: <AiVoiceIcon />,
      tag: <CustomTag text="Custom" bgColor="#E6F6F9" color="#03586D" border="1px solid #B2E2ED" />,
      list: [
        {
          icon: <PhoneIcon />,
          title: 'Inbound/Outbound Calls',
        },
        {
          icon: <CalendarIcon />,
          title: 'Appointment Setter',
        },
        {
          icon: <AvailabilityIcon />,
          title: '24/7 Availability',
        },
        {
          icon: <SmallPlusIcon />,
          title: '10 More Attributes',
        },
      ],
    },
  },
  {
    id: '2',
    data: {
      title: 'AI Chat Bot Agent',
      className: 'ai-02',
      // topPoint: true,
      leftPoints: true,
      rightPoint: true,
      icon: <AiChatBot />,
      tag: <CustomTag text="Custom" bgColor="#E6F6F9" color="#03586D" border="1px solid #B2E2ED" />,
      list: [
        {
          icon: <WorldIntegration />,
          title: 'Website Integration',
        },
        {
          icon: <WorldMultiLanguage />,
          title: 'Multi-language Support',
        },
        {
          icon: <LeadQuality />,
          title: 'Lead Qualification',
        },
      ],
    },
  },
  {
    id: '3',
    data: {
      title: 'Automated',
      className: 'ai-03',
      leftPoints: true,
      rightPoint: true,
      icon: <AutomatedWorkflow />,
      tag: <CustomTag text="Standart" bgColor="#EFF0F1" color="#363B41" border="1px solid #CED1D5" />,
      list: [
        {
          icon: <TaskAutomation />,
          title: 'Task Automation',
        },
        {
          icon: <DeadlineIcon />,
          title: 'Deadline Management',
        },
        {
          icon: <PuzzleIcon />,
          title: 'Integration Capabilities',
        },
      ],
    },
  },
  {
    id: '4',
    data: {
      title: 'Automated CRM',
      leftPoints: true,
      rightPoint: true,
      className: 'ai-04',
      icon: <AutomatedCrm />,
      tag: <CustomTag text="Standart" bgColor="#EFF0F1" color="#363B41" border="1px solid #CED1D5" />,
      list: [
        {
          icon: <ContactIcon />,
          title: 'Contact Management',
        },
        {
          icon: <PerfomanceIcon />,
          title: 'Performance Analytics',
        },
        {
          icon: <MobileIcon />,
          title: 'Mobile Access',
        },
      ],
    },
  },
  {
    id: '5',
    data: {
      title: 'Invoices & Billing',
      bottomPoints: true,
      leftPoints: true,
      className: 'ai-05',
      icon: <InvoiceBilling />,
      tag: <CustomTag text="Standart" bgColor="#EFF0F1" color="#363B41" border="1px solid #CED1D5" />,
      list: [
        {
          icon: <ListIcon />,
          title: 'Automated Billing',
        },
        {
          icon: <PaymentIcon />,
          title: 'Payment Tracking',
        },
        {
          icon: <SmallDollarIcon />,
          title: 'Currency Options',
        },
      ],
    },
  },
];

export default function AiMainBlockCustom() {
  return (
    <>
      <div className="ai-container">
        {initialNodes?.map((data, index) => {
          return <AiBlock key={index} aiData={data.data} />;
        })}
        <div className="desktop-block">
          <Box className="block1">
            <Box sx={{ position: 'absolute', left: '-19.2px' }}>
              <SinglePoint />
            </Box>
            <Box sx={{ position: 'absolute', left: '', top: '2.2%' }}>
              <ConnectionLineEl1Bottom />
            </Box>
          </Box>
          <Box className="block2">
            <Box>
              <ConnectionLineCentered />
            </Box>
            <Box sx={{ position: 'absolute', top: '86px', left: '610px' }}>
              <TopMultiplePoints />
            </Box>
          </Box>
          <Box className="block3">
            <Box>
              <ConnectionLineEl2Top />
            </Box>
            <Box sx={{ position: 'absolute', top: '55px', left: '-19.5px' }}>
              <SinglePoint />
            </Box>
          </Box>
          <Box className="block4">
            <ConnectionLineEl2Right />
          </Box>
          <Box className="block5">
            <ConnectionLineEl2Right />
          </Box>
          <Box className="block6">
            <ConnectionLineEl5Bottom />
          </Box>
          <Box className="block7">
            <Box>
              <ConnectionLineEl5Left />
            </Box>
          </Box>
        </div>
        <div className="tablet-block">
          <Box className="tablet-block-1">
            <Box sx={{ position: 'absolute', top: '-9px' }}>
              <BottomPoints />
            </Box>
            <Box sx={{ transform: 'rotate(90deg)', position: 'absolute', left: '-7px', top: '15px' }}>
              <ConnectionLineEl2Right />
            </Box>
            <Box sx={{ position: 'absolute', bottom: '39px' }}>
              <TopMultiplePoints />
            </Box>
          </Box>
          <Box className="tablet-block-2">
            <Box sx={{ position: 'absolute', left: '-15px', top: '10px' }}>
              <SinglePoint />
            </Box>
            <Box sx={{ position: 'absolute', top: '10px', left: '4px' }}>
              <TabletConnectionLineEl02 />
            </Box>
            <Box sx={{ position: 'absolute', top: '60px', left: '97px' }}>
              <TopMultiplePoints />
            </Box>
          </Box>
          <Box className="tablet-block-3">
            <Box sx={{ position: 'absolute', left: '-19px', top: '59px' }}>
              <TopMultiplePoints />
            </Box>
            <Box sx={{ position: 'absolute', left: '0px', top: '12px' }}>
              <TabletConnectionLineEl03 />
            </Box>
            <Box sx={{ position: 'absolute', top: '10px', left: '120px' }}>
              <BottomPoints />
            </Box>
          </Box>
          <Box className="tablet-block-4">
            <Box sx={{ position: 'absolute', left: '-20px', top: '-2px' }}>
              <SinglePoint />
            </Box>
            <Box>
              <TabletConnectionLineEl04 />
            </Box>
          </Box>
          <Box className="tablet-block-5">
            <Box sx={{ position: 'absolute', top: '17px', left: '-19px' }}>
              <BottomPoints />
            </Box>
            <Box sx={{ position: 'absolute', top: '20px' }}>
              <TabletConnectionLineEl01 />
            </Box>
            <Box sx={{ position: 'absolute', left: '293px', top: '65px' }}>
              <TopMultiplePoints />
            </Box>
          </Box>
          <Box className="tablet-block-6">
            <Box sx={{ position: 'absolute', top: '-16px', left: '31px' }}>
              <SinglePoint />
            </Box>
            <Box sx={{ position: 'absolute', top: '-16px' }}>
              <TabletConnectionLineEl05 />
            </Box>
            <Box sx={{ position: 'absolute', top: '80px', left: '31px' }}>
              <SinglePoint />
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
}
