import { Box } from '@mui/material';

import { SectionLayout } from '@shared/components/SectionLayout';

import ContactForm from './components/contact-us-form';
import LearnAboutUse from '@shared/components/LearnAboutUs';
import ReachUsComponent from './components/react-us-component';

import './style.scss';

const ContactUs = () => {
  return (
    <SectionLayout className="section contact-us-section">
      <Box className="contact-us">
        <LearnAboutUse />
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
