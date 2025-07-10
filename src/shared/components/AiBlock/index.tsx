import { Box } from '@mui/material';

import { AiBlockItem } from '@interfaces/shared-interfaces';

import './style.scss';

type Props = {
  aiData: AiBlockItem;
};

export default function AiBlock({ aiData }: Props) {
  return (
    <Box className="ai-block">
      <Box className="ai-block__header">
        {aiData.icon}
        <h2>{aiData.title}</h2>
        {aiData.tag}
      </Box>
      <Box className="ai-block__content">
        {aiData.list.map((item, index) => {
          return (
            <Box key={index} className="item">
              <Box className="item__icon">{item.icon}</Box>
              <p className="item__title">{item.title}</p>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
