import { Box } from '@mui/material';

import { StatBarChart } from '@shared/components/SimpleAnimatedBarChart';

import { joinClassNames } from '@utils/utility';

import './style.scss';

const sections = [
  {
    title: 'Contact Profile',
    className: 'database-section',
    renderSubtitle: () => {
      return <p className="subtitle">Last interaction: 2 hours ago</p>;
    },
  },
  {
    title: 'Conversion Rate: +28%',
    className: 'database-section accent-database-section',
    renderSubtitle: () => {
      return <StatBarChart />;
    },
  },
];

export default function DatabaseAnalyze() {
  return (
    <Box className="database-analyze">
      {sections.map((section, index) => {
        return (
          <Box key={index} className={joinClassNames('db-section', section.className)}>
            <h2 className="db-section__title">{section.title}</h2>
            <Box className="db-section__render-subtitle">{section.renderSubtitle()}</Box>
          </Box>
        );
      })}
    </Box>
  );
}
