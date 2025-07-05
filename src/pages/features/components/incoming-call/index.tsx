import { Box, Button, IconButton } from '@mui/material';

import PhoneCallIcon from '@assets/svg/phone-icon.svg?react';
import LargePhoneIcon from '@assets/svg/phone-icon-large.svg?react';
import LiveTranscript from '@assets/svg/transcript-icon.svg?react';
import LiveTranscriptIcon from '@assets/svg/live-transcript-icon.svg?react';

import SmallAlert from '@shared/components/SmallAlert';

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
          <SmallAlert text="• Automation: On" status="paid" />
        </Box>
        <Box className="phone">
          <h2>+ 1 555 123 4567</h2>
        </Box>
        <Box className="booking">
          <IconButton className="call-icon" color="secondary">
            <LargePhoneIcon />
          </IconButton>
          <Button className="book-button" color="secondary">
            <h2>Book Appointment</h2>
          </Button>
        </Box>
      </Box>
      <Box className="incoming-call__transcript">
        <Box className="transcript">
          <LiveTranscript />
          <h2 className="title">Live Transcript</h2>
        </Box>
        <Box className="transcript-description">
          <p>“Hi! I’d like to schedule a consultation for tomorrow!”</p>
        </Box>
      </Box>
      <Box className="incoming-call__animated-icon">
        <LiveTranscriptIcon />
      </Box>
    </Box>
  );
}
