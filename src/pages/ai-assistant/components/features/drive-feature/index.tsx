import { Box } from '@mui/material';

import VoiceAssistant from '@shared/components/VoiceAssistant';

import BigPhoneCall from '@assets/svg/big-phone-call.svg?react';

import './style.scss';
import CustomTag from '@shared/components/CustomTag';

export default function DriveResult() {
  return (
    <Box className="drive-result-feature">
      <VoiceAssistant
        icon={<BigPhoneCall />}
        disableAnimation
        messageText="I'd be happy to schedule a consultation for you. What day works best this week?"
        rednderTitleProps={() => {
          return (
            <Box className="assistant-title">
              <h3 className="title">Incoming Call</h3>
              <p className="phone">+1 (555) 123-4567</p>
              <p className="answering">Duration: 2:34</p>
            </Box>
          );
        }}
        rednderFooterProps={() => {
          return (
            <Box className="voice-assistant-tags">
              <CustomTag bgColor="#FCEAEF" color="#9C1F46" text="Qualifying Lead" />
              <CustomTag bgColor="#FFF4EB" color="#B46628" text="Booking Meeting" />
            </Box>
          );
        }}
      />
    </Box>
  );
}
