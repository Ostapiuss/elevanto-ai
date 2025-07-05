import { ContactItem } from '@interfaces/features-page-interfaces';

export const emailUsers: ContactItem[] = [
  {
    firstName: 'John',
    id: 1,
    lastName: 'Doe',
    reason: 'Need consultation',
    type: 'email',
    messageHistory: [
      {
        id: '1',
        sender: 'me',
        text: 'Hi, I need a consultation',
      },
      {
        id: '2',
        sender: 'other',
        text: 'Sure! What time works for you?',
      },
      {
        id: '3',
        sender: 'me',
        text: 'Tomorrow at 3PM?',
      },
    ],
  },
];

export const smsUsers: ContactItem[] = [
  {
    firstName: 'Serah',
    id: 2,
    lastName: 'Kim',
    reason: 'Need consultation',
    type: 'sms',
    messageHistory: [
      {
        id: '1',
        sender: 'me',
        text: 'Hey, I was wondering if I could get a quick consultation.',
      },
      {
        id: '2',
        sender: 'other',
        text: 'Of course! When would be a good time for you?',
      },
      {
        id: '3',
        sender: 'me',
        text: 'Would 3PM tomorrow work?',
      },
    ],
  },
];

export const whatsAppUsers: ContactItem[] = [
  {
    firstName: 'Mike',
    id: 3,
    lastName: 'Johnosom',
    reason: 'Need consultation',
    type: 'whats-app',
    messageHistory: [
      {
        id: '1',
        sender: 'me',
        text: 'Hi there, do you have a moment for a quick chat?',
      },
      {
        id: '2',
        sender: 'other',
        text: 'Absolutely! When are you available?',
      },
      {
        id: '3',
        sender: 'me',
        text: 'How about tomorrow at 3 PM?',
      },
    ],
  },
];
