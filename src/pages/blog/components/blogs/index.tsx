import { Box } from '@mui/material';
import SearchBar from '../search-bar';

import BlockItemBlock from '@shared/components/BlogItemBlock';
import { BlogItem } from '@interfaces/blog-interfaces';
import { useEffect, useState } from 'react';
import { blogsApi } from '@api/blog-api';

import './style.scss';

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogItem[] | []>([]);

  const fetchBlogs = async () => {
    const { data: baseData } = await blogsApi.getEventLog();
    setBlogs(baseData.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Box className="blogs">
      <SearchBar />
      <Box className="blogs__items">
        {blogs && blogs?.map((blog, index) => <BlockItemBlock key={index} blog={blog} />)}
      </Box>
    </Box>
  );
}
