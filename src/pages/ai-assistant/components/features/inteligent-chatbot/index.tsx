import { Box } from '@mui/material';
import './style.scss';
import { MessageRender } from '@shared/components/MessageRender';
import CustomTag from '@shared/components/CustomTag';
import AiIconChat from '@assets/svg/ai-icon-chat.svg?react';
import { Message } from '@interfaces/shared-interfaces';

const messagesMock: Message[] = [
  {
    message: 'Hi! I noticed you`re browsing our pricing page. Any questions I can help with?',
    role: 'chat',
  },
  {
    message: 'Yes, what`s included in the Professional plan?',
    role: 'me',
  },
  {
    message:
      'The Professional plan includes unlimited chatbots, voice agents, and integrations. Would you like me to schedule a demo?',
    role: 'chat',
  },
];

export default function IntelligentChatbot() {
  return (
    <Box className="intelligent-chatbot">
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
            </Box>
          </Box>
        }
        messages={messagesMock}
      />
    </Box>
  );
}
