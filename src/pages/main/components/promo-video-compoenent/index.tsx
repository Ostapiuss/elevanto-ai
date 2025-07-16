import VideoPlayer from '@shared/components/VideoPlayer';
import './style.scss';
import { Box } from '@mui/material';

export default function PromoVideoComponent() {
  return (
    <Box className="promo-video-playback">
      <VideoPlayer />
    </Box>
  );
}
