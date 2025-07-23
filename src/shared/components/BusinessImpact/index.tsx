import { Box } from '@mui/material';

import SharpContainer from '@shared/components/SharpContainer';
import SharpItem from '@shared/components/SharpItem';

import { BenefitItem } from '@interfaces/shared-interfaces';

import './style.scss';

type Props = {
  businessItems: BenefitItem[];
};

export default function BusinessImpact({ businessItems }: Props) {
  return (
    <Box className="business-impact-component">
      <SharpContainer>
        {businessItems.map((item, index) => {
          return (
            <SharpItem key={index}>
              <Box className="business-impact-item">
                <Box className="business-impact-item__icon-content">
                  <Box className="icon">{item.icon}</Box>
                  <h2 className="icon-title">{item.iconTitle}</h2>
                </Box>
                <div className="business-impact-item__title">{item.title}</div>
                <p className="business-impact-item__description">{item.description}</p>
              </Box>
            </SharpItem>
          );
        })}
      </SharpContainer>
    </Box>
  );
}
