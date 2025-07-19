import { Box } from '@mui/material';

import { AiBlockItem } from '@interfaces/shared-interfaces';
import { IF } from '../IF';
import { joinClassNames } from '@utils/utility';

import LeftConnectors from '@assets/svg/ui-agents-new/left-connectors.svg?react';
import SingleNewPoint from '@assets/svg/ui-agents-new/single-point.svg?react';

// import RightMultiplePoints from '@assets/svg/ui-agents/right-multiple-points.svg?react';
// import TopMultiplePoints from '@assets/svg/ui-agents/top-multiple-points.svg?react';
// import LeftMultiplePoints from '@assets/svg/ui-agents/left-multiple-points.svg?react';
// import BottomPoints from '@assets/svg/ui-agents/bottom-multiple-points.svg?react';

import './style.scss';

type Props = {
  aiData: AiBlockItem;
};

export default function AiBlock({ aiData }: Props) {
  return (
    <Box className={joinClassNames('ai-block', aiData.className)}>
      <Box className="ai-block__header">
        {aiData.icon}
        <h2>{aiData.title}</h2>
        {aiData.tag}
      </Box>
      <Box className="ai-block__content">
        {aiData?.list?.map((item, index) => {
          return (
            <Box key={index} className="item">
              <Box className="item__icon">{item.icon}</Box>
              <p className="item__title">{item.title}</p>
            </Box>
          );
        })}
      </Box>
      <IF condition={Boolean(aiData.leftPoints)}>
        <div className="left-points">
          <LeftConnectors />
        </div>
      </IF>
      <IF condition={Boolean(aiData.rightPoint)}>
        <div className="right-point">
          <SingleNewPoint />
        </div>
      </IF>
      {/* <IF condition={Boolean(aiData.bottomPoint)}>
        <div className="bottom-points">
          <SinglePoint />
        </div>
      </IF>
      <IF condition={Boolean(aiData.rightPoints)}>
        <div className="right-points">
          <RightMultiplePoints />
        </div>
      </IF>
      <IF condition={Boolean(aiData.rightPoint)}>
        <div className="right-point">
          <SinglePoint />
        </div>
      </IF>
      <IF condition={Boolean(aiData.leftPoints)}>
        <div className="left-points">
          <LeftMultiplePoints />
        </div>
      </IF>
      <IF condition={Boolean(aiData.topPoint)}>
        <div className="top-point">
          <SinglePoint />
        </div>
      </IF>
      <IF condition={Boolean(aiData.topPoints)}>
        <div className="top-points">
          <TopMultiplePoints />
        </div>
      </IF>
      <IF condition={Boolean(aiData.bottomPoints)}>
        <div className="bottom-points">
          <BottomPoints />
        </div>
      </IF> */}
    </Box>
  );
}
