import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import { TriggerItem } from '@interfaces/shared-interfaces';
import { IF } from '@shared/components/IF';

import DotsIcon from '@assets/svg/dots-icon.svg?react';
import { joinClassNames } from '@utils/utility';

import './style.scss';

type Props = {
  trigger: TriggerItem;
};

export default function Trigger({ trigger }: Props) {
  return (
    <Box className={joinClassNames('trigger', trigger.status)}>
      <Box className="trigger__icon">{trigger.icon}</Box>
      <Box className="trigger__content">
        <h2 className="trigger__title">{trigger.name}</h2>
        <p className="trigger__description">{trigger.description}</p>
      </Box>
      <IF condition={trigger.status === 'ready'}>
        <Box className="trigger__action">
          <IconButton>
            <DotsIcon />
          </IconButton>
        </Box>
      </IF>
    </Box>
  );
}
