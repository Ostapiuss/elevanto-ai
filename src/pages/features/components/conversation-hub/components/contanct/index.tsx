import { Box, ButtonBase, styled } from '@mui/material';
import { ContactItem, MessageType } from '@interfaces/features-page-interfaces';
import { IF } from '@shared/components/IF';

import EmailIcon from '@assets/svg/message-icon.svg?react';
import SmsIcon from '@assets/svg/sms-icon.svg?react';
import WhatsAppIcon from '@assets/svg/whats-app-icon.svg?react';

import './style.scss';

type Props = {
  data: ContactItem;
  onClick: (data: ContactItem) => void;
};

const detectContactColor = (messageType: MessageType) => {
  if (messageType === 'sms') return '#DC2C62';
  if (messageType === 'email') return '#FFC935';
  if (messageType === 'whats-app') return '#976FF9';
};

const StyledButton = styled(ButtonBase)<{ bgcolor: string }>(({}) => ({
  backgroundColor: '#fafafa',
  zIndex: 1,
  boxShadow: '0px 2px 8px 0px #00000014',
  padding: '12px',
  position: 'relative',
  borderRadius: '4px',
  overflow: 'hidden',
  width: '100%',
  textAlign: 'left',
  left: '0',
}));

const StyledLine = styled(Box)<{ bgcolor: string }>(({ bgcolor }) => ({
  content: '""',
  position: 'absolute',
  borderRadius: '4px',
  width: '100%',
  backgroundColor: bgcolor,
  left: '-3px',
  height: '100%',
  zIndex: '0',
}));

export default function Contact({ data, onClick }: Props) {
  return (
    <Box className="contact-container">
      <StyledLine bgcolor={detectContactColor(data.type) || '#ccc'} />

      <StyledButton className="contact" bgcolor={detectContactColor(data.type) || '#ccc'} onClick={() => onClick(data)}>
        <Box className="contact-info">
          <h2 className="full-name">
            {data.firstName} {data.lastName}
          </h2>
          <IF condition={data.type === 'sms'}>
            <EmailIcon />
          </IF>
          <IF condition={data.type === 'email'}>
            <SmsIcon />
          </IF>
          <IF condition={data.type === 'whats-app'}>
            <WhatsAppIcon />
          </IF>
        </Box>
        <Box className="reason-text">
          <p>{data.reason}</p>
        </Box>
        <Box className="tags"></Box>
      </StyledButton>
    </Box>
  );
}
