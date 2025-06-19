import { ReactElement, ReactNode } from 'react';

export interface SubscriptionOptions {
  text: string;
  price: string;
  buttonText: string;
  description: string;
  purpose: string;
  advantages: Array<SubscriptionAdvantages>;
}

export interface SubscriptionItem {
  id: number;
  options: SubscriptionOptions[];
}

export interface SubscriptionAdvantages {
  text: string;
  icon: ReactNode;
}

export interface CustomerItem {
  iconSrc: string;
  fullName: string;
  position: string;
  text: string;
  tag: string;
  userName: string;
  dateTime: string;
  socialIcon: ReactElement;
}

export interface AccordionsItme {
  question: string;
  id: number;
  answer: string;
}
