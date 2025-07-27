import React, { useState } from 'react';

import { Box, IconButton } from '@mui/material';

import Trigger from '@shared/components/Trigger';
import { TriggerItem } from '@interfaces/shared-interfaces';

import PlusIcon from '@assets/svg/plus-icon.svg?react';
import SubstituitionIcon from '@assets/svg/substitution-icon.svg?react';
import TagIcon from '@assets/svg/tag-icon.svg?react';
import ClockIcon from '@assets/svg/clock-icon.svg?react';
import UsersIcon from '@assets/svg/users-icon.svg?react';

import './style.scss';

const basedTrigged: TriggerItem = {
  icon: <SubstituitionIcon />,
  name: 'Trigger',
  status: 'ready',
  description: 'Pipeline Update to New Lead',
};

const addTrigger: TriggerItem = {
  icon: <PlusIcon />,
  name: 'Add New Trigger',
  status: 'add',
  description: '',
};

const baseTriggers: TriggerItem[] = [
  {
    icon: <TagIcon />,
    status: 'ready',
    name: '',
    description: 'Add Tag: "new lead activation"',
  },
  {
    icon: <ClockIcon />,
    name: '',
    status: 'ready',
    description: 'Wait: 1 minutes',
  },
];

export default function CustomWorkflow() {
  const [triggers, setTriggers] = useState<TriggerItem[]>(baseTriggers);

  const onAddNewTrigger = () => {
    setTriggers([...baseTriggers]);
  };

  return (
    <Box className="custom-workflow">
      <Box className="custom-workflow__content">
        <Box className="custom-workflow__base-actions">
          <Trigger trigger={basedTrigged} />
          <Trigger trigger={addTrigger} />
        </Box>
        <Box className="custom-workflow__triggers">
          {triggers.map((triggerItem, index) => (
            <Box
              sx={{ maxWidth: '300px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              key={index}
            >
              <IconButton className="plus-icon-btn" onClick={onAddNewTrigger}>
                <PlusIcon />
              </IconButton>
              <Trigger trigger={triggerItem} />
            </Box>
          ))}
        </Box>
        <Box className="custom-workflow__users">
          <IconButton className="plus-icon-btn" onClick={onAddNewTrigger}>
            <PlusIcon />
          </IconButton>
          <Box className="users-content">
            <UsersIcon />
            <h2 className="users-counter">6</h2>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
