import { useState } from 'react';
import { Box, Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';

import { Discount } from '@shared/components/Discount';
import { SubscriptionItem } from '@interfaces/shared-interfaces';
import SubscriptionItemComponent from '../subscription-item-component';
import { subscriptionOptions } from '@mocks/subscription';

import './style.scss';

type SubPlan = 'annually' | 'monthly';

export default function Subscription() {
  const [subsriptionPlan, setSubsriptionPlan] = useState<SubscriptionItem>(subscriptionOptions.annually);
  const [subOption, setSubOption] = useState<SubPlan>('annually');

  const handleChange = (_: React.MouseEvent<HTMLElement>, newSubPlan: SubPlan | null) => {
    if (!newSubPlan) return;
    const plan = subscriptionOptions[newSubPlan];
    setSubsriptionPlan(plan);
    setSubOption(newSubPlan);
  };

  return (
    <Box className="subscriptions" sx={{ width: '100%', padding: { xs: 2, sm: 4, md: 6 } }}>
      <Box className="subscriptions__actions">
        <ToggleButtonGroup
          color="primary"
          value={subOption}
          exclusive
          onChange={handleChange}
          aria-label="Subscription Plan"
        >
          <ToggleButton value="monthly">Monthly</ToggleButton>
          <ToggleButton className="annually-btn" value="annually">
            <span>Annually</span>
            <Discount discount={10} />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Grid
        container
        spacing={{ xs: 3, sm: 2, md: 2, lg: 2 }}
        className="subscriptions__list"
        sx={{ justifyContent: 'center' }}
      >
        {subsriptionPlan?.options.map((subData, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }} key={index}>
            <SubscriptionItemComponent {...subData} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
