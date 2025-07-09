import { Box } from '@mui/material';

import './style.scss';

type Props = {
  bgColor: string;
  border?: string;
  color: string;
  text: string;
};

export default function CustomTag({ bgColor, color, text, border }: Props) {
  return (
    <Box className="custom-tag" sx={{ backgroundColor: bgColor, color: color, border: border ? border : 'none' }}>
      <p>{text}</p>
    </Box>
  );
}
