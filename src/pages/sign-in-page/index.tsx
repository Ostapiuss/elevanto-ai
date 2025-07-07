import { Box, Button, FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import './style.scss';

export default function SignInPage() {
  return (
    <Grid className="sign-in-page" sx={{ padding: '120px' }} spacing={2}>
      <Box className="sign-in-page__form">
        <Box className="sso-login"></Box>
        <Box>
          <FormControl defaultValue="" required>
            <TextField id="outlined-basic" label="Enter your work email address" variant="outlined" />
            <Button variant="contained">Continue</Button>
          </FormControl>
        </Box>
      </Box>
      <Box className="sign-in-page__welcome welcome">
        <Box className="welcome__logo"></Box>
        <Box className="welcome__text"></Box>
        <Box className="welcome__steps"></Box>
      </Box>
    </Grid>
  );
}
