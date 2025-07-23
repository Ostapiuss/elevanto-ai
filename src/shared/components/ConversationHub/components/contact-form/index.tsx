import { Box } from '@mui/material';

import { ContactItem } from '@interfaces/features-page-interfaces';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { IF } from '@shared/components/IF';
import { getFirstLetter, joinClassNames } from '@utils/utility';

import { motion } from 'framer-motion';

import './style.scss';

type Props = {
  contact: ContactItem;
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const messageVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactFormInfo({ contact }: Props) {
  return (
    <Stack spacing={2} className="contact-form">
      <IF condition={Boolean(contact)}>
        <Box className="contact-form__profile profile">
          <Avatar sx={{ bgcolor: '#F4BECE', color: '#C82859' }}>{getFirstLetter(contact.firstName)}</Avatar>
          <h2 className="profile__full-name">
            {contact.firstName} {contact.lastName}
          </h2>
        </Box>
        <motion.div
          key={contact.id}
          className="contact-form__messages"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {contact.messageHistory.map((message) => (
            <motion.div
              variants={messageVariants}
              className={joinClassNames('message', message.sender)}
              key={message.id}
            >
              <p>{message.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </IF>
    </Stack>
  );
}
