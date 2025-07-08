import AppModal from '@services/app-modal-service';
import { Button, ButtonProps } from '@mui/material';
import BookDemoModal from '@shared/modals/book-demo-modal';

type Props = ButtonProps;

export default function StartForFree(props: Props) {
  const handleOpenModal = () => {
    AppModal.open({
      onClose: () => {
        AppModal.close();
      },
      component: <BookDemoModal />,
    });
  };
  return (
    <Button {...props} variant="contained" onClick={handleOpenModal}>
      Start for free
    </Button>
  );
}
