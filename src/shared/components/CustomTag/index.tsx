import { Box } from '@mui/material';

import './style.scss';

type Props = {
  bgColor: string;
  color: string;
  text: string;
};

export default function CustomTag({ bgColor, color, text }: Props) {
  return (
    <Box className="custom-tag" sx={{ backgroundColor: bgColor, color: color }}>
      <p>{text}</p>
    </Box>
  );
}
