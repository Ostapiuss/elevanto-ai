import { SectionLayout } from '@shared/components/SectionLayout';
import AiPageLayout from '@shared/components/AiPageLayout';
import SplitView from '@shared/components/SplitView';
import { Avatar, Box, Button } from '@mui/material';
import StartForFree from '@shared/components/StartForFreeButton';

import WorkflowCanvas from '@shared/components/WorkflowCanvas';

import { PageHeader } from '@shared/components/PageHeader';
import WhyChoosePlatform from './components/why-choose-custom';

import CustomWorkflow from '@shared/components/CustomWorkflow';
import SmartTaskRouting from './components/smart-task-routing';
import AutomatedProcess from '@shared/components/AutomatedProcess';
import { AutomatedProcessItem } from '@interfaces/shared-interfaces';

import CheckFilledAccentIcon from '@assets/svg/accent-check-box-icon-filled.svg?react';

import FriendlyIntegration from '@shared/components/FriendlyIntegration';
import HowItWorks from '@shared/components/HowItWorks';
import { businessItemsAllInOne, workersAllInOne } from '@mocks/shared';
import ReadyBusiness from '@shared/components/ReadyBusiness';
import BusinessImpact from '@shared/components/BusinessImpact';
import RealWorldUseCases from './components/real-world-use-cases';

import './style.scss';

const processItems: AutomatedProcessItem[] = [
  {
    status: 'welcome',
    text: 'Welcome Email',
    title: <CheckFilledAccentIcon />,
  },
  {
    status: 'scheduled',
    text: 'Schedule Call',
    title: <Avatar sx={{ bgcolor: '#AC8CFA', color: '#ffffff' }}>2</Avatar>,
  },
  {
    status: 'assigned',
    text: 'Assign Manager',
    title: <Avatar sx={{ bgcolor: '#818992', color: '#ffffff' }}>3</Avatar>,
  },
];

export default function CustomAutomation() {
  return (
    <AiPageLayout>
      <SectionLayout className="section reverse main-custom-automation-section custom-automation">
        <SplitView
          firstColRender={<WorkflowCanvas />}
          position="center"
          text={{
            title: 'Capture Every Lead, Day or Night, with AI Assistants',
            subtitle:
              'AI-powered chatbots and voice agents engage customers 24/7 across web chat, phone, and messaging.',
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
      <SectionLayout className="custom-automation section why-choose-custom-section">
        <PageHeader
          title="Why Choose Custom Automations?"
          size={36}
          subTitle="Transform your business operations with intelligent automation that works exactly how you need it to."
        />
        <WhyChoosePlatform />
      </SectionLayout>
      <SectionLayout className="custom-automation section features powerfull-feature-interface-section">
        <PageHeader
          title="Powerful Features, Simple Interface"
          size={36}
          subTitle="Everything you need to automate your workflows, without the complexity."
        />
        <Box className="feature reverse">
          <SplitView
            position="center"
            firstColRender={<CustomWorkflow />}
            text={{
              title: 'Visual Workflow Builder',
              subtitle:
                'Design complex automations with our intuitive drag-and-drop interface. No coding required - just connect the dots and watch your workflows come to life.',
            }}
          />
        </Box>
        <Box className="feature">
          <SplitView
            position="center"
            firstColRender={<SmartTaskRouting />}
            text={{
              title: 'Smart Task Routing',
              subtitle:
                'Get a 360° view of every client with detailed engagement metrics, interaction history, and predictive insights.',
            }}
          />
        </Box>
        <Box className="feature reverse">
          <SplitView
            position="center"
            firstColRender={<AutomatedProcess process={processItems} />}
            text={{
              title: 'Automated Onboarding Sequences',
              subtitle:
                'Create seamless client onboarding experiences that run automatically. From welcome emails to scheduled calls, every step happens exactly when it should.',
            }}
          />
        </Box>
        <Box className="feature">
          <SplitView
            position="center"
            firstColRender={<FriendlyIntegration />}
            text={{
              title: 'Integration-Friendly',
              subtitle:
                'Connect with your existing tools and platforms. Sync data between CRMs, email systems, calendars, and more to create unified workflows.',
            }}
          />
        </Box>
      </SectionLayout>
      <SectionLayout className="custom-automation section how-it-works-section">
        <PageHeader
          title="How it works"
          size={36}
          subTitle="Get up and running with AI assistants in just four simple steps"
        />
        <HowItWorks workers={workersAllInOne} />
      </SectionLayout>
      <SectionLayout className="custom-automation section real-world-use-cases">
        <PageHeader
          title="Real-World Use Cases"
          size={36}
          subTitle="See how businesses like yours are using custom automations to streamline operations."
        />
        <RealWorldUseCases />
      </SectionLayout>
      <SectionLayout className="custom-automation section">
        <PageHeader
          title="Real Business Impact"
          size={36}
          subTitle="See the measurable results our customers achieve with Elevanto AI"
        />
        <BusinessImpact businessItems={businessItemsAllInOne} />
      </SectionLayout>
      <SectionLayout className="custom-automation section ready-business-section">
        <ReadyBusiness />
      </SectionLayout>
    </AiPageLayout>
  );
}
