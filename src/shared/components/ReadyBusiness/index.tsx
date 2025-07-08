import { Box, Button, Typography } from '@mui/material';
import StartForFree from '@shared/components/StartForFreeButton';

import { PresentationItemComponent } from '../PresentationItem';

import './style.scss';

export default function ReadyBusiness() {
  return (
    <Box className="ready-business">
      <Box className="content">
        <Typography component="h1" className="title">
          Ready to transform your business with AI?
        </Typography>
        <p className="subtitle">
          Join thousands of businesses already using Elevanto AI to automate their operations and scale faster.
        </p>
        <Box className="actions">
          <StartForFree variant="contained" className="start-btn" />
          <Button variant="contained" className="book-btn">
            Book a demo
          </Button>
        </Box>
      </Box>
      <PresentationItemComponent />
    </Box>
  );
}
