import { Box } from '@mui/material';

import AiAssistantPros from '@shared/components/AiAssistantPros';

import TimeIconSvg from '@assets/svg/time-icon.svg?react';
import SmileIcon from '@assets/svg/smile-icon.svg?react';
import CalendarIcon from '@assets/svg/calendar-icon.svg?react';
import GlobeSimple from '@assets/svg/globe-simple.svg?react';

import './style.scss';

const whyChooseUsPros = [
  {
    icon: <TimeIconSvg />,
    title: '24/7 Lead Capture',
    subtitle: 'Never miss a lead — assistants respond instantly, day or night.',
  },
  {
    icon: <CalendarIcon />,
    title: 'Human-Like Interaction',
    subtitle: 'Natural conversations build trust and improve engagement.',
  },
  {
    icon: <SmileIcon />,
    title: 'Instant Booking & Support',
    subtitle: 'Book appointments and answer questions automatically.',
  },
  {
    icon: <GlobeSimple />,
    title: 'Multi-Channel Presence',
    subtitle: 'Engage via web, phone, SMS, WhatsApp, and social platforms.',
  },
];

export default function WhyChooseUs() {
  return (
    <Box className="why-choose-use">
      {whyChooseUsPros.map(({ icon, subtitle, title }, index) => {
        return <AiAssistantPros key={index} icon={icon} subtitle={subtitle} title={title} />;
      })}
    </Box>
  );
}
