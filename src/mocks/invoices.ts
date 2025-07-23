import { InvoiceItem } from '@interfaces/features-page-interfaces';
import { InvoicesItem } from '@interfaces/shared-interfaces';

export const invoices: InvoiceItem[] = [
  {
    amount: 1200,
    date: 'May 21, 2025',
    number: '2024',
    status: 'paid',
  },
  {
    amount: 850,
    date: 'May 18, 2025',
    number: '2021',
    status: 'pending',
  },
  {
    amount: 2150,
    date: 'May 15, 2025',
    number: '2020',
    status: 'draft',
  },
];

export const invoicesUser: InvoicesItem[] = [
  {
    invoiceNumber: '2042',
    status: 'paid',
  },
  {
    invoiceNumber: '2041',
    status: 'pending',
  },
  {
    invoiceNumber: '2040',
    status: 'draft',
  },
];

export const invoicesUserBilling: InvoicesItem[] = [
  {
    invoiceNumber: '2042',
    status: 'paid',
  },
  {
    invoiceNumber: '2041',
    status: 'pending',
  },
  {
    invoiceNumber: '2040',
    status: 'draft',
  },

  {
    className: 'invoice-note',
    invoiceNumber: 'Automation: Auto-send reminders',
  },
];
