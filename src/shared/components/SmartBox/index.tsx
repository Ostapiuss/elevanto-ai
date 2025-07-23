import { SmartBoxMessage } from '@interfaces/shared-interfaces';
import { ReactNode } from 'react';
import { Box } from '@mui/material';

import { joinClassNames } from '@utils/utility';

import './style.scss';

type Props = {
  messages: SmartBoxMessage[];
  icon: ReactNode;
  title: string;
};

export default function SmartBox({ messages, icon, title }: Props) {
  return (
    <Box className="smart-box">
      <Box className="smart-box__title-container">
        <Box className="icon">{icon}</Box>
        <Box className="title">{title}</Box>
      </Box>
      <Box className="smart-box__items">
        {messages.map((message, index) => {
          return (
            <Box key={index} className={joinClassNames('smart-box-item', message.status)}>
              <p className="smart-box-item__message">{message.title}</p>
              <p className="smart-box-item__text">{message.text}</p>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
