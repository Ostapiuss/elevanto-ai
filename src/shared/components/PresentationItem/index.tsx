import { presentationItems } from '@mocks/business';
import { Box, Typography } from '@mui/material';

import './style.scss';

export const PresentationItemComponent = () => {
  return (
    <Box className="presentation">
      {presentationItems.map((itemData, index) => (
        <Box key={index} className="item">
          <Box className="item__icon">{itemData.icon}</Box>
          <Box className="item__content">
            <Typography className="item__title" component="span">
              {itemData.title}
            </Typography>
            <p className="item__subtitle">{itemData.subtitle}</p>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
