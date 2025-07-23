import { useNavigate } from 'react-router';

import { Box } from '@mui/material';

import { PageHeader } from '@shared/components/PageHeader';
import { SectionLayout } from '@shared/components/SectionLayout';
import SplitView from '@shared/components/SplitView';

import ClientBoard from './components/client-board';
import AiAssistant from './components/ai-assistant';
import CustomWorkflow from './components/workflow';
import BusinessImpact from './components/business-impact';
import IncomingCall from './components/incoming-call';
import ConversationHub from '@shared/components/ConversationHub';
import ClientDatabase from './components/client-database';
import ReadyBusiness from '@shared/components/ReadyBusiness';
import BillingAndInvoices from './components/billing-and-invoice';
import { ScrollFadeIn } from '@shared/components/ScrollFadeIn';
import { emailUsers, smsUsers, whatsAppUsers } from '@mocks/contacts';

import './style.scss';

const allUsers = [...smsUsers, ...emailUsers, ...whatsAppUsers];
const tabs = ['all', 'whatsapp', 'email', 'sms'];

export default function Features() {
  const navigate = useNavigate();

  const rediredToAiAssistants = () => {
    navigate('/ai-assistants');
  };

  const rediredToAllInOne = () => {
    navigate('/all-in-one');
  };

  return (
    <>
      <SectionLayout className="section features">
        <ScrollFadeIn>
          <Box className="feature custom-crm-feature">
            <PageHeader
              title="Features"
              size={36}
              subTitle="Discover how Elevanto AI transforms your business operations with intelligent automation, seamless integrations, and powerful AI agents."
            />
            <SplitView
              position="center"
              firstColRender={<ClientBoard />}
              onButtonClick={rediredToAllInOne}
              text={{
                title: 'Everything You Need to Automate, Sell, and Scale',
                subtitle:
                  'From AI voice and chat agents to custom workflows and billing, Elevanto brings all your operations into one intelligent, growth-focused platform.',
                btnText: 'Learn more',
              }}
            />
          </Box>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <Box className="feature reverse ai-powered-assistants">
            <SplitView
              position="center"
              firstColRender={<AiAssistant />}
              onButtonClick={rediredToAiAssistants}
              text={{
                title: 'One CRM. Every Channel. Total Control.',
                subtitle:
                  'Capture leads, close deals, and automate conversations across phone, chat, text, and email—all in one smart system built to sell for you.',
                btnText: 'Learn more',
              }}
            />
          </Box>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <Box className="feature automated-custom-workflow">
            <SplitView
              position="center"
              firstColRender={<CustomWorkflow />}
              text={{
                title: 'Custom Workflow Automation',
                subtitle:
                  'Eliminate manual work with tailored automation logic. From onboarding sequences to task routing, we design flows that save hours.',
                btnText: 'Learn more',
              }}
            />
          </Box>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <Box className="feature reverse real-business-outcomes">
            <SplitView
              position="center"
              firstColRender={<BusinessImpact />}
              text={{
                title: 'Automation That Works the Way You Do',
                subtitle:
                  'We design custom workflows that mirror your processes—from onboarding to deadline management—eliminating manual work and keeping your business running on autopilot.',
                btnText: 'Learn more',
              }}
            />
          </Box>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <Box className="feature ai-voice-agent-handle">
            <SplitView
              position="center"
              firstColRender={<IncomingCall />}
              text={{
                title: 'AI That Pays for Itself',
                subtitle:
                  'Get more bookings, fewer no-shows, faster replies, and higher close rates. Elevanto is built to deliver results you can see—and revenue you can track.',
                btnText: 'Learn more',
              }}
            />
          </Box>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <Box className="feature reverse conversation-hub-feature">
            <SplitView
              position="center"
              firstColRender={<ConversationHub tabs={tabs} tabType="tab" users={allUsers} />}
              text={{
                title: 'Your AI-Powered Call Rep That Never Sleeps',
                subtitle:
                  'From answering calls to qualifying leads and scheduling bookings, our voice agent handles real conversations with natural, human-like speech—24/7.',
                btnText: 'Learn more',
              }}
            />
          </Box>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <Box className="feature">
            <SplitView
              position="center"
              firstColRender={<ClientDatabase />}
              text={{
                title: 'All Your Messages. One Smart Inbox.',
                subtitle:
                  'From WhatsApp to email and SMS, Elevanto keeps your communication organized, searchable, and shared—so your team always stays in sync.',
                btnText: 'Learn more',
              }}
            />
          </Box>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <Box className="feature reverse">
            <SplitView
              position="center"
              firstColRender={<BillingAndInvoices />}
              text={{
                title: 'Know Your Clients. Grow Smarter.',
                subtitle:
                  'From detailed activity logs to powerful filters and analytics, Elevanto helps you understand, segment, and serve your clients better—with all your data exactly where you need it.',
                btnText: 'Learn more',
              }}
            />
          </Box>
        </ScrollFadeIn>
      </SectionLayout>

      <ScrollFadeIn>
        <SectionLayout className="features section ready-business-section">
          <ReadyBusiness />
        </SectionLayout>
      </ScrollFadeIn>
    </>
  );
}
