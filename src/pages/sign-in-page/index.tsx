import { useState } from 'react';

import { Box, Button, FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import SignInItem from '@assets/svg/sign-in-item.svg?react';
import ElevantoLogo from '@assets/svg/elevanto-logo-icon.svg?react';
import GoogleIcon from '@assets/svg/google-icon.svg?react';

import { motion } from 'framer-motion';

import './style.scss';
import { Link } from 'react-router';

export default function SignInPage() {
  const [label, setLabel] = useState('Enter your work email address');
  const [value, setValue] = useState('');

  const handleFocus = () => setLabel('Email');
  const handleBlur = () => {
    if (!value) setLabel('Enter your work email address');
  };

  return (
    <motion.div
      className="sign-in-page-frame"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Grid
        container
        className="sign-in-page"
        sx={{ padding: '0 120px', height: '100%', paddingTop: '60px' }}
        spacing={2}
      >
        <Box className="top-logo">
          <ElevantoLogo />
          <div className="title">elevanto.ai</div>
        </Box>
        <Grid className="sign-in-page__form">
          <Box className="form-login">
            <Box className="sso-login">
              <Button variant="outlined">
                <GoogleIcon />
                <p className="text">Sign in with Google</p>
              </Button>
            </Box>
            <Box className="form">
              <FormControl defaultValue="" required>
                <TextField
                  margin="normal"
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  label={label}
                  value={value}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      padding: '4px 12px',
                      '& fieldset': {
                        borderColor: '#23272b',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        boxShadow: 'none',
                        borderWidth: '1px',
                      },
                      '&:hover fieldset': {
                        borderColor: 'black',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#23272b',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#5A5F63',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#23272b',
                    },
                  }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={(e) => setValue(e.target.value)}
                />
                <Button className="submit-btn" variant="contained">
                  <p>Continue</p>
                </Button>
              </FormControl>
            </Box>
          </Box>
          <Box className="privacy">
            <p className="desktop-text">
              By inserting your email you confirm you agree to Elevanto AI contacting you about our product and
              services. You can opt out at any time by clicking unsubscribe in our emails. Find out more about how we
              use data in our <Link to="/privacy">privacy policy</Link>.
            </p>
            <p className="mobile-text">
              By inserting your email you confirm you agree to Elevanto AI contacting you about our product and
              services. Find out more about how we use data in our <Link to="/privacy">privacy policy</Link>.
            </p>
          </Box>
        </Grid>
        <Grid className="sign-in-page__welcome welcome">
          <Box className="welcome__logo">
            <ElevantoLogo />
            <div className="title">elevanto.ai</div>
          </Box>
          <Box className="welcome__text">
            <div className="title">Welcome to Elevanto AI!</div>
            <p className="text">
              Start your free trial and see how Elevanto automates conversations, workflows, and customer
              management—without code, setup stress, or long-term contracts.
            </p>
          </Box>
          <Box className="welcome__steps">
            <SignInItem />
          </Box>
        </Grid>
      </Grid>
    </motion.div>
  );
}
