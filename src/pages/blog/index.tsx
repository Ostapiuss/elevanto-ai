import { SectionLayout } from '@shared/components/SectionLayout';
import { PageHeader } from '@shared/components/PageHeader';

import ReadyBusiness from '@shared/components/ReadyBusiness';

import './style.scss';
import Blogs from './components/blogs';

export default function Blog() {
  return (
    <>
      <SectionLayout className="section blog-sections main-blog-section">
        <PageHeader
          size={32}
          title="Insights, tips & automation strategies"
          subTitle="Stay updated with the latest trends in AI-powered automation, CRM, and business growth."
        />
        <Blogs />
      </SectionLayout>
      <SectionLayout className="section blog-sections ready-business-section">
        <ReadyBusiness />
      </SectionLayout>
    </>
  );
}
