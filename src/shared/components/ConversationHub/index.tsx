import React, { useEffect, useState } from 'react';

import { Box, Tab, Tabs, ToggleButton, ToggleButtonGroup } from '@mui/material';

import Contact from './components/contanct';

import { ContactItem } from '@interfaces/features-page-interfaces';
import { IF } from '@shared/components/IF';
import ContactFormInfo from './components/contact-form';

import './style.scss';
import { joinClassNames } from '@utils/utility';

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

type Props = {
  users: ContactItem[];
  tabType: 'tab' | 'tag';
  tabs: string[];
  isShowMessages?: boolean;
};

export default function ConversationHub({ users, tabType, tabs, isShowMessages = true }: Props) {
  const [value, setValue] = React.useState(0);
  const [selectedUser, setSelectedUser] = useState<ContactItem>(users[0]);

  const whatsAppUsers = users.filter((user) => user.type === 'whats-app');
  const smsUsers = users.filter((user) => user.type === 'sms');
  const emailUsers = users.filter((user) => user.type === 'email');

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeTags = (_: React.SyntheticEvent, newValue: number[]) => {
    setValue(newValue[0]);
  };

  const handleContactClick = (data: ContactItem) => {
    setSelectedUser(data);
  };

  useEffect(() => {
    switch (value) {
      case 0:
        setSelectedUser(users[0]);
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
      <Box sx={{ width: '100%', border: 'none' }}>
        <IF condition={Boolean(tabType === 'tab')}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              {tabs.map((tabName, index) => (
                <Tab key={index} label={tabName} {...a11yProps(0)} />
              ))}
            </Tabs>
          </Box>
        </IF>
        <IF condition={tabType === 'tag'}>
          <ToggleButtonGroup
            sx={{
              borderRadius: '24px',
              p: '4px',
            }}
            className="tag-tabs"
            onChange={handleChangeTags}
          >
            {tabs.map((tabName, index) => (
              <ToggleButton
                key={index}
                {...a11yProps(0)}
                value={index}
                className={joinClassNames('toggle-button', {
                  selected: value === index,
                })}
                sx={{
                  textTransform: 'none',
                  border: '1px solid #969DA4',
                  borderLeft: '1px solid #969DA4 !important',
                  borderRadius: '16px !important',
                  px: '12px',
                  py: '4px',
                  fontSize: '14px',
                  color: '#464D54',
                  fontWeight: 400,
                  '&.selected': {
                    backgroundColor: '#EFF0F1',
                    color: '#464D54',
                    borderLeft: '1px solid #EFF0F1 !important',
                    borderColor: '#EFF0F1',
                  },
                }}
              >
                <p>{tabName}</p>
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </IF>
        <Box
          className={joinClassNames('conversation-hub__panels', {
            'one-panel': !isShowMessages,
          })}
        >
          <Box className="conversation-hub__tab-panels">
            <CustomTabPanel value={value} index={0}>
              {users.map((user, index) => {
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
          <IF condition={Boolean(selectedUser && isShowMessages)}>
            <Box className="conversation-hub__user-info">
              <ContactFormInfo contact={selectedUser} />
            </Box>
          </IF>
        </Box>
      </Box>
    </Box>
  );
}
