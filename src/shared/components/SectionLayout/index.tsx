import { ReactNode } from 'react';

import { joinClassNames } from '@utils/utility';

import './style.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

export const SectionLayout: React.FC<Props> = ({ children, className }) => {
  return <section className={joinClassNames('section-layout', className ? className : '')}>{children}</section>;
};
