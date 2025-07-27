import { SectionLayout } from '@shared/components/SectionLayout';
import ReadyBusiness from '@shared/components/ReadyBusiness';
import LearnAboutUse from '@shared/components/LearnAboutUs';
import { PageHeader } from '@shared/components/PageHeader';

import CompanyMission from './components/mission';
import OurStory from './components/our-story';
import MeetWithTeam from './components/meet-team';
import OurValues from './components/our-values';

import OurResults from './components/our-result';

import './style.scss';

export default function AboutUs() {
  return (
    <>
      <SectionLayout className="section about-us-section learn-about-us-section">
        <LearnAboutUse />
      </SectionLayout>
      <SectionLayout className="section about-us-section company-mission-section">
        <CompanyMission />
      </SectionLayout>
      <SectionLayout className="section about-us-section our-story-section">
        <PageHeader title="Our Story" subTitle="The journey that brought us here" size={36} />
        <OurStory />
      </SectionLayout>
      <SectionLayout className="section about-us-section meet-with-team-section">
        <PageHeader title="Meet the Team" subTitle="The people building the future of business automation" size={36} />
        <MeetWithTeam />
      </SectionLayout>
      <SectionLayout className="section about-us-section our-values-section">
        <PageHeader title="Our Values" subTitle="The principles that guide everything we do" size={36} />
        <OurValues />
      </SectionLayout>
      <SectionLayout className="section about-us-section our-results-section">
        <PageHeader title="Backed by Results" subTitle="Numbers that speak for themselves" size={36} />
        <OurResults />
      </SectionLayout>
      <SectionLayout className="section about-us-section ready-business-section">
        <ReadyBusiness />
      </SectionLayout>
    </>
  );
}
