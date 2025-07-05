import { ReactNode } from 'react';

export interface OfferListItem {
  id: number;
  icon: ReactNode | string;
  previewIcon: ReactNode | string;
  text: string;
  description: string;
}
