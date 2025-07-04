import { useEffect, useState } from 'react';

import TapButton from '@shared/components/TapButton';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

import MicroSvg from '@assets/svg/micro-icon.svg?react';
import ChatSvg from '@assets/svg/chat-icon.svg?react';

import { joinClassNames } from '@utils/utility';

import './style.scss';

interface Message {
  message: string;
  role: 'chat' | 'me';
}

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

type MessageRenderProps = {
  messages: Message[];
};

const MessageRender = ({ messages }: MessageRenderProps) => {
  return (
    <Box className="chat__messages">
      {messages.map((data, index) => {
        return (
          <Box key={index} className={joinClassNames('message', data.role)}>
            <p>{data.message}</p>
          </Box>
        );
      })}
    </Box>
  );
};

export default function AiAssistant() {
  const [reverse, setReverse] = useState(false);

  const baseBars = [
    { color: '#DB004D', scaleY1: [1, 1.5, 1], scaleY2: [1, 0.3, 1] },
    { color: '#E4517E', scaleY1: [1, 0.5, 1], scaleY2: [1, 1.4, 1] },
    { color: '#ED7AA8', scaleY1: [1, 1.25, 1], scaleY2: [1, 0.9, 1] },
    { color: '#F3A2C9', scaleY1: [1, 0.8, 1], scaleY2: [1, 0.3, 1] },
    { color: '#F8C5E1', scaleY1: [1, 0.5, 1], scaleY2: [1, 1.4, 1] },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setReverse((r) => !r);
    }, 1000);
    return () => clearTimeout(timer);
  }, [reverse]);

  return (
    <div className="ai-assistant-component">
      <div className="chat">
        <div className="chat__header">
          <ChatSvg />
          <p className="title">Website Chat</p>
        </div>
        <MessageRender messages={messagesMock} />
        <div className="chat__footer">
          <TapButton>Schedule Call</TapButton>
          <TapButton>Get Quote</TapButton>
        </div>
      </div>
      <Box className="voice-chat">
        <Box className="voice-chat__micro">
          <MicroSvg />
        </Box>
        <Box className="voice-chat__title">
          <p>Handled by Elevanto Voice AI</p>
        </Box>
        <Box className="voice-chat__message">
          <p className="title">Live Translation:</p>
          <p className="message">“Hi! I’d like to schedule a consultation for tomorrow.”</p>
        </Box>
        <Box className="voice-chat__micro-animation">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '20px',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: 20,
                gap: 7,
              }}
            >
              {baseBars.map((bar, i) => (
                <motion.div
                  key={i}
                  style={{
                    width: 4,
                    height: 20,
                    backgroundColor: bar.color,
                    borderRadius: 2,
                    transformOrigin: 'center',
                  }}
                  animate={{
                    scaleY: [...bar.scaleY1, ...bar.scaleY2],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: 'easeInOut',
                    times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  }}
                />
              ))}
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}
