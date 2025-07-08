import { useState } from 'react';

import { Box, Button, FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import SignInItem from '@assets/svg/sign-in-item.svg?react';
import ElevantoLogo from '@assets/svg/elevanto-logo-icon.svg?react';
import GoogleIcon from '@assets/svg/google-icon.svg?react';

import { motion } from 'framer-motion';

import './style.scss';

export default function SignInPage() {
  const [label, setLabel] = useState('Enter your work email address');
  const [value, setValue] = useState('');

  const handleFocus = () => setLabel('Email');
  const handleBlur = () => {
    if (!value) setLabel('Enter your work email address');
  };

  return (
    <motion.div
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
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button className="submit-btn" variant="contained">
                <p>Continue</p>
              </Button>
            </FormControl>
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
