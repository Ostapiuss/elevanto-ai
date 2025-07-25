import React, { useState } from 'react';

import { Box, IconButton } from '@mui/material';

import Trigger from '@shared/components/Trigger';
import { TriggerItem } from '@interfaces/shared-interfaces';

import PlusIcon from '@assets/svg/plus-icon.svg?react';
import SubstituitionIcon from '@assets/svg/substitution-icon.svg?react';
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
    icon: <SubstituitionIcon />,
    status: 'ready',
    name: 'Trigger',
    description: 'Pipeline Update to New Lead',
  },
  {
    icon: <SubstituitionIcon />,
    name: 'Trigger',
    status: 'ready',
    description: 'Pipeline Update to New Lead',
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
            <React.Fragment key={index}>
              <IconButton className="plus-icon-btn" onClick={onAddNewTrigger}>
                <PlusIcon />
              </IconButton>
              <Trigger trigger={triggerItem} />
            </React.Fragment>
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
