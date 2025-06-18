import { PageHeader } from '@shared/components/PageHeader';
import { SectionLayout } from '@shared/components/SectionLayout';

import { Button } from '@mui/material';

import CustomersComponent from './components/customers-component';
import CompanyOffer from './components/offer-component';
import Subscription from './components/subscription-component';
import Tags from './components/tags-component';

import DashboardIcon from '@assets/png/dashboard.png';

import { constants } from '@constants/index';

import './style.scss';

export default function MainPage() {
  return (
    <>
      <SectionLayout className="section">
        <PageHeader
          title="Everything you need to automate your business with AI"
          subTitle="From CRM to AI agents, Elevanto AI combines a powerful platform with custom automation and intelligent assistants—purpose-built for service-focused teams."
        />
        <Button sx={{ marginTop: '32px' }} variant="contained">
          Start for free
        </Button>
        <img className="dashboard-icon" src={DashboardIcon} alt="dashboard-icon" />
      </SectionLayout>
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
      <SectionLayout className="section subscription-section">
        <PageHeader
          size={36}
          title="Start smart. Scale fast."
          subTitle="Powerful automation tools, built-in AI, and zero fluff—just results"
        />
        <Subscription />
        <div className="subscription-section__footer">
          <p>
            Not sure which plan is right for you? <a style={{ color: constants.colors.secondary }}>Book a Free Demo </a>
            or talk to our team.
          </p>
        </div>
      </SectionLayout>
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
    </>
  );
}
