/* eslint-disable @typescript-eslint/no-unused-vars */

// import AiVoiceIcon from '@assets/svg/ai-voice.svg?react';
// import AiChatBot from '@assets/svg/ai-chat.svg?react';
// import AutomatedWorkflow from '@assets/svg/automated-workflow.svg?react';
// import AutomatedCrm from '@assets/svg/automated-srm.svg?react';
// import InvoiceBilling from '@assets/svg/billing-ai.svg?react';
// import PhoneIcon from '@assets/svg/phone-inbound.svg?react';
import CustomTag from '@shared/components/CustomTag';

// import CalendarIcon from '@assets/svg/calendar.svg?react';
// import AvailabilityIcon from '@assets/svg/availability.svg?react';
// import SmallPlusIcon from '@assets/svg/small-plus-icon.svg?react';

// import WorldIntegration from '@assets/svg/world-integration.svg?react';
// import WorldMultiLanguage from '@assets/svg/world-multilanguage.svg?react';
// import LeadQuality from '@assets/svg/lead-quality.svg?react';

// import TaskAutomation from '@assets/svg/task-automation.svg?react';
// import DeadlineIcon from '@assets/svg/deadline-icon.svg?react';
// import PuzzleIcon from '@assets/svg/puzzle-icon.svg?react';

// import ContactIcon from '@assets/svg/contact-icon.svg?react';
// import PerfomanceIcon from '@assets/svg/perfomance-icon.svg?react';
// import MobileIcon from '@assets/svg/mobile-icon.svg?react';

// import ListIcon from '@assets/svg/list-icon.svg?react';
// import PaymentIcon from '@assets/svg/payment-icon.svg?react';
// import SmallDollarIcon from '@assets/svg/small-dollar-icon.svg?react';

import { Box } from '@mui/material';
import AiBlock from '../AiBlock';

// import ConnectionLineEl1Bottom from '@assets/svg/ui-agents/connection-line-bottom-01.svg?react';
import BottomLeft from '@assets/svg/ui-agents-new/bottom-lefts.svg?react';
import BottomLineEl1 from '@assets/svg/ui-agents-new/bottom-line.svg?react';
import SinglePointEl from '@assets/svg/ui-agents-new/single-point.svg?react';
import TopPoints from '@assets/svg/ui-agents-new/top-points.svg?react';
import RightPoints from '@assets/svg/ui-agents-new/right-points.svg?react';

import ConnectedLineEl2 from '@assets/svg/ui-agents-new/connection-line-el-02.svg?react';
import ConnectionRightLineEl1 from '@assets/svg/ui-agents-new/right-line-el-01.svg?react';
import ConnectionLineEl3 from '@assets/svg/ui-agents-new/connection-line-el-03.svg?react';
import ConnectionLineEl5 from '@assets/svg/ui-agents-new/connection-line-el-05.svg?react';
import ConnectionLineEl5Bottom from '@assets/svg/ui-agents-new/connection-line-bottom-el-05.svg?react';

import PartnershipIcon from '@assets/svg/ui-agents-new/partnership-icon.svg?react';
import PartnershipSmallIcon from '@assets/svg/ui-agents-new/partnership-new-icon.svg?react';
import PlusDefaultIcon from '@assets/svg/ui-agents-new/default-plus-icon.svg?react';
import PartnershipType from '@assets/svg/ui-agents-new/partnership-type.svg?react';
import Location from '@assets/svg/ui-agents-new/location.svg?react';
import CompanyIcon from '@assets/svg/ui-agents-new/company-icon.svg?react';
import CompanyNameIcon from '@assets/svg/ui-agents-new/company-name-icon.svg?react';
import DealIcon from '@assets/svg/ui-agents-new/deal-icon.svg?react';
import PersonIcon from '@assets/svg/ui-agents-new/person-icon.svg?react';
import EmailIcon from '@assets/svg/ui-agents-new/email-icon.svg?react';
import InvoicesIcon from '@assets/svg/ui-agents-new/invoices-icon.svg?react';
import PhoneIconSmall from '@assets/svg/ui-agents-new/phone-icon.svg?react';
import PointIcon from '@assets/svg/ui-agents-new/point-contact-icon.svg?react';
// import LeftMultiplePoints from '@assets/svg/ui-agents-new/left-multiple-points.svg?react';

import SmallDesktopConnectionLineEl1 from '@assets/svg/ui-agents-new/small-desktop/connection-line-el-01.svg?react';
// import SmallDesktopConnectionLineEl2 from '@assets/svg/ui-agents-new/small-desktop/connection-line-el-02.svg?react';
import SmallDesktopConnectionLineRightEl1 from '@assets/svg/ui-agents-new/small-desktop/connection-line-right-el-01.svg?react';
import SmallDesktopConnectionLineBotttomEl5 from '@assets/svg/ui-agents-new/small-desktop/connection-line-bottom-el-05.svg?react';
// import LeftConnectors from '@assets/svg/ui-agents-new/left-connectors.svg?react';

