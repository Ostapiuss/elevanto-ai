import { PageHeader } from '@shared/components/PageHeader';
import { SectionLayout } from '@shared/components/SectionLayout';
import SplitView from '@shared/components/SplitView';

import './style.scss';
import ClientBoard from './components/client-board';
import AiAssistant from './components/ai-assistant';
import { Box } from '@mui/material';
import CustomWorkflow from './components/workflow';
import BusinessImpact from './components/business-impact';

export default function Features() {
  return (
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
            title: 'AI-Powered Assistants',
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
    </SectionLayout>
  );
}
