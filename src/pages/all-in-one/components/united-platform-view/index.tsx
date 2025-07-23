import { Box } from '@mui/material';

import { LeadPipelineItem, SmartBoxMessage } from '@interfaces/shared-interfaces';
import Invoices from '@shared/components/Invoices';
import LeadPipeline from '@shared/components/LeadPipeline';
import SmartBox from '@shared/components/SmartBox';
import MockedCalendar from '@shared/components/MockedCalendar';

import DollarAccentIcon from '@assets/svg/dollar-accent-icon.svg?react';
import LeadsPipelineIcon from '@assets/svg/leads-icon.svg?react';
import SmartBoxIcon from '@assets/svg/message-accent-icon.svg?react';
import CalendarIcon from '@assets/svg/calendar-accent-icon.svg?react';

import './style.scss';
import { invoicesUser } from '@mocks/invoices';

const leadsData: LeadPipelineItem[] = [
  {
    leadName: 'John Smith',
    status: 'qulified',
  },
  {
    leadName: 'Maria Johnson',
    status: 'closed',
  },
  {
    leadName: 'Robert Wilson',
    status: 'contact',
  },
];

const messages: SmartBoxMessage[] = [
  {
    text: 'from alex@company.com',
    title: 'New Project Inquiry',
  },
  {
    text: 'from alex@company.com',
    title: 'New Project Inquiry',
    status: 'read',
  },
];

export default function UnitedPlatformView() {
  return (
    <Box className="united-platform">
      <LeadPipeline leads={leadsData} title="Lead Pipeline" icon={<LeadsPipelineIcon />} />
      <Invoices invoices={invoicesUser} title="Invoices" icon={<DollarAccentIcon />} />
      <MockedCalendar title="Calendar" icon={<CalendarIcon />} />
      <SmartBox messages={messages} title="Smart Box" icon={<SmartBoxIcon />} />
    </Box>
  );
}