import { AiBlockItem, ComponentSliderItem } from '@interfaces/shared-interfaces';

import SalesSlide from './components/sales-component';
import ProductLedGrowthSlide from './components/product-led-growth-component';
// import ProductLedSales from './components/product-led-sales';

import SliderComponent from '@shared/components/SliderComponent';

import SalesBtnIcon from '@assets/svg/ui-agents-new/sales-btn-icon.svg?react';
import ProductBtnIcon from '@assets/svg/ui-agents-new/product-led-growth-btn-icon.svg?react';
// import ProductLedSalesBtn from '@assets/svg/ui-agents-new/product-led-sales-btn-icon.svg?react';

import './style.scss';

type NodeItem = {
  id: string;
  data: AiBlockItem;
};

const slides: ComponentSliderItem[] = [
  { id: 0, className: 'sales', name: 'Sales', nameIcon: <SalesBtnIcon />, content: <SalesSlide /> },
  {
    id: 1,
    className: 'product-led-growth',
    name: 'Product-led growth',
    nameIcon: <ProductBtnIcon />,
    content: <ProductLedGrowthSlide />,
  },
];

const initialNodes: NodeItem[] = [
  {
    id: '1',
    data: {
      title: 'Partnership',
      className: 'ai-01',
      icon: <PartnershipIcon />,
      tag: <CustomTag text="Custom" bgColor="#E5EFFF" color="#173D81" border="1px solid #d6e5ff" />,
      list: [
        {
          icon: <PartnershipSmallIcon />,
          title: 'Partnership name',
        },
        {
          icon: <PartnershipType />,
          title: 'Partnership type',
        },
        {
          icon: <Location />,
          title: 'Location',
        },
        {
          icon: <PlusDefaultIcon />,
          title: '10 More Attributes',
        },
      ],
    },
  },
  {
    id: '2',
    data: {
      title: 'Company',
      className: 'ai-02',
      leftPoints: true,
      rightPoint: true,
      icon: <CompanyIcon />,
      tag: <CustomTag text="Standart" bgColor="#F3F4F6" color="#6F7A88" border="1px solid #E5E7EC" />,
      list: [
        {
          icon: <CompanyNameIcon />,
          title: 'Company Name',
        },
        {
          icon: <PartnershipType />,
          title: 'Industry',
        },
        {
          icon: <PlusDefaultIcon />,
          title: '10 More Attributes',
        },
      ],
    },
  },
  {
    id: '3',
    data: {
      title: 'Deal',
      className: 'ai-03',
      leftPoints: true,
      rightPoint: true,
      icon: <DealIcon />,
      tag: <CustomTag text="Standart" bgColor="#F3F4F6" color="#6F7A88" border="1px solid #E5E7EC" />,
      list: [
        {
          icon: <PartnershipSmallIcon />,
          title: 'Deal ID',
        },
        {
          icon: <PartnershipType />,
          title: 'Deal type',
        },
        {
          icon: <PlusDefaultIcon />,
          title: '8 More Attributes',
        },
      ],
    },
  },
  {
    id: '4',
    data: {
      title: 'Person',
      leftPoints: true,
      rightPoint: true,
      className: 'ai-04',
      icon: <PersonIcon />,
      tag: <CustomTag text="Standart" bgColor="#F3F4F6" color="#6F7A88" border="1px solid #E5E7EC" />,
      list: [
        {
          icon: <PartnershipSmallIcon />,
          title: 'Person Name',
        },
        {
          icon: <EmailIcon />,
          title: 'Email address',
        },
        {
          icon: <PlusDefaultIcon />,
          title: '8 More Attributes',
        },
      ],
    },
  },
  {
    id: '5',
    data: {
      title: 'Invoices',
      bottomPoints: true,
      leftPoints: true,
      className: 'ai-05',
      icon: <InvoicesIcon />,
      tag: <CustomTag text="Custom" bgColor="#E5EFFF" color="#173D81" border="1px solid #d6e5ff" />,
      list: [
        {
          icon: <Location />,
          title: 'Billing address',
        },
        {
          icon: <PhoneIconSmall />,
          title: 'Phone number',
        },
        {
          icon: <PointIcon />,
          title: 'Point of contact',
        },
        {
          icon: <PlusDefaultIcon />,
          title: '12 More Attributes',
        },
      ],
    },
  },
];

