import { Box, Button } from '@mui/material';
import './style.scss';
import { useNavigate } from 'react-router';

export function NotFoundPage() {
  const navigation = useNavigate();

  const redirectHomePage = () => {
    navigation('/');
  };
  return (
    <div className="not-found-page">
      <div className="not-found-page__container">
        <Box className="not-found-page__section not-found-page__title-content">
          <h1>Page not found.</h1>
          <div className="title-subtext">This page does not exist</div>
        </Box>
        <Box className="not-found-page__section not-found-page__subtitle-content">
          <div className="description">Elevanto.ai is an AI-native CRM built for the next era of companies.</div>
          <Button onClick={redirectHomePage} variant="contained">
            Home Page
          </Button>
        </Box>
      </div>
    </div>
  );
}
