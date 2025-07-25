import { Box } from '@mui/material';

import SubstitutionIcon from '@assets/svg/substitution.svg?react';

import './style.scss';

export default function FriendlyIntegration() {
  return (
    <Box className="friendly-integration">
      <Box className="friendly-integration__services">
        <Box className="service service-crm">
          <h4>CRM</h4>
        </Box>
        <Box className="service service-email">
          <h4>Email</h4>
        </Box>
      </Box>
      <Box className="friendly-integration__icon">
        <SubstitutionIcon />
      </Box>
      <Box className="friendly-integration__product">
        <h4>Elevanto</h4>
      </Box>
    </Box>
  );
}
