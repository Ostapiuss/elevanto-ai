import { Box } from '@mui/material';

import { PageHeader } from '@shared/components/PageHeader';
import { SectionLayout } from '@shared/components/SectionLayout';
import SplitView from '@shared/components/SplitView';

import ClientBoard from './components/client-board';
import AiAssistant from './components/ai-assistant';
import CustomWorkflow from './components/workflow';
import BusinessImpact from './components/business-impact';
import IncomingCall from './components/incoming-call';
import ConversationHub from './components/conversation-hub';
import ClientDatabase from './components/client-database';
import ReadyBusiness from '@shared/components/ReadyBusiness';
import BillingAndInvoices from './components/billing-and-invoice';

import './style.scss';

export default function Features() {
  return (
    <>
      <SectionLayout className="features">
        <Box className="feature">
          <PageHeader
            title="Features"
            size={36}
            subTitle="Discover how Elevanto AI transforms your business operations with intelligent automation, seamless integrations, and powerful AI agents."
          />
          <SplitView
            position="center"
            firstColRender={<ClientBoard />}
            text={{
              title: 'Custom CRM & Automation',
              subtitle:
                'Manage leads, automate sales funnels, schedule appointments, and communicate across channels—all from one powerful dashboard.',
              btnText: 'Learn more',
            }}
          />
        </Box>
        <Box className="feature reverse">
          <SplitView
            position="center"
            firstColRender={<AiAssistant />}
            text={{
              title: 'AI-Powered Assistants 123',
              subtitle:
                'Turn every website visit, WhatsApp chat, or phone call into a qualified lead with intelligent agents that respond and book—24/7.',
              btnText: 'Learn more',
            }}
          />
        </Box>
        <Box className="feature">
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
        <Box className="feature reverse">
          <SplitView
            position="center"
            firstColRender={<BusinessImpact />}
            text={{
              title: 'Real Business Outcomes',
              subtitle:
                'We focus on real results—like fewer no-shows, faster response times, and more conversions. AI that delivers visible results.',
              btnText: 'Learn more',
            }}
          />
        </Box>
        <Box className="feature">
          <SplitView
            position="center"
            firstColRender={<IncomingCall />}
            text={{
              title: 'AI Voice Agent',
              subtitle:
                'Handle inbound and outbound calls, qualify leads, and schedule appointments with natural-sounding voice automation.',
              btnText: 'Learn more',
            }}
          />
        </Box>
        <Box className="feature reverse">
          <SplitView
            position="center"
            firstColRender={<ConversationHub />}
            text={{
              title: 'Conversation Hub',
              subtitle:
                'Manage SMS, WhatsApp, and email in a single smart inbox. Track interactions and collaborate with your team in real-time.',
              btnText: 'Learn more',
            }}
          />
        </Box>
        <Box className="feature">
          <SplitView
            position="center"
            firstColRender={<ClientDatabase />}
            text={{
              title: 'Client Database & CRM Analytics',
              subtitle:
                'All your client data, activity logs, and insights in one place. Custom fields, tagging, and real-time search included.',
              btnText: 'Learn more',
            }}
          />
        </Box>
        <Box className="feature reverse">
          <SplitView
            position="center"
            firstColRender={<BillingAndInvoices />}
            text={{
              title: 'Billing & Invoices',
              subtitle:
                'Generate and send invoices, track payments, and sync billing with your workflows—all with full automation.',
              btnText: 'Learn more',
            }}
          />
        </Box>
      </SectionLayout>

      <SectionLayout className="section ready-business-section">
        <ReadyBusiness />
      </SectionLayout>
    </>
  );
}
