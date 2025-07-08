import { Box } from '@mui/material';

import EmailMessageIcon from '@assets/svg/message-small-icon.svg?react';
import PhoneSmallIcon from '@assets/svg/phone-small-icon.svg?react';
import LiveChartIcon from '@assets/svg/live-chat-icon.svg?react';

import './style.scss';

const contactUs = [
  {
    title: 'Email',
    icon: <EmailMessageIcon />,
    contact: 'support@elevanto.ai',
    description: 'Send us an email anytime',
  },
  {
    title: 'Phone',
    icon: <PhoneSmallIcon />,
    contact: '+1 (555) 123-4567',
    description: 'Mon-Fri from 8am to 6pm EST',
  },
  {
    title: 'Live Chat',
    icon: <LiveChartIcon />,
    contact: 'Available during business hours',
    description: 'Get instant help from our team',
  },
];

export default function ReachUsComponent() {
  return (
    <>
      {contactUs.map((contact, index) => {
        return (
          <Box key={index} className="reach-us-component">
            <Box className="reach-us-component__icon">{contact.icon}</Box>
            <Box className="reach-us-component__info">
              <Box className="reach-us-component__title">{contact.title}</Box>
              <Box className="reach-us-component__contact">{contact.contact}</Box>
              <Box className="reach-us-component__description">
                <p>{contact.description}</p>
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
}
