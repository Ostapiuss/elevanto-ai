import { SectionLayout } from '@shared/components/SectionLayout';

import { Box, Button } from '@mui/material';
import StartForFree from '@shared/components/StartForFreeButton';

import ReadyBusiness from '@shared/components/ReadyBusiness';

import SplitView from '@shared/components/SplitView';
import Assistant from './components/assistant';

import { PageHeader } from '@shared/components/PageHeader';

import WhyChooseUs from './components/why-choose-us';
import DriveResult from './components/features/drive-feature';
import IntelligentChatbot from './components/features/inteligent-chatbot';
import GlobalLanguageSupport from './components/features/global-language-support';
import AutomatedLeadScoring from './components/features/automated-lead-scoring';
import HowItWorks from '../../shared/components/HowItWorks';
import BusinessImpact from '@shared/components/BusinessImpact';
import Industries from '@shared/components/Industries';

import { businessItemsAiAssistant, workersAllInOne } from '@mocks/shared';
import AiPageLayout from '@shared/components/AiPageLayout';

import './style.scss';

export default function AiAssistant() {
  return (
    <AiPageLayout>
      <SectionLayout className="chatbot-section section main reverse ai-assistant-section">
        <SplitView
          firstColRender={<Assistant />}
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
      <SectionLayout className="section ai-assistant-section why-choose-section">
        <PageHeader
          title="Why Choose Elevanto AI"
          size={36}
          subTitle="Transform your customer engagement with intelligent assistants that work around the clock"
        />
        <WhyChooseUs />
      </SectionLayout>
      <SectionLayout className="section features-section ai-assistant-section">
        <PageHeader
          title="Powerful Features That Drive Results"
          subTitle="Every feature is designed to capture more leads and improve customer satisfaction"
          size={36}
        />
        <Box className="ai-voice-agent-feature feature reverse">
          <SplitView
            firstColRender={<DriveResult />}
            position="center"
            text={{
              title: 'AI Voice Agent',
              subtitle:
                'Answers calls, qualifies leads, and books meetings automatically with natural conversation flow.',
            }}
            footerRenderProps={() => {
              return (
                <ul className="ai-voice-agent-list">
                  <li>Natural voice conversations</li>
                  <li> Automatic call routing</li>
                  <li>Real-time transcription</li>
                </ul>
              );
            }}
          />
        </Box>
        <Box className="feature inteligent-chatbot-feature">
          <SplitView
            firstColRender={<IntelligentChatbot />}
            position="center"
            text={{
              title: 'Intelligent Chatbot',
              subtitle:
                'Engages visitors on site and chat apps, qualifies leads in real-time with smart conversation flows.',
            }}
            footerRenderProps={() => {
              return (
                <ul className="ai-voice-agent-list">
                  <li>Instant responses 24/7</li>
                  <li>Lead qualification logic</li>
                  <li>Seamless handoff to humans</li>
                </ul>
              );
            }}
          />
        </Box>
        <Box className="language-feature feature reverse">
          <SplitView
            firstColRender={<GlobalLanguageSupport />}
            position="center"
            text={{
              title: 'Multilingual Support',
              subtitle: 'Converse fluently in multiple languages to serve your global customer base.',
            }}
            footerRenderProps={() => {
              return (
                <ul className="ai-voice-agent-list">
                  <li>50+ languages supported</li>
                  <li>Auto-detect customer language</li>
                  <li>Cultural context awareness</li>
                </ul>
              );
            }}
          />
        </Box>
        <Box className="automated-lead-feature feature">
          <SplitView
            firstColRender={<AutomatedLeadScoring />}
            position="center"
            text={{
              title: 'Automated Lead Scoring',
              subtitle: 'Tags and scores leads based on interest level, budget, and buying intent automatically.',
            }}
            footerRenderProps={() => {
              return (
                <ul className="ai-voice-agent-list">
                  <li>Smart qualification criteria</li>
                  <li>Automatic CRM updates</li>
                  <li>Priority alerts for hot leads</li>
                </ul>
              );
            }}
          />
        </Box>
      </SectionLayout>
      <SectionLayout className="section ai-assistant-section how-it-works-section">
        <PageHeader
          title="How it works"
          size={36}
          subTitle="Get up and running with AI assistants in just four simple steps"
        />
        <HowItWorks workers={workersAllInOne} />
      </SectionLayout>
      <SectionLayout className="section ai-assistant-section">
        <PageHeader
          title="Perfect for Every Industry"
          size={36}
          subTitle="See how businesses like yours are using Elevanto AI to grow faster"
        />
        <Industries />
      </SectionLayout>
      <SectionLayout className="section ai-assistant-section">
        <PageHeader
          title="Real Business Impact"
          size={36}
          subTitle="See the measurable results our customers achieve with Elevanto AI"
        />
        <BusinessImpact businessItems={businessItemsAiAssistant} />
      </SectionLayout>
      <SectionLayout className="section ready-business-section ai-assistant-section">
        <ReadyBusiness />
      </SectionLayout>
    </AiPageLayout>
  );
}
