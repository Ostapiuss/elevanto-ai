import { SubscriptionOptions } from '@interfaces/shared-interfaces';

import './style.scss';
import { Button } from '@mui/material';
import { joinClassNames } from '@utils/utility';
import { IF } from '@shared/components/IF';
import { Discount } from '@shared/components/Discount';

type Props = {
  data: SubscriptionOptions;
  activeCardId: number;
  handleClick: (id: number) => void;
};

export default function SubscriptionItem({ data, activeCardId, handleClick }: Props) {
  return (
    <div
      className={joinClassNames('sub-item', {
        active: activeCardId === data.id,
      })}
      onClick={() => {
        handleClick(data.id);
      }}
    >
      <div className="sub-item__content">
        <h1 className="text">{data.text}</h1>
        <IF condition={Boolean(data.price)}>
          <div className="price">
            <div className="text-price">{data.price}</div>
            <IF condition={Boolean(data?.off)}>
              <Discount discount={10} />
            </IF>
          </div>
        </IF>
        <p className="description">{data.description}</p>
      </div>
      <div className="sub-item__advantages">
        <IF condition={Boolean(data.purpose)}>
          <div className="purpose">{data.purpose}</div>
        </IF>
        <div className="advantages-list">
          {data.advantages.map((advantagesItem, index) => {
            return (
              <div className="advantages-item" key={index}>
                <div className="icon">{advantagesItem.icon}</div>
                <p className="text">{advantagesItem.text}</p>
              </div>
            );
          })}
        </div>
        <div className="advantage-button">
          <Button variant="contained">{data.buttonText}</Button>
        </div>
      </div>
    </div>
  );
}
