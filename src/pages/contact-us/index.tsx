import { Box } from '@mui/material';

import { SectionLayout } from '@shared/components/SectionLayout';
import { PresentationItemComponent } from '@shared/components/PresentationItem';

import CustomTag from '@shared/components/CustomTag';
import ContactForm from './components/contact-us-form';
import ReachUsComponent from './components/react-us-component';

import './style.scss';

const ContactUs = () => {
  return (
    <SectionLayout>
      <Box className="contact-us">
        <Box className="contact-us__welcome">
          <Box className="contact-us__welcome-title welcome-title">
            <Box className="welcome-title__tag">
              <CustomTag bgColor="#FCEAEF" color="#C82859" text="Contact us" />
            </Box>
            <Box className="welcome-title__title">Let&apos;s talk — we&apos;re here to help.</Box>
            <Box className="welcome-title__subtitle">
              <p>
                Have questions or want to learn more about Elevanto? Reach out to our team and we&apos;ll respond
                shortly.
              </p>
            </Box>
          </Box>
          <PresentationItemComponent />
        </Box>
        <Box className="contact-us__form">
          <ContactForm />
          <Box className="contact-us__contacts">
            <ReachUsComponent />
          </Box>
        </Box>
      </Box>
    </SectionLayout>
  );
};

export default ContactUs;
