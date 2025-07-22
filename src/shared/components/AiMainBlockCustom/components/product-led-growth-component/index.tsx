import PartnershipSmallIcon from '@assets/svg/ui-agents-new/partnership-new-icon.svg?react';
import PlusDefaultIcon from '@assets/svg/ui-agents-new/default-plus-icon.svg?react';
import PartnershipType from '@assets/svg/ui-agents-new/partnership-type.svg?react';
import Location from '@assets/svg/ui-agents-new/location.svg?react';
import CompanyIcon from '@assets/svg/ui-agents-new/company-icon.svg?react';
import CompanyNameIcon from '@assets/svg/ui-agents-new/company-name-icon.svg?react';
import PersonIcon from '@assets/svg/ui-agents-new/person-icon.svg?react';
import DomainIcon from '@assets/svg/ui-agents-new/domain-small-icon.svg?react';
import EmailIcon from '@assets/svg/ui-agents-new/email-icon.svg?react';
import { AiBlockItem } from '@interfaces/shared-interfaces';
import CustomTag from '@shared/components/CustomTag';
import AiBlock from '@shared/components/AiBlock';
import WorkspaceSmallIcon from '@assets/svg/ui-agents-new/workspace-small-icon.svg?react';
import BankSmallIcon from '@assets/svg/ui-agents-new/bank-small-icon.svg?react';
import SubscriptionSmallIcon from '@assets/svg/ui-agents-new/subscription-state-icon.svg?react';
import DocSmallIcon from '@assets/svg/ui-agents-new/document-small-icon.svg?react';
import UserSmallIcon from '@assets/svg/ui-agents-new/user-small-icon.svg?react';
import UserTabIcon from '@assets/svg/ui-agents-new/user-tab-icon.svg?react';
import WorkspaceUserIcon from '@assets/svg/ui-agents-new/worspace-small-icon.svg?react';
import ReanewIcon from '@assets/svg/ui-agents-new/reanew-table-icon.svg?react';

import El1Line from '@assets/svg/ui-agents-new/mobile/product-led/el-01-line.svg?react';
import TopPoints from '@assets/svg/ui-agents-new/top-points.svg?react';
import SinglePointEl from '@assets/svg/ui-agents-new/single-point.svg?react';
import El2Line from '@assets/svg/ui-agents-new/mobile/product-led/el-02-line.svg?react';
import El3Line from '@assets/svg/ui-agents-new/mobile/product-led/el-03-line.svg?react';
import El1LineBottom from '@assets/svg/ui-agents-new/mobile/product-led/el-01-line-buttom.svg?react';
import { Box } from '@mui/material';

import './style.scss';

type NodeItem = {
  id: string;
  data: AiBlockItem;
};

const initialNodes: NodeItem[] = [
  {
    id: '4',
    data: {
      title: 'Person',
      rightPoints: true,
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
    id: '5',
    data: {
      title: 'Workspace',
      leftPoint: true,
      bottomPoints: true,
      className: 'ai-05',
      icon: <WorkspaceSmallIcon />,
      tag: <CustomTag text="Standart" bgColor="#F3F4F6" color="#6F7A88" border="1px solid #E5E7EC" />,
      list: [
        {
          icon: <BankSmallIcon />,
          title: 'Billing email address',
        },
        {
          icon: <SubscriptionSmallIcon />,
          title: 'Subscription state',
        },
        {
          icon: <DocSmallIcon />,
          title: 'Seat count',
        },
        {
          icon: <PlusDefaultIcon />,
          title: '12 More Attributes',
        },
      ],
    },
  },
  {
    id: '1',
    data: {
      title: 'User',
      className: 'ai-01',
      icon: <UserSmallIcon />,
      tag: <CustomTag text="Custom" bgColor="#E5EFFF" color="#173D81" border="1px solid #d6e5ff" />,
      list: [
        {
          icon: <UserTabIcon />,
          title: 'User ID',
        },
        {
          icon: <WorkspaceUserIcon />,
          title: 'Workspace',
        },
        {
          icon: <ReanewIcon />,
          title: 'Renewal date',
        },
        {
          icon: <PlusDefaultIcon />,
          title: '15 More Attributes',
        },
      ],
    },
  },
];

export default function ProductLedGrowthSlide() {
  return (
    <div className="keen-slider product-led-growth">
      {initialNodes?.map((data, index) => {
        return <AiBlock key={index} aiData={data.data} />;
      })}
      <div className="mobile-product-led-growth">
        <Box className="mobile-block-1">
          <Box sx={{ height: '38px', width: '130px' }}>
            <El1Line />
          </Box>
          <Box sx={{ position: 'relative', width: '130px', left: '0%', top: '-14px' }}>
            <Box sx={{ position: 'absolute', left: '100%', transform: 'translateX(-53%)' }}>
              <TopPoints />
            </Box>
          </Box>
        </Box>
        <Box className="mobile-block-2">
          <Box sx={{ position: 'relative', top: '5px', left: '-18px' }}>
            <SinglePointEl />
          </Box>
          <Box sx={{ position: 'relative' }}>
            <El1LineBottom />
          </Box>
          <Box sx={{ position: 'relative', top: '-17px', left: '-18px' }}>
            <SinglePointEl />
          </Box>
        </Box>
        <Box className="mobile-block-3">
          <Box sx={{ position: 'relative', top: '5px', left: '-18px' }}>
            <SinglePointEl />
          </Box>
          <Box sx={{ position: 'relative' }}>
            <El2Line />
          </Box>
          <Box sx={{ position: 'relative', top: '-17px', left: '-19px' }}>
            <TopPoints />
          </Box>
        </Box>
        <Box className="mobile-block-4">
          <Box
            sx={{
              width: '130px',
              height: '43px',
              position: 'relative',
              left: '26px',
              top: '16px',
              zIndex: 0,
            }}
          >
            <El3Line />
          </Box>
          <Box sx={{ position: 'relative', left: '8px', top: '3px' }}>
            <TopPoints />
          </Box>
        </Box>
      </div>
    </div>
  );
}
