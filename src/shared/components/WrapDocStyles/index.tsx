import { ReactNode } from 'react';

import { Box, styled } from '@mui/material';
import { joinClassNames } from '@utils/utility';

import './style.scss';

type Props = {
  className?: string;
  children: ReactNode;
};

const StyledWrapStyleDoc = styled(Box)`
  h1 {
    font-size: 36px;
    font-weight: 600;
    line-height: 40px;
    margin-bottom: 32px;
    font-family: 'IBM Plex Mono', monospace !important;
    color: #000000;
  }

  h2 {
    margin-bottom: 16px;
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
    color: #000000;
    font-family: 'IBM Plex Mono', monospace !important;
  }

  h4 {
    margin: 0;
    margin-bottom: 8px;
    font-size: 16px;
    line-height: 22px;
    font-weight: 600;
    color: #000000;
    font-family: 'IBM Plex Mono', monospace !important;
  }

  span {
    font-family: 'TT Hoves Pro Trial', sans-serif;
  }

  ol {
    padding-left: 20px;
    margin: 0;

    li {
      color: #000000;
      list-style: decimal;
      margin-bottom: 16px;

      p {
        margin: 0;
      }
    }

    ul {
      padding-left: 40px;
      margin-top: 8px;

      li {
        list-style: disc;
        margin-bottom: 0;
      }
      h4 {
        color: #000000;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        font-family: 'IBM Plex Mono', monospace;
        margin-bottom: 8px;
      }

      li {
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        color: #000000;
      }
    }
  }

  article {
    margin-bottom: 4px;
    color: #000000;
    font-family: 'TT Hoves Pro Trial', sans-serif;
  }

  .contact-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
    color: #000000;
  }

  ul {
    padding-left: 25px;
    margin-top: 8px;

    li {
      list-style: disc;
      margin-bottom: 0;
    }
    h4 {
      color: #000000;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      font-family: 'IBM Plex Mono', monospace;
      margin-bottom: 8px;
    }

    li {
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      color: #000000;
    }
  }

  p {
    color: #000000;
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    margin-bottom: 24px;
  }

  span.date {
    margin-bottom: 35px;
  }
`;

export default function WrapStyleDoc({ className, children }: Props) {
  return <StyledWrapStyleDoc className={joinClassNames('wrap-style-doc', className)}>{children}</StyledWrapStyleDoc>;
}
