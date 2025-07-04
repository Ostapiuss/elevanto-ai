import { Box, Button, IconButton } from '@mui/material';

import PhoneCallIcon from '@assets/svg/phone-icon.svg?react';

import './style.scss';

export default function IncomingCall() {
  return (
    <Box className="incoming-call">
      <Box className="incoming-call__call">
        <Box className="call-header">
          <Box className="title">
            <PhoneCallIcon />
            <h2 className="text">Incoming Call</h2>
          </Box>
        </Box>
        <Box className="phone"></Box>
        <Box className="booking">
          <IconButton></IconButton>
          <Button>Book Appointment</Button>
        </Box>
      </Box>
      <Box className="incoming-call__transcript"></Box>
      <Box className="incoming-call__animated-icon"></Box>
    </Box>
  );
}
