import { Box } from '@mui/material';

import { InvoiceItem } from '@interfaces/features-page-interfaces';
import { capitalizeFirstLetter, joinClassNames } from '@utils/utility';

import './style.scss';

type Props = {
  invoice: InvoiceItem;
};

export default function InvoiceTab({ invoice }: Props) {
  return (
    <Box className={joinClassNames('invoice-tab', invoice.status)}>
      <Box className="invoice-tab__content">
        <h4 className="number">#{invoice.number}</h4>
        <p className="date">{invoice.date}</p>
        <h3 className="amount">${invoice.amount}</h3>
      </Box>
      <Box className="invoice-tab__status">
        <Box className="status">
          <p>{capitalizeFirstLetter(invoice.status)}</p>
        </Box>
      </Box>
    </Box>
  );
}