export default function AiMainBlockCustom() {
  return (
    <div className="ai-container-section">
      <div className="ai-container">
        {initialNodes?.map((data, index) => {
          return <AiBlock key={index} aiData={data.data} />;
        })}
        <div className="desktop-block">
          <Box className="block1">
            <Box sx={{ position: 'relative', height: '119px', left: '9%', top: '3%', width: 'calc(100% - 1px)' }}>
              <BottomLineEl1 />
            </Box>
            <Box sx={{ position: 'relative', width: '40px', left: '-10px', top: '-100%' }}>
              <BottomLeft />
            </Box>
          </Box>
          <Box className="block2" sx={{ position: 'absolute' }}>
            <Box
              sx={{
                width: '40px',
                position: 'relative',
                top: '112%',
                left: '1px',
                transform: 'translateX(-20px)',
                zIndex: '3',
              }}
            >
              <TopPoints />
            </Box>
            <Box sx={{ position: 'relative', height: '100%' }}>
              <ConnectedLineEl2 />
            </Box>
            <Box
              sx={{
                width: '40px',
                position: 'relative',
                top: '-27%',
                left: '100%',
                transform: 'translateX(-20px)',
                zIndex: '3',
              }}
            >
              <TopPoints />
            </Box>
          </Box>
          <Box className="block3" sx={{ position: 'absolute' }}>
            <Box sx={{ position: 'relative', left: '-8px', top: '-9.5px', zIndex: 3 }}>
              <RightPoints />
            </Box>
            <Box className="connection-line" sx={{ width: '189px', position: 'relative', top: '-48%', left: '-5px' }}>
              <ConnectionRightLineEl1 />
            </Box>
          </Box>
          <Box className="block4" sx={{ position: 'absolute' }}>
            <Box sx={{ width: '70px', position: 'relative', left: '65%', top: '15%' }}>
              <ConnectionLineEl3 />
            </Box>
          </Box>
          <Box className="block5" sx={{ position: 'absolute' }}>
            <Box sx={{ position: 'relative', left: '0', top: '39%' }}>
              <ConnectionLineEl5 />
            </Box>
          </Box>
          <Box className="block6" sx={{ position: 'absolute', height: '100%' }}>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ width: '40px', top: '5px', position: 'relative', left: 'calc(100% - 20px)' }}>
                <SinglePointEl />
              </Box>
            </Box>
            <Box sx={{ height: '100%' }}>
              <ConnectionLineEl5Bottom />
            </Box>
          </Box>
          <Box className="block7" sx={{ position: 'absolute' }}>
            <Box sx={{ position: 'relative', left: '-10px' }}>
              <ConnectionLineEl5 />
            </Box>
          </Box>
        </div>
        <div className="small-desktop">
          <Box className="small-block-1">
            <Box sx={{ position: 'absolute', left: '0px', top: '0px', zIndex: 3 }}>
              <BottomLeft />
            </Box>
            <Box sx={{ position: 'absolute', left: '19px', width: '103px', top: '0px' }}>
              <SmallDesktopConnectionLineEl1 />
            </Box>
            <Box sx={{ width: '40px', position: 'absolute', top: '45px', left: '100px' }}>
              <TopPoints />
            </Box>
          </Box>
          <Box className="small-block-2" sx={{ position: 'absolute' }}>
            <Box sx={{ position: 'absolute', top: '59px', left: '-8px' }}>
              <SinglePointEl />
            </Box>
            <Box
              sx={{ position: 'absolute', maxWidth: '496px', width: '100%', height: '50px', top: '19px', left: '10px' }}
            >
              <ConnectedLineEl2 />
            </Box>
            <Box sx={{ position: 'absolute', left: '97.5%', top: '59px' }}>
              <TopPoints />
            </Box>
          </Box>
          <Box className="small-block-3" sx={{ position: 'absolute' }}>
            <Box sx={{ position: 'relative', width: '40px' }}>
              <RightPoints />
            </Box>
            <Box
              className="connection-line"
              sx={{ width: '145px', height: '68px', position: 'relative', top: '-30%', left: '5px' }}
            >
              <SmallDesktopConnectionLineRightEl1 />
            </Box>
          </Box>
          <Box className="small-block-4" sx={{ position: 'absolute' }}>
            <Box sx={{ position: 'relative', top: '16.7%' }}>
              <ConnectionLineEl3 />
            </Box>
          </Box>
          <Box className="small-block-5" sx={{ position: 'absolute' }}>
            <Box sx={{ position: 'relative' }}>
              <ConnectionLineEl3 />
            </Box>
          </Box>
          <Box className="small-block-6" sx={{ position: 'absolute' }}>
            <Box sx={{ position: 'relative', width: '40px', left: '82px', top: '13px', zIndex: 3 }}>
              <BottomLeft />
            </Box>
            <Box sx={{ width: '103px', position: 'relative', top: '-5px', height: '55px' }}>
              <SmallDesktopConnectionLineBotttomEl5 />
            </Box>
            <Box sx={{ width: '40px', position: 'relative', top: '-18px', left: '-18px' }}>
              <SinglePointEl />
            </Box>
          </Box>
          <Box className="small-block-7" sx={{ position: 'absolute' }}>
            <Box sx={{ position: 'relative', left: '0' }}>
              <ConnectionLineEl5 />
            </Box>
          </Box>
        </div>
      </div>
      <div className="mobile-block">
        <SliderComponent slides={slides} />
      </div>
    </div>
  );
}
