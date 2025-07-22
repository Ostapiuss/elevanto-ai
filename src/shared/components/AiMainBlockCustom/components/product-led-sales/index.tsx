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
import { AiBlockItem } from '@interfaces/shared-interfaces';
import CustomTag from '@shared/components/CustomTag';
import AiBlock from '@shared/components/AiBlock';

type NodeItem = {
  id: string;
  data: AiBlockItem;
};

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

export default function ProductLedSales() {
  return (
    <div className="keen-slider">
      {initialNodes?.map((data, index) => {
        return <AiBlock key={index} aiData={data.data} />;
      })}
    </div>
  );
}
