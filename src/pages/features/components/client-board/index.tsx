import { Box, Typography } from '@mui/material';
import SmallAlert from '@shared/components/SmallAlert';

import CrmIcon from '@assets/svg/ui/board-crm-icon.svg?react';

import './style.scss';

const boardData = [
  {
    title: 'Leads',
    value: '24',
  },
  {
    title: 'Pipeline',
    value: '$42k',
  },
  {
    title: 'Tasks',
    value: '8',
  },
  {
    title: 'Appointments',
    value: '12',
  },
];

export default function ClientBoard() {
  return (
    <Box className="client-board">
      <Box className="client-board__header">
        <Box className="title">
          <CrmIcon />
          <Typography className="text">Client CRM</Typography>
        </Box>
        <SmallAlert text="• Automation: On" status="paid" />
      </Box>
      <Box className="client-board__content">
        {boardData.map((data, index) => (
          <Box key={index} className="col">
            <Typography className="col__text">{data.title}</Typography>
            <Typography className="col__value">{data.value}</Typography>
          </Box>
        ))}
      </Box>
      <Box className="client-board__footer">
        <div className="alert-board">
          <div className="circle"></div>
          <p className="text">New lead auto-assigned to Sarag</p>
        </div>
      </Box>
      <Box sx={{ paddingBottom: '106px' }}></Box>
    </Box>
  );
}
