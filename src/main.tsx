import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import App from './App.tsx';

import { theme } from './theme.ts';

import './index.scss';

createRoot(document.getElementById('elevanto-app-root')!).render(
  <StrictMode>
    <BrowserRouter basename="elevanto-ai">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
