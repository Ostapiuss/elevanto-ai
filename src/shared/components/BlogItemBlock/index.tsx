import { Box } from '@mui/material';

import { BlogItem } from '@interfaces/blog-interfaces';
import CustomTag from '../CustomTag';

import DefaultSvgIcon from '@assets/svg/default-svg-icon.svg?react';

import ReadMore from '@shared/components/ReadMore';

import './style.scss';

type Props = {
  blog: BlogItem;
};

export default function BlockItemBlock({ blog }: Props) {
  return (
    <Box className="blog">
      <Box className="blog__icon">
        <DefaultSvgIcon />
      </Box>
      <Box className="blog__tag">
        <CustomTag bgColor="#FCEAEF" color="#C82859" text="Category Name" />
      </Box>
      <Box className="blog__title">{blog.title}</Box>
      <Box className="blog__description">
        <p>{blog.description}</p>
      </Box>
      <Box className="blog__read-more">
        <ReadMore text="Read more" />
      </Box>
    </Box>
  );
}
