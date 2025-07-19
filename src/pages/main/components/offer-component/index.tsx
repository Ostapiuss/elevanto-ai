import { OfferListItem } from '@interfaces/main-page-interface';

import SettingIcon from '@assets/svg/setting-icon.svg?react';
import RobotIcon from '@assets/svg/robot-icon.svg?react';
import ConfigurationIcon from '@assets/svg/configuration-icon.svg?react';
import ArrowRightBg from '@assets/svg/right-bg-arrow.svg?react';
// import DefaultBg from '@assets/svg/default-bg.svg?react';

import './style.scss';
import { useState } from 'react';
import { IF } from '@shared/components/IF';
import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';

import EmailAiIcon from '@assets/png/email-ai.avif';
import SalesEngagement from '@assets/png/sales-engagement.avif';
import SalesEfficiency from '@assets/png/sales-efficiency.avif';

const mockOfferData: Array<OfferListItem> = [
  {
    id: 1,
    icon: <SettingIcon />,
    previewIcon: EmailAiIcon,
    text: 'All-in-One Platform',
    description:
      'Access CRM, funnels, chat, bookings, and campaigns in one powerful, branded platform built on Go High Level.',
  },
  {
    id: 2,
    icon: <RobotIcon />,
    previewIcon: SalesEngagement,
    text: 'AI Assistants (Chat & Voice)',
    description: 'Deploy smart chatbots and voice agents that engage leads, answer questions, and book app',
  },
  {
    id: 3,
    icon: <ConfigurationIcon />,
    previewIcon: SalesEfficiency,
    text: 'Custom Automation',
    description: 'Automate your business-critical workflows—from onboarding and task assignment to inv',
  },
];

export default function CompanyOffer() {
  const [selectedOption, setSelectedOption] = useState<OfferListItem>(mockOfferData[0]);

  const handlePreview = (offer: OfferListItem) => {
    setSelectedOption(offer);
  };

  return (
    <Grid container className="offer-component">
      <Grid size={{ xs: 6, md: 5, lg: 6 }} className="offer-list">
        {mockOfferData.map((offerItem, index) => {
          return (
            <Box key={index} className="offer-component-container">
              <Button className="offer-item" onClick={() => handlePreview(offerItem)}>
                {/* <div className="offer-item__icon">{offerItem.icon}</div> */}
                <div className="offer-item__text">{offerItem.text}</div>
                <p className="offer-item__description">{offerItem.description}</p>
                <div className="offer-item__more">
                  <div className="title">Learn more</div>
                  <div className="icon">
                    <ArrowRightBg />
                  </div>
                </div>
              </Button>
              <Grid size={{ xs: 5, md: 7, lg: 6 }} className="offer-item-icon-mobile 22">
                <img src={offerItem.previewIcon} alt="My Icon" />
              </Grid>
            </Box>
          );
        })}
      </Grid>
      <IF condition={Boolean(selectedOption)}>
        <Grid size={{ xs: 10, md: 7, lg: 6 }} className="offer-item-icon 11">
          <img
            src={selectedOption.previewIcon}
            style={{ maxWidth: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
            alt="My Icon"
          />
        </Grid>
      </IF>
    </Grid>
  );
}
