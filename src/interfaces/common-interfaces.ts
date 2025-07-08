import { ModalProps } from '@mui/material';
import { JSX } from 'react';

export interface ModalInterface extends Pick<ModalProps, 'slots' | 'slotProps'> {
  component: JSX.Element | null;
  rootClassName?: string;
  className?: string;
  onClose: () => void;
}
