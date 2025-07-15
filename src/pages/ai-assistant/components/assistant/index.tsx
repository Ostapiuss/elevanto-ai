import { Box } from '@mui/material';

import VoiceAssistant from '@shared/components/VoiceAssistant';
import PhoneIconMedium from '@assets/svg/phone-medium-icon.svg?react';
import AiIconChat from '@assets/svg/ai-icon-chat.svg?react';

import { MessageRender } from '@shared/components/MessageRender';
import CustomTag from '@shared/components/CustomTag';
import { Message } from '@interfaces/shared-interfaces';

import './style.scss';

const messagesMock: Message[] = [
  {
    message: 'Hi! I`m here to help. What can I assist you with today?',
    role: 'chat',
  },
  {
    message: 'I`m interested in your AI solutions for my business',
    role: 'me',
  },
  {
    message: 'Great! I`d love to learn more about your business needs. What industry are you in?',
    role: 'chat',
  },
];

export default function Assistant() {
  return (
    <Box className="assistant">
      <Box className="assistant-ai-info">
        <VoiceAssistant
          icon={<PhoneIconMedium />}
          rednderTitleProps={() => {
            return (
              <Box className="assistant-title">
                <h3 className="title">Incoming Call</h3>
                <p className="phone">+1 (555) 123-4567</p>
                <p className="answering">AI Assistant Answering...</p>
              </Box>
            );
          }}
          messageText="Hello! Thank you for calling Elevanto. Im your A&aspos;I assistant. How can I help you today?"
        />
        <Box className="assistant-chat">
          <MessageRender
            footer={
              <>
                <CustomTag bgColor="#FFFFFF" color="#464D54" text="Healthcare" border="1px solid #969DA4" />
                <CustomTag bgColor="#FFFFFF" color="#464D54" text="Real Estate" border="1px solid #969DA4" />
                <CustomTag bgColor="#FFFFFF" color="#464D54" text="Professional Services" border="1px solid #969DA4" />
              </>
            }
            header={
              <Box className="assistant-message-header">
                <Box className="icon">
                  <AiIconChat />
                </Box>
                <Box className="title-container">
                  <h3 className="title">Elevanto Assistant</h3>
                  <p className="online">Online</p>
                </Box>
              </Box>
            }
            messages={messagesMock}
          />
        </Box>
      </Box>
    </Box>
  );
}
