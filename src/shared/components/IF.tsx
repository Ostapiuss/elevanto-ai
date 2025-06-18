import { ReactNode } from 'react';

interface IfProps {
  condition: boolean;
  children: ReactNode;
}

export function IF({ condition, children }: IfProps): ReactNode {
  if (condition) {
    return children;
  }

  return null;
}
