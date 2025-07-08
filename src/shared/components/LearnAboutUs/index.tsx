import { Box } from '@mui/material';
import CustomTag from '../CustomTag';
import { PresentationItemComponent } from '../PresentationItem';

import './style.scss';

export default function LearnAboutUse() {
  return (
    <Box className="laern-about-us">
      <Box className="laern-about-us__welcome-title welcome-title">
        <Box className="welcome-title__tag">
          <CustomTag bgColor="#FCEAEF" color="#C82859" text="Contact us" />
        </Box>
        <Box className="welcome-title__title">Let&apos;s talk — we&apos;re here to help.</Box>
        <Box className="welcome-title__subtitle">
          <p>
            Have questions or want to learn more about Elevanto? Reach out to our team and we&apos;ll respond shortly.
          </p>
        </Box>
      </Box>
      <PresentationItemComponent />
    </Box>
  );
}
