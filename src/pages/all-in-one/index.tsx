import { SectionLayout } from '@shared/components/SectionLayout';
import SplitView from '@shared/components/SplitView';

import UnderPlatformView from './components/united-platform-view';
import AiPageLayout from '@shared/components/AiPageLayout';
import { Box, Button } from '@mui/material';
import StartForFree from '@shared/components/StartForFreeButton';
import { emailUsers, smsUsers, whatsAppUsers } from '@mocks/contacts';
import { PageHeader } from '@shared/components/PageHeader';
import WhyChoosePlatform from './components/why-choose-platform';
import ConversationHub from '@shared/components/ConversationHub';
import DollarAccentIcon from '@assets/svg/dollar-accent-icon.svg?react';

import DatabaseAnalyze from '@shared/components/DatabaseAnalyze';
import Industries from '@shared/components/Industries';
import Invoices from '@shared/components/Invoices';
import BusinessImpact from '@shared/components/BusinessImpact';
import ReadyBusiness from '@shared/components/ReadyBusiness';
import { invoicesUserBilling } from '@mocks/invoices';

import WorkflowSteps from '@shared/components/WorkflowSteps';
import { workflowSteps } from '@mocks/common';
import HowItWorks from '@shared/components/HowItWorks';

import { businessItemsAllInOne, workersAllInOne } from '@mocks/shared';

import './style.scss';

const allUsers = [...smsUsers, ...emailUsers, ...whatsAppUsers];
const tabs = ['all', 'whatsapp', 'email', 'sms'];

export default function AllInOnePages() {
  return (
    <AiPageLayout>
      <SectionLayout className="all-in-one-section main-section section reverse">
        <SplitView
          firstColRender={<UnderPlatformView />}
          position="center"
          text={{
            title: 'Run Your Business on One Unified Platform',
            subtitle:
              'Elevanto combines CRM, conversations, billing, and marketing automation into one AI-powered workspace.',
            btnText: (
              <>
                <Box className="main__actions">
                  <StartForFree />
                  <Button variant="outlined" color="grayLight">
                    Book a demo
                  </Button>
                </Box>
              </>
            ),
          }}
        />
      </SectionLayout>
      <SectionLayout className="all-in-one-section section why-choose-platform-section">
        <PageHeader title="Why Choose Our All-in-One Platform?" size={36} subTitle="" />
        <WhyChoosePlatform />
      </SectionLayout>
      <SectionLayout className="all-in-one-section section features">
        <PageHeader
          title="Everything You Need to Run Your Business"
          size={36}
          subTitle="Every feature is designed to capture more leads and improve customer satisfaction"
        />
        <Box className="feature reverse">
          <SplitView
            firstColRender={<ConversationHub isShowMessages={false} tabs={tabs} tabType="tag" users={allUsers} />}
            position="center"
            text={{
              subtitle:
                'Centralize emails, chats, calls & social messages in one intelligent inbox. Never miss a customer interaction again.',
              title: 'Unified Conversation Hub',
            }}
          />
        </Box>
        <Box className="feature">
          <SplitView
            firstColRender={<DatabaseAnalyze />}
            position="center"
            text={{
              subtitle:
                'Get a 360° view of every client with detailed engagement metrics, interaction history, and predictive insights.',
              title: 'Client Database & CRM Analytics',
            }}
          />
        </Box>
        <Box className="feature reverse invoice-feature">
          <SplitView
            firstColRender={
              <Invoices
                invoices={invoicesUserBilling}
                isHasTitle={false}
                isIncludeInvoiceTitle
                icon={<DollarAccentIcon />}
              />
            }
            position="center"
            text={{
              subtitle: 'Send professional invoices, track payments, and automate billing cycles with smart reminders.',
              title: 'Billing & Invoicing',
            }}
          />
        </Box>
        <Box className="feature worflow-feature">
          <SplitView
            firstColRender={<WorkflowSteps title="Workflow: Welcome Series" steps={workflowSteps} />}
            position="center"
            text={{
              subtitle:
                'Pre-built workflows for campaigns, reminders, and lead nurturing that convert prospects into customers.',
              title: 'Marketing Automation',
            }}
          />
        </Box>
      </SectionLayout>
      <SectionLayout className="all-in-one-section section">
        <PageHeader
          title="How it works"
          size={36}
          subTitle="Get up and running with AI assistants in just four simple steps"
        />
        <HowItWorks workers={workersAllInOne} />
      </SectionLayout>
      <SectionLayout className="all-in-one-section section">
        <PageHeader
          title="Perfect for Every Industry"
          size={36}
          subTitle="See how businesses like yours are using Elevanto AI to grow faster"
        />
        <Industries />
      </SectionLayout>
      <SectionLayout className="all-in-one-section section">
        <PageHeader
          title="Real Business Impact"
          size={36}
          subTitle="See the measurable results our customers achieve with Elevanto AI"
        />
        <BusinessImpact businessItems={businessItemsAllInOne} />
      </SectionLayout>
      <SectionLayout className="all-in-one-section section ready-business-section">
        <ReadyBusiness />
      </SectionLayout>
    </AiPageLayout>
  );
}
