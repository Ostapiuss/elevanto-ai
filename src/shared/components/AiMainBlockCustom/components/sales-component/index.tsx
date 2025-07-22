import PartnershipIcon from '@assets/svg/ui-agents-new/partnership-icon.svg?react';
import PartnershipSmallIcon from '@assets/svg/ui-agents-new/partnership-new-icon.svg?react';
import PlusDefaultIcon from '@assets/svg/ui-agents-new/default-plus-icon.svg?react';
import PartnershipType from '@assets/svg/ui-agents-new/partnership-type.svg?react';
import Location from '@assets/svg/ui-agents-new/location.svg?react';
import CompanyIcon from '@assets/svg/ui-agents-new/company-icon.svg?react';
import CompanyNameIcon from '@assets/svg/ui-agents-new/company-name-icon.svg?react';
import DealIcon from '@assets/svg/ui-agents-new/deal-icon.svg?react';
import PersonIcon from '@assets/svg/ui-agents-new/person-icon.svg?react';
import DomainIcon from '@assets/svg/ui-agents-new/domain-small-icon.svg?react';
import ValueSmallIcon from '@assets/svg/ui-agents-new/value-small-icon.svg?react';
import EmailIcon from '@assets/svg/ui-agents-new/email-icon.svg?react';
import InvoicesIcon from '@assets/svg/ui-agents-new/invoices-icon.svg?react';
import PhoneIconSmall from '@assets/svg/ui-agents-new/phone-icon.svg?react';
import PointIcon from '@assets/svg/ui-agents-new/point-contact-icon.svg?react';
import { AiBlockItem } from '@interfaces/shared-interfaces';
import CustomTag from '@shared/components/CustomTag';
import AiBlock from '@shared/components/AiBlock';
import { Box } from '@mui/material';

// import BottomLineEl1 from '@assets/svg/ui-agents-new/bottom-line.svg?react';
import BottomMultiple from '@assets/svg/ui-agents-new/mobile/bottom-multiple.svg?react';
import TopPoints from '@assets/svg/ui-agents-new/top-points.svg?react';
import LineEl01 from '@assets/svg/ui-agents-new/mobile/sales/el-01-line.svg?react';

import WavyLineEl1 from '@assets/svg/ui-agents-new/mobile/sales/el-01-wavy-line.svg?react';

import El5Line from '@assets/svg/ui-agents-new/mobile/sales/el-05-line.svg?react';
import El3Line from '@assets/svg/ui-agents-new/mobile/sales/el-03-line.svg?react';
import SinglePointEl from '@assets/svg/ui-agents-new/single-point.svg?react';
import LineEl3Bottom from '@assets/svg/ui-agents-new/mobile/sales/el-03-bottom-line.svg?react';
import LineEl4Bottom from '@assets/svg/ui-agents-new/mobile/sales/el-04-bottom-line.svg?react';

import './style.scss';

type NodeItem = {
  id: string;
  data: AiBlockItem;
};

const initialNodes: NodeItem[] = [
  {
    id: '1',
    data: {
      title: 'Partnership',
      rightPoints: true,
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
  {
    id: '2',
    data: {
      title: 'Company',
      className: 'ai-02',
      leftPoints: true,
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
          icon: <DomainIcon />,
          title: 'Domain',
        },
        {
          icon: <PlusDefaultIcon />,
          title: '10 More Attributes',
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
          icon: <Location />,
          title: 'Location',
        },
        {
          icon: <PlusDefaultIcon />,
          title: '8 More Attributes',
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
          icon: <ValueSmallIcon />,
          title: 'Potential Value',
        },
        {
          icon: <PlusDefaultIcon />,
          title: '8 More Attributes',
        },
      ],
    },
  },
];

export default function SalesSlide() {
  return (
    <div className="keen-slider sales-slider">
      {initialNodes?.map((data, index) => {
        return <AiBlock key={index} aiData={data.data} />;
      })}
      <div className="mobile-sales">
        <Box className="mobile-block-1">
          <Box sx={{ position: 'relative', width: '40px', top: '13px', left: '-15px' }}>
            <BottomMultiple />
          </Box>
          <Box sx={{ position: 'relative', width: '40px' }}>
            <LineEl01 />
          </Box>
          <Box sx={{ position: 'relative', width: '40px', top: '-16px', left: '-19px' }}>
            <TopPoints />
          </Box>
        </Box>
        <Box className="mobile-block-2">
          <Box sx={{ position: 'relative', width: '40px' }}>
            <BottomMultiple />
          </Box>
          <Box sx={{ position: 'relative', height: '100%', top: '-13px', left: '14.3px' }}>
            <WavyLineEl1 />
          </Box>
          <Box sx={{ position: 'relative', width: '40px', left: '96.5%', top: '-28px' }}>
            <TopPoints />
          </Box>
        </Box>
        <Box className="mobile-block-3">
          <Box sx={{ position: 'relative', width: '40px', left: '-18px', top: '5px' }}>
            <SinglePointEl />
          </Box>
          <Box sx={{ position: 'relative', width: '40px' }}>
            <El5Line />
          </Box>
          <Box sx={{ position: 'relative', width: '40px', top: '-16px', left: '-18px' }}>
            <SinglePointEl />
          </Box>
        </Box>
        <Box className="mobile-block-4">
          <Box sx={{ position: 'relative', width: '40px', left: '-20px', top: '17px' }}>
            <SinglePointEl />
          </Box>
          <Box sx={{ position: 'relative', top: '-6.3%' }}>
            <El3Line />
          </Box>
          <Box sx={{ position: 'relative' }}></Box>
        </Box>
        <Box className="mobile-block-5">
          <Box sx={{ position: 'relative', top: '12px', left: '65.5px', width: '40px', zIndex: 3 }}>
            <BottomMultiple />
          </Box>
          <Box sx={{ position: 'relative', width: '83px', height: '43px', top: '-2px' }}>
            <LineEl3Bottom />
          </Box>
          <Box sx={{ position: 'relative', width: '40px', top: '-18px', left: '-19px' }}>
            <TopPoints />
          </Box>
        </Box>
        <Box className="mobile-block-6">
          <Box sx={{ position: 'relative', width: '40px', top: '8px', left: '-18px', zIndex: 3 }}>
            <SinglePointEl />
          </Box>
          <Box sx={{ position: 'relative', width: '83px', height: '43px' }}>
            <LineEl4Bottom />
          </Box>
          <Box sx={{ position: 'relative', top: '-15px', left: '62px' }}>
            <TopPoints />
          </Box>
        </Box>
      </div>
    </div>
  );
}
