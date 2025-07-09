import ArrowRightBg from '@assets/svg/right-bg-arrow.svg?react';

import './style.scss';

type Props = {
  text: string;
};

export default function ReadMore({ text }: Props) {
  return (
    <div className="read-more">
      <div className="title">{text}</div>
      <div className="icon">
        <ArrowRightBg />
      </div>
    </div>
  );
}
