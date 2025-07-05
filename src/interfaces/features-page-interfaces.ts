export type MessageType = 'whats-app' | 'email' | 'sms';

export interface ContactMessageHistory {
  id: string;
  sender: 'me' | 'other';
  text: string;
}

export interface ContactItem {
  id: number;
  firstName: string;
  lastName: string;
  reason: string;
  type: MessageType;
  messageHistory: ContactMessageHistory[];
}

export interface InvoiceItem {
  number: string;
  status: 'paid' | 'pending' | 'draft';
  date: string;
  amount: number;
}
