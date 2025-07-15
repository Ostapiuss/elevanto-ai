import { Message } from '@interfaces/shared-interfaces';
import { Box } from '@mui/material';
import { joinClassNames } from '@utils/utility';
import { ReactNode } from 'react';

import './style.scss';

type MessageRenderProps = {
  messages: Message[];
  header: ReactNode;
  footer: ReactNode;
};

export const MessageRender = ({ messages, header, footer }: MessageRenderProps) => {
  return (
    <div className="chat">
      <div className="chat__header">{header}</div>
      <Box className="chat__messages">
        {messages.map((data, index) => {
          return (
            <Box key={index} className={joinClassNames('message', data.role)}>
              <p>{data.message}</p>
            </Box>
          );
        })}
      </Box>
      <div className="chat__footer">{footer}</div>
    </div>
  );
};
