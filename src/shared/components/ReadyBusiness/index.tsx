import { Box, Button, Typography } from '@mui/material';

import CheckPersonalIcon from '@assets/svg/check-personal-icon.svg?react';
import WorldIcon from '@assets/svg/world-icon.svg?react';
import CalculatorIcon from '@assets/svg/calculator.svg?react';

import './style.scss';
import { ReactNode } from 'react';

interface PersonailezedItem {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

const presentationItems: Array<PersonailezedItem> = [
  { title: 'Personalized Demo', subtitle: 'See how it works for your specific business', icon: <CheckPersonalIcon /> },
  { title: 'Quick Setup', subtitle: 'Be up and running in under a day', icon: <WorldIcon /> },
  { title: 'ROI Calculator', subtitle: 'See your potential savings and growth', icon: <CalculatorIcon /> },
];

const PresentationItem = ({ icon, subtitle, title }: PersonailezedItem) => {
  return (
    <Box className="item">
      <Box className="item__icon">{icon}</Box>
      <Box className="item__content">
        <Typography className="item__title" component="span">
          {title}
        </Typography>
        <p className="item__subtitle">{subtitle}</p>
      </Box>
    </Box>
  );
};

export default function ReadyBusiness() {
  return (
    <Box className="ready-business">
      <Box className="content">
        <Typography component="h1" className="title">
          Ready to transform your business with AI?
        </Typography>
        <p className="subtitle">
          Join thousands of businesses already using Elevanto AI to automate their operations and scale faster.
        </p>
        <Box className="actions">
          <Button variant="contained" className="start-btn">
            Start for free
          </Button>
          <Button variant="contained" className="book-btn">
            Book a demo
          </Button>
        </Box>
      </Box>
      <Box className="presentation">
        {presentationItems.map((data, index) => (
          <PresentationItem key={index} {...data} />
        ))}
      </Box>
    </Box>
  );
}
