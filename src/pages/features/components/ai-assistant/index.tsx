import TapButton from '@shared/components/TapButton';

import MicroSvg from '@assets/svg/micro-icon.svg?react';
import ChatSvg from '@assets/svg/chat-icon.svg?react';

import { Message } from '@interfaces/shared-interfaces';
import { MessageRender } from '@shared/components/MessageRender';
import VoiceAssistant from '@shared/components/VoiceAssistant';

import './style.scss';

const messagesMock: Message[] = [
  {
    message: 'Hi! Can I help you today?',
    role: 'chat',
  },
  {
    message: 'I need a consultation',
    role: 'me',
  },
  {
    message: 'Sure! I’ve booked your appointment for 3PM Tuesday',
    role: 'chat',
  },
];

export default function AiAssistant() {
  return (
    <div className="ai-assistant-component">
      <MessageRender
        header={
          <>
            <ChatSvg />
            <p className="title">Website Chat</p>
          </>
        }
        footer={
          <>
            <TapButton>Schedule Call</TapButton>
            <TapButton>Get Quote</TapButton>
          </>
        }
        messages={messagesMock}
      />
      <VoiceAssistant
        icon={<MicroSvg />}
        messageText="Hi! I’d like to schedule a consultation for tomorrow."
        rednderTitleProps={() => {
          return <p>Handled by Elevanto Voice AI</p>;
        }}
      />
    </div>
  );
}
