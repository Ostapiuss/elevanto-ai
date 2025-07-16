import { PageHeader } from '@shared/components/PageHeader';
import { SectionLayout } from '@shared/components/SectionLayout';

import CustomersComponent from './components/customers-component';
import CompanyOffer from './components/offer-component';
// import Subscription from './components/subscription-component';
import Tags from './components/tags-component';

import { constants } from '@constants/index';

import MainQuestion from './components/question-component';
import PromoVideoComponent from './components/promo-video-compoenent';
import ReadyBusiness from '@shared/components/ReadyBusiness';
import { ScrollFadeIn } from '@shared/components/ScrollFadeIn';

import StartForFree from '@shared/components/StartForFreeButton';

import CustomTag from '@shared/components/CustomTag';
import AdvantagesComponent from './components/advantages-component';
import { Button } from '@mui/material';

import AiMainBlockCustom from '@shared/components/AiMainBlockCustom';

import './style.scss';

export default function MainPage() {
  return (
    <>
      <SectionLayout className="section main-section">
        <CustomTag
          bgColor="#ffffff"
          color="#464D54"
          text="Powered by advanced AI technology"
          border="1px solid #818992"
        />
        <PageHeader
          title="Everything you need to automate your business with AI"
          subTitle="From CRM to AI agents, Elevanto AI combines a powerful platform with custom automation and intelligent assistants—purpose-built for service-focused teams."
        />
        <StartForFree sx={{ marginTop: '32px' }} />
        <AiMainBlockCustom />
      </SectionLayout>
      <ScrollFadeIn>
        <SectionLayout className="section">
          <PageHeader
            size={20}
            title={
              <div className="tag-title">
                <span style={{ color: constants.colors.secondary }}>Trusted by</span> top-tier teams worldwide
              </div>
            }
          />
          <Tags />
        </SectionLayout>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <SectionLayout className="section offer-section">
          <PageHeader
            size={36}
            subTitle="We combine a white-label automation platform with AI-powered services tailored to your business."
            title={
              <div className="tag-title">
                What <span style={{ color: constants.colors.secondary }}>We Offer</span>
              </div>
            }
          />
          <CompanyOffer />
        </SectionLayout>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <SectionLayout className="section advantage-section">
          <PageHeader size={36} title="Elevanto One" subTitle="Built to scale. Powered by AI." />
          <CustomTag
            bgColor="#ffffff"
            color="#464D54"
            text="Powered by advanced AI technology"
            border="1px solid #818992"
          />
          <AdvantagesComponent />
          <div className="advantage-section__footer">
            <Button variant="contained">Start for free</Button>
            <p>We&apos;ll guide you through every step.</p>
          </div>
        </SectionLayout>
      </ScrollFadeIn>
      {/* <ScrollFadeIn>
        <SectionLayout className="section subscription-section">
          <PageHeader
            size={36}
            title="Start smart. Scale fast."
            subTitle="Powerful automation tools, built-in AI, and zero fluff—just results"
          />
          <Subscription />
          <div className="subscription-section__footer">
            <p>
              Not sure which plan is right for you?{' '}
              <a style={{ color: constants.colors.secondary }}>Book a Free Demo </a>
              or talk to our team.
            </p>
          </div>
        </SectionLayout>
      </ScrollFadeIn> */}
      <ScrollFadeIn>
        <SectionLayout className="section customer-section">
          <PageHeader
            size={36}
            subTitle="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            title={
              <div className="tag-title">
                Our customers <span style={{ color: constants.colors.secondary }}>love us!</span>
              </div>
            }
          />

          <CustomersComponent />
        </SectionLayout>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <SectionLayout className="section promo-video">
          <PageHeader
            size={36}
            title="Promo video title"
            subTitle="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque"
          />
          <PromoVideoComponent />
        </SectionLayout>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <SectionLayout className="section question-section">
          <PageHeader
            size={36}
            title={
              <div className="tag-title">
                <span style={{ color: constants.colors.secondary }}>Your questions</span>, we answered
              </div>
            }
          />
          <MainQuestion />
        </SectionLayout>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <SectionLayout className="section ready-business-section">
          <ReadyBusiness />
        </SectionLayout>
      </ScrollFadeIn>
    </>
  );
}
