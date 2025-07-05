import React, { useEffect, useState } from 'react';

import { Box, Tab, Tabs } from '@mui/material';

import Contact from './components/contanct';

import { emailUsers, smsUsers, whatsAppUsers } from '@mocks/contacts';

import './style.scss';
import { ContactItem } from '@interfaces/features-page-interfaces';
import { IF } from '@shared/components/IF';
import ContactFormInfo from './components/contact-form';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      className="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: '12px' }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const allUsers = [...smsUsers, ...emailUsers, ...whatsAppUsers];

export default function ConversationHub() {
  const [value, setValue] = React.useState(0);
  const [selectedUser, setSelectedUser] = useState<ContactItem>(allUsers[0]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleContactClick = (data: ContactItem) => {
    setSelectedUser(data);
  };

  useEffect(() => {
    switch (value) {
      case 0:
        setSelectedUser(allUsers[0]);
        break;
      case 1:
        setSelectedUser(whatsAppUsers[0]);
        break;
      case 2:
        setSelectedUser(emailUsers[0]);
        break;
      case 3:
        setSelectedUser(smsUsers[0]);
        break;
      default:
        break;
    }
  }, [value]);

  return (
    <Box className="conversation-hub">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="All" {...a11yProps(0)} />
            <Tab label="WhatsApp" {...a11yProps(1)} />
            <Tab label="Email" {...a11yProps(2)} />
            <Tab label="SMS" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <Box className="conversation-hub__panels">
          <Box className="conversation-hub__tab-panels">
            <CustomTabPanel value={value} index={0}>
              {allUsers.map((user, index) => {
                return <Contact key={index} data={user} onClick={handleContactClick} />;
              })}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              {whatsAppUsers.map((user, index) => {
                return <Contact key={index} data={user} onClick={handleContactClick} />;
              })}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              {emailUsers.map((user, index) => {
                return <Contact key={index} data={user} onClick={handleContactClick} />;
              })}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              {smsUsers.map((user, index) => {
                return <Contact key={index} data={user} onClick={handleContactClick} />;
              })}
            </CustomTabPanel>
          </Box>
          <IF condition={Boolean(selectedUser)}>
            <Box className="conversation-hub__user-info">
              <ContactFormInfo contact={selectedUser} />
            </Box>
          </IF>
        </Box>
      </Box>
    </Box>
  );
}
