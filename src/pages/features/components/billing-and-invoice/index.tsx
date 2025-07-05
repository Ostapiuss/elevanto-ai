import { Box, Button } from '@mui/material';
import { invoices } from '@mocks/invoices';
import InvoiceTab from '@shared/components/InvoiceTab';

import DocIcon from '@assets/svg/doc-icon.svg?react';

import './style.scss';

export default function BillingAndInvoices() {
  return (
    <Box className="billing-invoices">
      <Box className="billing-invoices__col">
        <div className="title">Recent Invoices</div>
        <Box className="invoices">
          {invoices.map((invoice, index) => (
            <InvoiceTab key={index} invoice={invoice} />
          ))}
        </Box>
      </Box>
      <Box className="billing-invoices__col">
        <Box className="invoice-total">
          <Box className="invoice-total__client">
            <Box className="client-header">
              <h2 className="client-title">Invoice #2040</h2>
              <DocIcon />
            </Box>
            <Box className="client-content">
              <Box className="row">
                <p className="row-title">Client:</p>
                <p className="row-value">Acme Corp</p>
              </Box>
              <Box className="row">
                <p className="row-title">Date:</p>
                <p className="row-value">June 21, 2025</p>
              </Box>
              <Box className="row">
                <p className="row-title">Due:</p>
                <p className="row-value">June 21, 2025</p>
              </Box>
            </Box>
          </Box>
          <Box className="invoice-total__service service">
            <h2 className="service__title">Services</h2>
            <p className="service__description">AI Automation Setup</p>
            <h3 className="service__total">$2,150</h3>
            <Box className="service__actions">
              <Button variant="contained">Learn more</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
