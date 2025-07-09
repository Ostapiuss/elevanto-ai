import React, { useState } from 'react';

import { Box, Button, TextField } from '@mui/material';

import './style.scss';

export default function SearchBar() {
  const [searchedValue, setSearchedBlog] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedBlog(event.target.value);
  };

  return (
    <Box className="search-bar">
      <TextField
        placeholder="Search articles"
        name="search-articles"
        sx={{ maxWidth: '341px', width: '100%' }}
        value={searchedValue}
        onChange={handleInputChange}
      />
      <Button variant="contained">Subscribe for updates</Button>
    </Box>
  );
}
