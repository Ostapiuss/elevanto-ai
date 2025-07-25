import { RealCaseItem } from '@interfaces/shared-interfaces';
import { Box } from '@mui/material';

import './style.scss';

type Props = {
  case: RealCaseItem;
};

export default function RealCase({ case: caseItem }: Props) {
  return (
    <Box className="case-item">
      <Box className="case-item__title-container">
        <div className="icon">{caseItem.icon}</div>
        <div className="title">{caseItem.title}</div>
      </Box>
      <Box className="case-item__description">
        <p>{caseItem.description}</p>
      </Box>
      <Box className="case-item__list">
        {caseItem.list.map((item, index) => (
          <Box key={index} className="case-item__list-item">
            <Box className="icon">{item.icon}</Box>
            <Box className="text">
              <p>{item.text}</p>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
