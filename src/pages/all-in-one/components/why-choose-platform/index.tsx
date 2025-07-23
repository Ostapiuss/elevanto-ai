import { Box } from '@mui/material';

import AiAssistantPros from '@shared/components/AiAssistantPros';

import ToolConsultation from '@assets/svg/tool-consultation-icon.svg?react';
import ReportingDoc from '@assets/svg/document-reporting-icon.svg?react';
import ProfessionalBrandingIcon from '@assets/svg/professional-branding.svg?react';
import SeamlessCollaboration from '@assets/svg/seamless-collaboration.svg?react';

import './style.scss';

const whyChooseUsPlatfrom = [
  {
    icon: <ToolConsultation />,
    title: 'Tool Consolidation',
    subtitle: 'Replace multiple tools with one platform to eliminate silos and streamline your workflow.',
  },
  {
    icon: <ProfessionalBrandingIcon />,
    title: 'Professional Branding',
    subtitle: 'Consistent emails, invoices, and templates — fully branded to match your business identity.',
  },
  {
    icon: <ReportingDoc />,
    title: 'Advanced Reporting',
    subtitle: 'Track sales, campaigns, and customer trends in real time with powerful analytics.',
  },
  {
    icon: <SeamlessCollaboration />,
    title: 'Seamless Collaboration',
    subtitle: 'One source of truth for your entire team with shared workflows and real-time updates.',
  },
];

export default function WhyChoosePlatform() {
  return (
    <Box className="why-choose-platform">
      {whyChooseUsPlatfrom.map(({ icon, subtitle, title }, index) => {
        return <AiAssistantPros key={index} icon={icon} subtitle={subtitle} title={title} />;
      })}
    </Box>
  );
}
