import { useState } from 'react';

import { Discount } from '@shared/components/Discount';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { SubscriptionItem } from '@interfaces/shared-interfaces';
import SubscriptionItemComponent from '../subscription-item-component';

import { subscriptionOptions } from '@mocks/subscription';

import './style.scss';

type SubPlan = 'annually' | 'monthly';

export default function Subscription() {
  const [subsriptionPlan, setSubsriptionPlan] = useState<SubscriptionItem>(subscriptionOptions.annually);
  const [subOption, setSubOption] = useState<SubPlan>('annually');

  const handleChange = (_: React.MouseEvent<HTMLElement>, newSubPlan: SubPlan) => {
    const plan = subscriptionOptions[`${newSubPlan}`];
    setSubsriptionPlan(plan);
    setSubOption(newSubPlan);
  };

  return (
    <div className="subscriptions">
      <div className="subscriptions__actions">
        <ToggleButtonGroup
          color="primary"
          value={subOption}
          exclusive
          onChange={handleChange}
          aria-label="Subscription Plan"
        >
          <ToggleButton value="monthly">Monthly</ToggleButton>
          <ToggleButton className="annually-btn" value="annually">
            <div className="tex">Annually</div>
            <Discount discount={10} />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="subscriptions__list">
        {subsriptionPlan?.options.map((subData, index) => {
          return <SubscriptionItemComponent key={index} {...subData} />;
        })}
      </div>
    </div>
  );
}
