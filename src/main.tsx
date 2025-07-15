import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import AppModal from '@components/modal';
import App from './App.tsx';
import ScrollToTop from '@shared/components/ScrollToTop/index.tsx';

import { theme } from './theme.ts';

import './index.scss';

createRoot(document.getElementById('elevanto-app-root')!).render(
  <StrictMode>
    <BrowserRouter basename="elevanto-ai">
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <App />
        <AppModal />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
