import { PageHeader } from '@shared/components/PageHeader';
import { SectionLayout } from '@shared/components/SectionLayout';

import { Button } from '@mui/material';

// import DashboardIcon from '@assets/png/dashboard.png';

import './style.scss';
import { constants } from '@constants/index';
import Tags from './components/tags-component';

const pageTitle = 'Everything you need to automate your business with AI';
const pageSubTitle =
  'From CRM to AI agents, Elevanto AI combines a powerful platform with custom automation and intelligent assistants—purpose-built for service-focused teams.';

export default function MainPage() {
  return (
    <>
      <SectionLayout className="section">
        <PageHeader title={pageTitle} subTitle={pageSubTitle} />
        <Button variant="contained">Start for free</Button>
        {/* <img className="dashboard-icon" src={DashboardIcon} alt="dashboard-icon" /> */}
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
      <SectionLayout className="section">
        <PageHeader title={pageTitle} subTitle={pageSubTitle} />
        <Button variant="contained">Start for free</Button>
      </SectionLayout>
    </>
  );
}
