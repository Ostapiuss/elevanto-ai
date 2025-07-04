import { Button, styled } from '@mui/material';
import { ReactNode } from 'react';

const TabButtonComponent = styled(Button)`
  font-family: 'TT Hoves Pro Trial', sans-serif;
  color: #2d3237;
  font-size: 12px;
  font-weight: 500;
  background-color: #eaebec;
  border-radius: 16px;
  padding: 3px 21px;
`;

type Props = {
  children: ReactNode;
};

export default function TapButton({ children }: Props) {
  return <TabButtonComponent>{children}</TabButtonComponent>;
}
