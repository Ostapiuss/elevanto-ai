import { Box } from '@mui/material';

import './style.scss';

export default function OnlineBadge() {
  return (
    <Box className="online-badge">
      <Box className="indicator"></Box>
      <h5 className="text">Active</h5>
    </Box>
  );
}
