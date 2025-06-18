import React, { ReactNode } from 'react';

import './style.scss';

type Props = {
  children: ReactNode;
};

export const Tag: React.FC<Props> = ({ children }) => {
  return <div className="tag">{children}</div>;
};
