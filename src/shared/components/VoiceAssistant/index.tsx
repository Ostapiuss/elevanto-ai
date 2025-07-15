import { ReactNode, useEffect, useState } from 'react';

import { Box } from '@mui/material';

import { motion } from 'framer-motion';

import { IF } from '../IF';

import './style.scss';

type Props = {
  icon: ReactNode;
  messageText?: string;
  disableAnimation?: boolean;
  rednderTitleProps: () => ReactNode;
  rednderFooterProps?: () => ReactNode;
};

export default function VoiceAssistant({
  icon,
  messageText,
  disableAnimation = false,
  rednderTitleProps,
  rednderFooterProps,
}: Props) {
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReverse((r) => !r);
    }, 1000);
    return () => clearTimeout(timer);
  }, [reverse]);

  const baseBars = [
    { color: '#DB004D', scaleY1: [1, 1.5, 1], scaleY2: [1, 0.3, 1] },
    { color: '#E4517E', scaleY1: [1, 0.5, 1], scaleY2: [1, 1.4, 1] },
    { color: '#ED7AA8', scaleY1: [1, 1.25, 1], scaleY2: [1, 0.9, 1] },
    { color: '#F3A2C9', scaleY1: [1, 0.8, 1], scaleY2: [1, 0.3, 1] },
    { color: '#F8C5E1', scaleY1: [1, 0.5, 1], scaleY2: [1, 1.4, 1] },
  ];

  return (
    <Box className="voice-chat">
      <Box className="voice-chat__micro">{icon}</Box>
      <Box className="voice-chat__title">{rednderTitleProps()}</Box>
      <Box className="voice-chat__message">
        <p className="title">Live Translation:</p>
        <IF condition={Boolean(messageText)}>
          <p className="message">“{messageText}”</p>
        </IF>
      </Box>
      <IF condition={Boolean(!disableAnimation)}>
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
      </IF>
      <IF condition={Boolean(rednderFooterProps)}>{rednderFooterProps?.()}</IF>
    </Box>
  );
}
