import { Box, Button } from '@mui/material';

import ConfetiIcon from '@assets/svg/confeti-icon.svg?react';

import './style.scss';

export default function BookedNotificationModal() {
  return (
    <Box className="booked-notification-modal">
      <Box className="booked-notification-modal__icon">
        <ConfetiIcon />
      </Box>
      <h2 className="booked-notification-modal__title">Thanks! Your demo request has been received.</h2>
      <p className="booked-notification-modal__description">We’ll contact you shortly to schedule a time.</p>
      <Button
        sx={{ marginTop: '32px', marginLeft: 'auto' }}
        className="booked-notification-modal__button"
        variant="contained"
      >
        Explore features
      </Button>
    </Box>
  );
}
