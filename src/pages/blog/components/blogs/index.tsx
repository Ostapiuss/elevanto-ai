import { Box } from '@mui/material';
import SearchBar from '../search-bar';

import BlockItemBlock from '@shared/components/BlogItemBlock';
import { BlogItem } from '@interfaces/blog-interfaces';
import { useEffect, useState } from 'react';
import { blogsApi } from '@api/blog-api';

import './style.scss';
import { IF } from '@shared/components/IF';
import { Loader } from '@shared/components/LoaderDots';

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogItem[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchBlogs = async () => {
    const { data: baseData } = await blogsApi.getEventLog();
    setBlogs(baseData.data);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchBlogs();
  }, []);

  return (
    <Box className="blogs">
      <SearchBar />
      <Box className="blogs__items">
        <IF condition={Boolean(isLoading)}>
          <Loader loaderType="beat" size={20} />
        </IF>
        <IF condition={Boolean(!isLoading)}>
          {blogs && blogs?.map((blog, index) => <BlockItemBlock key={index} blog={blog} />)}
        </IF>
      </Box>
    </Box>
  );
}
