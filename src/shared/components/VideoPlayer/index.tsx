// import React from 'react';
import { Box } from '@mui/material';
import Player from '@mux/mux-player-react';

export default function VideoPlayer() {
  return (
    <Box
      sx={{
        width: '100%',
        aspectRatio: '16 / 9',
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: 3,
      }}
    >
      <Player
        playbackId="a4nOgmxGWg6gULfcBbAa00gXyfcwPnAFldF8RdsNyk8M"
        autoPlay
        muted
        loop
        // @ts-expect-error: native video props
        controls
        style={{ width: '100%', height: '100%' }}
      />
    </Box>
  );
}
