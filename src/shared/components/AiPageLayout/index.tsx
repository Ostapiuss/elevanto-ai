import { ReactNode } from 'react';

import './style.scss';

type Props = {
  children: ReactNode;
};

export default function AiPageLayout({ children }: Props) {
  return <div className="ai-page-layout">{children}</div>;
}
