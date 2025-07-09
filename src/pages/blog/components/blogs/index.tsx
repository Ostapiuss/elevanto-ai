import { Box } from '@mui/material';
import SearchBar from '../search-bar';

import { blogs } from '@mocks/blogs';
import BlockItemBlock from '@shared/components/BlogItemBlock';

import './style.scss';

export default function Blogs() {
  return (
    <Box className="blogs">
      <SearchBar />
      <Box className="blogs__items">
        {blogs.map((blog, index) => (
          <BlockItemBlock key={index} blog={blog} />
        ))}
      </Box>
    </Box>
  );
}
