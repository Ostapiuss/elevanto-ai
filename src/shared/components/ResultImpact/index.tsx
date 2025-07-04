import { Box, styled } from '@mui/material';
import { ResultImpactItem } from '@interfaces/shared-interfaces';

import './style.scss';

type Props = {
  result: ResultImpactItem;
};

export default function ResultImapct({ result }: Props) {
  const WrapperIcon = styled('div')`
    svg path {
      fill: ${result.color};
    }
  `;

  const StyledBox = styled(Box)`
    background-color: ${result.bgColor};
  `;

  return (
    <StyledBox className="result-impact">
      <Box className="result-impact__content">
        <h2 className="title" style={{ color: result.titleColor ? result.titleColor : '#2D3237' }}>
          {result.title}
        </h2>
        <h3 className="value" style={{ color: result?.color ? result?.color : '#000000' }}>
          {result.result}
        </h3>
      </Box>
      <Box className="result-impact__icon">
        <WrapperIcon>{result.icon}</WrapperIcon>
      </Box>
    </StyledBox>
  );
}
