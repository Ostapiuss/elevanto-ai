import { Box, Button, FormControl, FormLabel, TextField } from '@mui/material';

import './style.scss';
import AppModal from '@services/app-modal-service';
import BookedNotificationModal from '../booked-notification-modal';

export default function BookDemoModal() {
  const handleSubmitButton = () => {
    AppModal.open({
      onClose: AppModal.close,
      component: <BookedNotificationModal />,
    });
  };

  return (
    <Box className="book-demo-modal">
      <h2 className="book-demo-modal__title">Book your free AI demo</h2>
      <p className="book-demo-modal__description">
        Leave your details — and we’ll show you how Elevanto can work for you.
      </p>
      <Box component="form" className="book-demo-modal__form">
        <FormControl>
          <FormLabel>Name</FormLabel>
          <TextField id="full-name" placeholder="Full Name" variant="outlined" className="fuill-name" />
        </FormControl>
        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <TextField
            id="phone-number"
            placeholder="e.g., +1 555 123 4567 Name"
            variant="outlined"
            className="phone-number"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <TextField id="phone-number" placeholder="e.g., name@company.com" variant="outlined" className="email" />
        </FormControl>
        <p className="form-description">
          By submitting, you agree to be contacted about Elevanto AI’s solutions. No spam — just a personalized demo.
        </p>
        <Button
          onClick={handleSubmitButton}
          sx={{ width: '88px', marginLeft: 'auto', marginTop: '32px' }}
          variant="contained"
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
