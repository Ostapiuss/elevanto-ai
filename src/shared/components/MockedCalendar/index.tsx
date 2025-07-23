import { ReactNode } from 'react';
import { Box } from '@mui/material';

import './style.scss';

type Props = {
  icon: ReactNode;
  title: string;
};

export default function MockedCalendar({ icon, title }: Props) {
  const daysOfWeek = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  const daysInMonth = Array.from({ length: 14 }, (_, i) => i + 1);

  return (
    <Box className="mocked-calendar">
      <Box className="mocked-calendar__title-container">
        <Box className="icon">{icon}</Box>
        <Box className="title">{title}</Box>
      </Box>
      <Box className="calendar">
        {daysOfWeek.map((day) => (
          <p key={day} className="calendar-header">
            {day}
          </p>
        ))}

        {daysInMonth.map((day) => (
          <p key={day} className="calendar-day">
            {day}
          </p>
        ))}
      </Box>
    </Box>
  );
}
