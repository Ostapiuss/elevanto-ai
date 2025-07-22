import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps, accordionSummaryClasses } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import ArrowAccordionIcon from '@assets/svg/arrow-accordion-icon.svg?react';

import './style.scss';
import { AccordionsItme } from '@interfaces/shared-interfaces';

type Props = {
  data: Array<AccordionsItme>;
};

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&::before': {
      display: 'none',
    },
  }),
);

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowAccordionIcon />} {...props} />
))(({ theme }) => ({
  backgroundColor: 'white',
  fontFamily: 'TT Hoves Pro Trial, sans-serif',
  border: 'none',
  flexDirection: 'row',
  borderTop: '1px solid #EAEBEC',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
    transform: 'rotate(90deg)',
  },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),

  '> .MuiTypography-root': {
    fontFamily: 'TT Hoves Pro Trial, sans-serif',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function Accorions({ data }: Props) {
  const [expanded, setExpanded] = React.useState<number>(data ? data[0].id : 0);

  const handleChange = (panel: number) => {
    setExpanded(panel);
  };

  if (data && data.length > 0) {
    return (
      <div className="accordions">
        {data.map((accordionData, index) => {
          return (
            <Accordion
              className={`accordion accordion-${index}`}
              key={index}
              expanded={expanded === accordionData.id}
              onChange={() => handleChange(accordionData.id)}
            >
              <AccordionSummary
                aria-controls={`panel${accordionData.id}d-content`}
                id={`panel${accordionData.id}d-header`}
              >
                <Typography
                  component="span"
                  sx={(theme) => ({
                    color: theme.palette.primary.main,
                    fontSize: '20px',
                    lineHeight: '28px',
                    fontWeight: 600,
                  })}
                >
                  {accordionData.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="details">{accordionData.answer}</p>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    );
  }

  return <></>;
}
