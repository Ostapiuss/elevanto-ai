import { ReactElement, ReactNode } from 'react';

export interface SubscriptionOptions {
  text: string;
  id: number;
  price: string;
  off?: number;
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

export interface TriggerItem {
  icon: ReactNode;
  name: string;
  description: string;
  status: 'ready' | 'add';
}

export interface ResultImpactItem {
  title: string;
  result: string;
  icon: ReactNode;
  titleColor?: string;
  bgColor?: string;
  color?: string;
}
