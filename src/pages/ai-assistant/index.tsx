import { SectionLayout } from '@shared/components/SectionLayout';

import { Box, Button } from '@mui/material';
import StartForFree from '@shared/components/StartForFreeButton';

import ReadyBusiness from '@shared/components/ReadyBusiness';

import SplitView from '@shared/components/SplitView';
import Assistant from './components/assistant';

import { PageHeader } from '@shared/components/PageHeader';

import './style.scss';
import WhyChooseUs from './components/why-choose-us';
import DriveResult from './components/features/drive-feature';
import IntelligentChatbot from './components/features/inteligent-chatbot';
import GlobalLanguageSupport from './components/features/global-language-support';

export default function AiAssistant() {
  return (
    <>
      <SectionLayout className="main reverse ai-assistant-section">
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
                  <Button variant="outlined">Book a demo</Button>
                </Box>
              </>
            ),
          }}
        />
      </SectionLayout>
      <SectionLayout className="ai-assistant-section">
        <PageHeader
          title="Why Choose Elevanto AI"
          size={36}
          subTitle="Transform your customer engagement with intelligent assistants that work around the clock"
        />
        <WhyChooseUs />
      </SectionLayout>
      <SectionLayout className="features-section ai-assistant-section">
        <PageHeader
          title="Powerful Features That Drive Results"
          subTitle="Every feature is designed to capture more leads and improve customer satisfaction"
          size={36}
        />
        <Box className="feature reverse">
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
        <Box className="feature">
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
        <Box className="feature">
          <SplitView
            firstColRender={<GlobalLanguageSupport />}
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
      </SectionLayout>
      <SectionLayout className="ready-business-section ai-assistant-section">
        <ReadyBusiness />
      </SectionLayout>
    </>
  );
}
