import React from 'react';
import './style.scss';

type Props = {
  discount: number;
};

export const Discount: React.FC<Props> = ({ discount }) => {
  return (
    <div className="discount">
      <p className="text">{`${discount}% off`}</p>
    </div>
  );
};
