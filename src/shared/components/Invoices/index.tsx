import { InvoicesItem } from '@interfaces/shared-interfaces';
import { ReactNode } from 'react';
import { Box } from '@mui/material';
import { capitalizeFirstLetter, joinClassNames } from '@utils/utility';

import { IF } from '@shared/components/IF';

import './style.scss';

type Props = {
  invoices: InvoicesItem[];
  icon: ReactNode;
  isIncludeInvoiceTitle?: boolean;
  isHasTitle?: boolean;
  title?: string;
};

export default function Invoices({ invoices, icon, title, isIncludeInvoiceTitle = false, isHasTitle = false }: Props) {
  return (
    <Box className="invoices">
      <IF condition={Boolean(isHasTitle)}>
        <Box className="invoices__title-container">
          <Box className="icon">{icon}</Box>
          <Box className="title">{title}</Box>
        </Box>
      </IF>
      <Box className="invoices__items">
        {invoices.map((invoice, index) => {
          return (
            <Box key={index} className={joinClassNames('invoice', invoice.className ? invoice.className : '')}>
              <p className="invoice__name">
                {isIncludeInvoiceTitle ? 'Invoice' : ''} #{invoice.invoiceNumber}
              </p>
              <IF condition={Boolean(invoice?.status)}>
                <Box className={joinClassNames('invoice__status', `invoice-status-${invoice?.status}`)}>
                  <p className="status">{capitalizeFirstLetter(invoice?.status)}</p>
                </Box>
              </IF>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
