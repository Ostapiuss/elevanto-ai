import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function FloatingButton() {
  return (
    <Fab
      color="primary"
      aria-label="add"
      style={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        backgroundColor: '#3B4146',
      }}
    >
      <AddIcon />
    </Fab>
  );
}

export default FloatingButton;
