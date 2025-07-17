import { Avatar, Box } from '@mui/material';

import './style.scss';
import { getFirstLetter, joinClassNames } from '@utils/utility';

interface LeadItem {
  firstName: string;
  lastName: string;
  status: 'hot' | 'warm' | 'cold';
  number: number;
  ocupation: string;
}

const leadList: LeadItem[] = [
  {
    firstName: 'John',
    lastName: 'Smith',
    status: 'hot',
    number: 95,
    ocupation: 'Healthcare Clinic',
  },
  {
    firstName: 'Maria',
    lastName: 'Johnson',
    status: 'warm',
    number: 95,
    ocupation: 'Real Estate Agency',
  },
  {
    firstName: 'Robert',
    lastName: 'Wilson',
    status: 'cold',
    number: 72,
    ocupation: 'Law Firm',
  },
];

export default function AutomatedLeadScoring() {
  return (
    <Box className="automated-lead-scoring">
      <Box className="automated-lead-scoring__title">Lead Pipeline</Box>
      <Box className="automated-lead-scoring__list">
        {leadList.map((lead, index) => {
          return (
            <Box key={index} className={joinClassNames('lead-item', lead.status)}>
              <Box className="lead-item__avatar">
                <Avatar sx={{ bgcolor: '#F4BECE', color: '#C82859' }}>
                  <p>{getFirstLetter(lead.firstName)}</p>
                  <p>{getFirstLetter(lead.lastName)}</p>
                </Avatar>
              </Box>
              <Box className="lead-item__personal-info">
                <h3 className="lead-item__title">
                  {lead.firstName} {lead.lastName}
                </h3>
                <p className="lead-item__ocupation">{lead.ocupation}</p>
              </Box>
              <Box className="lead-item__additonal-data">
                <Box className="lead-item__status">
                  <p>{lead.status}</p>
                </Box>
                <Box className="lead-item__number">
                  <p>{lead.number}</p>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
