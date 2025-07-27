import { Box } from '@mui/material';

import PlaybackIcon from '@assets/svg/playback-icon.svg?react';
import MessageBigIcon from '@assets/svg/message-big-icon.svg?react';
import CheckboxIcon from '@assets/svg/checkbox-icon.svg?react';
import CalendarBigIcon from '@assets/svg/calendar-big-icon.svg?react';

import OnlineBadge from '../OnlineBage';

import './style.scss';

const workflowCanvasItems = [
  {
    title: 'New Client Signup',
    subtitle: 'Webhook trigger',
    icon: <PlaybackIcon />,
  },
  {
    title: 'Send Welcome Email',
    subtitle: 'Template: welcome_new_client',
    icon: <MessageBigIcon />,
  },
  {
    title: 'Assign Onboarding Task',
    subtitle: 'To: Account Manager',
    icon: <CheckboxIcon />,
  },
  {
    title: 'Set Follow-up Reminder',
    subtitle: 'In 3 days',
    icon: <CalendarBigIcon />,
  },
];

export default function WorkflowCanvas() {
  return (
    <Box className="workflow-canvas">
      <Box className="workflow-canvas__title">
        <Box className="title">Workflow Canvas</Box>
        <OnlineBadge />
      </Box>
      <Box className="workflow-canvas__list">
        {workflowCanvasItems.map((workflow, index) => {
          return (
            <Box key={index} className="workflow-item">
              <Box className="icon">{workflow.icon}</Box>
              <Box className="content">
                <h2>{workflow.title}</h2>
                <p>{workflow.subtitle}</p>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box className="workflow-tasks">
        <h4>Task Completed</h4>
        <p>2 min ago</p>
      </Box>

      <Box className="workflow-email">
        <h4>Email Sent</h4>
        <p>Success</p>
      </Box>
    </Box>
  );
}
