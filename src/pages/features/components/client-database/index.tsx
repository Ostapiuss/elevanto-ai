import { Box } from '@mui/material';

import BasicTable from './components/basic-tables';

import { StatBarChart } from '@shared/components/SimpleAnimatedBarChart';

import './style.scss';

export default function ClientDatabase() {
  return (
    <Box className="client-database">
      <BasicTable />
      <Box className="client-database__activity">
        <h2 className="title">Activity Volume by Week</h2>
        <StatBarChart />
      </Box>
    </Box>
  );
}
