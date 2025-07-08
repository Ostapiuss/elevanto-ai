import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { AppModalService } from '@services/app-modal-service';
import { IF } from '@shared/components/IF';
import { ModalInterface } from '@interfaces/common-interfaces';
import './style.scss';
import { joinClassNames } from '@utils/utility';
import { IconButton } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

const AppModal = () => {
  const [open, onToggle] = useState<boolean>(false);
  const [modal, setModal] = useState<ModalInterface>({
    component: null,
    onClose: () => {},
    className: '',
    rootClassName: '',
  });

  useEffect(() => {
    AppModalService.subscribe('app-modal', onUpdateModal);
    window.addEventListener('keydown', handleOutsideKeyClick);

    return () => {
      AppModalService.unsubscribe('app-modal');
      window.removeEventListener('keydown', handleOutsideKeyClick);
    };
    // eslint-disable-next-line
  }, []);

  const handleOutsideKeyClick = (eventKey: KeyboardEvent): void => {
    if (eventKey.code === 'Escape') {
      modal?.onClose();
    }
  };

  const onUpdateModal = (data: ModalInterface | null): void => {
    if (!data || !data.component) {
      onToggle(false);
      return;
    }
    setModal(data);
    onToggle(true);
  };

  return (
    <Modal
      open={open}
      onClose={modal.onClose}
      className={joinClassNames('app-modal-root', modal?.className, modal?.rootClassName)}
      slotProps={modal.slotProps}
      slots={modal.slots}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            exit={{ opacity: 0, scale: 0.9, x: '-50%', y: '-50%' }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
            }}
          >
            <IF condition={Boolean(modal.component)}>
              <div className={joinClassNames('app-modal-root__content', modal.className)}>
                <IconButton className="app-modal-root__close-btn" onClick={modal.onClose}>
                  <CloseIcon sx={{ color: '#101010', width: 20, height: 20 }} />
                </IconButton>
                <div className="app-modal-root__content-container">{modal.component}</div>
              </div>
            </IF>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
};

export default AppModal;
