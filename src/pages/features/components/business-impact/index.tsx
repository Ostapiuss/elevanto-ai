import { Box } from '@mui/material';

import { ResultImpactItem } from '@interfaces/shared-interfaces';

import IncreaseIcon from '@assets/svg/increase-icon.svg?react';
import DicreaseIcon from '@assets/svg/dicrease-icon.svg?react';

import ResultImapct from '@shared/components/ResultImpact';

import './style.scss';

const businessImapctResults: ResultImpactItem[] = [
  {
    icon: <IncreaseIcon />,
    result: '+38%',
    title: 'New Form Submitted',
    titleColor: '#53A769',
    color: '#C82859',
    bgColor: '#FCEAEF',
  },
  {
    icon: <DicreaseIcon />,
    result: '-42%',
    title: 'Missed Opportunities',
    color: '#E8B730',
    bgColor: '#FFFAEB',
  },
  {
    icon: <IncreaseIcon />,
    result: '10x faster%',
    title: 'Response Speed',
    color: '#8965E3',
    bgColor: '#F5F1FE',
  },
];

export default function BusinessImpact() {
  return (
    <Box className="business-impact">
      <div className="business-impact__title">Real Business Impact</div>
      <Box className="business-impact__results">
        {businessImapctResults.map((item, index) => (
          <ResultImapct key={index} result={item} />
        ))}
      </Box>
    </Box>
  );
}
