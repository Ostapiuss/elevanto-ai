import { LeadPipelineItem } from '@interfaces/shared-interfaces';
import { ReactNode } from 'react';
import { Box } from '@mui/material';
import { capitalizeFirstLetter, joinClassNames } from '@utils/utility';

import './style.scss';

type Props = {
  leads: LeadPipelineItem[];
  icon: ReactNode;
  title: string;
};

export default function LeadPipeline({ leads, icon, title }: Props) {
  return (
    <Box className="pipeline">
      <Box className="pipeline__title-container">
        <Box className="icon">{icon}</Box>
        <Box className="title">{title}</Box>
      </Box>
      <Box className="pipeline__leads">
        {leads.map((lead, index) => {
          return (
            <Box key={index} className={joinClassNames('lead', `lead-status-${lead.status}`)}>
              <p className="lead__name">{lead.leadName}</p>
              <Box className="lead__status">
                <p className="status">{capitalizeFirstLetter(lead.status)}</p>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
