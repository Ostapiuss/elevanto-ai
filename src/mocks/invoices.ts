import { InvoiceItem } from '@interfaces/features-page-interfaces';

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
