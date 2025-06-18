import { SubscriptionOptions } from '@interfaces/shared-interfaces';

import './style.scss';
import { Button } from '@mui/material';

export default function SubscriptionItem({
  text,
  description,
  price,
  purpose,
  advantages,
  buttonText,
}: SubscriptionOptions) {
  return (
    <div className="sub-item">
      <div className="sub-item__content">
        <h1 className="text">{text}</h1>
        <div className="price">{price}</div>
        <p className="description">{description}</p>
      </div>
      <div className="sub-item__advantages">
        <div className="purpose">{purpose}</div>
        <div className="advantages-list">
          {advantages.map((advantagesItem, index) => {
            return (
              <div className="advantages-item" key={index}>
                <div className="icon">{advantagesItem.icon}</div>
                <p className="text">{advantagesItem.text}</p>
              </div>
            );
          })}
        </div>
        <div className="advantage-button">
          <Button variant="contained">{buttonText}</Button>
        </div>
      </div>
    </div>
  );
}
