import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import RoutingTask from '@shared/components/RoutingTask';

import './style.scss';

const routingTasks = [
  {
    icon: (
      <Avatar sx={{ bgcolor: '#C82859', color: '#ffffff' }}>
        <h2>M</h2>
      </Avatar>
    ),
    title: 'Task assigned to Maria',
    subtitle: '2 minutes ago',
  },
];

export default function SmartTaskRouting() {
  return (
    <Box className="smart-task-routing">
      <Box className="smart-task-routing__tasks">
        {routingTasks.map((task, index) => (
          <RoutingTask key={index} {...task} />
        ))}
      </Box>
      <p className="smart-task-routing__title">Auto-assigned based on expertise</p>
    </Box>
  );
}
