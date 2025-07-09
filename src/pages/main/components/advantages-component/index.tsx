import { Box, Grid } from '@mui/material';
import CheckIcon from '@assets/svg/check-icon.svg?react';

import './style.scss';

const advantages = [
  {
    text: 'Custom AI Voice Agent (inbound & outbound)',
  },
  {
    text: 'Appointment booking system with reminders',
  },
  {
    text: 'Email & SMS campaign automation',
  },
  {
    text: 'Team performance dashboards',
  },
  {
    text: 'Custom AI Chatbot (Website, WhatsApp, SMS)',
  },
  {
    text: 'Invoicing and payment automation',
  },
  {
    text: 'Smart follow-ups and lead nurturing',
  },
  {
    text: 'Dedicated onboarding and support',
  },
  {
    text: 'CRM with pipeline, tasks, and contact management',
  },
  {
    text: 'Funnel and landing page builder',
  },
  {
    text: 'Missed-call text back + voicemail fallback',
  },
];

export default function AdvantagesComponent() {
  return (
    <Grid
      container
      className="advantage"
      sx={{
        display: 'grid',
        gap: 2,
        gridTemplateColumns: {
          xs: '1fr',
          sm: '1fr 1fr',
          md: '1fr 1fr 1fr', // 3 columns on medium and up
        },
      }}
    >
      {advantages.map((item, index) => (
        <Box
          key={index}
          className="advantage__block"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Box className="icon">
            <CheckIcon />
          </Box>
          <p className="title">{item.text}</p>
        </Box>
      ))}
    </Grid>
  );
}
