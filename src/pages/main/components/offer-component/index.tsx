import { OfferListItem } from '@interfaces/main-page-interface';

import SettingIcon from '@assets/svg/setting-icon.svg?react';
import RobotIcon from '@assets/svg/robot-icon.svg?react';
import ConfigurationIcon from '@assets/svg/configuration-icon.svg?react';
import ArrowRightBg from '@assets/svg/right-bg-arrow.svg?react';
import DefaultBg from '@assets/svg/default-bg.svg?react';

import './style.scss';

const mockOfferData: Array<OfferListItem> = [
  {
    icon: <SettingIcon />,
    text: 'All-in-One Platform',
    description:
      'Access CRM, funnels, chat, bookings, and campaigns in one powerful, branded platform built on Go High Level.',
  },
  {
    icon: <RobotIcon />,
    text: 'AI Assistants (Chat & Voice)',
    description: 'Deploy smart chatbots and voice agents that engage leads, answer questions, and book app',
  },
  {
    icon: <ConfigurationIcon />,
    text: 'Custom Automation',
    description: 'Automate your business-critical workflows—from onboarding and task assignment to inv',
  },
];

export default function CompanyOffer() {
  return (
    <div className="offer-component">
      <div className="offer-list">
        {mockOfferData.map((offerItem, index) => {
          return (
            <div key={index} className="offer-item">
              <div className="offer-item__icon">{offerItem.icon}</div>
              <div className="offer-item__text">{offerItem.text}</div>
              <p className="offer-item__description">{offerItem.description}</p>
              <div className="offer-item__more">
                <div className="title">Learn more</div>
                <div className="icon">
                  <ArrowRightBg />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="offer-icon">
        <DefaultBg />
      </div>
    </div>
  );
}
