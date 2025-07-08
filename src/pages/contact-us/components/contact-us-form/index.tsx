import React from 'react';
import { useState } from 'react';
import { Box, Button, MenuItem, Select, TextField, FormControl, SelectChangeEvent, FormLabel } from '@mui/material';

import './style.scss';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    interested: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > 1000) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Box
      component="form"
      className="contact-us-form-component"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        p: 4,
      }}
    >
      <FormControl>
        <FormLabel>First Name</FormLabel>
        <TextField
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          fullWidth
        />
      </FormControl>

      <FormControl>
        <FormLabel>Last Name</FormLabel>
        <TextField
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          fullWidth
        />
      </FormControl>

      <FormControl>
        <FormLabel>Phone</FormLabel>
        <TextField placeholder="Phone" name="phone" value={formData.phone} onChange={handleInputChange} fullWidth />
      </FormControl>

      <FormControl fullWidth>
        <FormLabel>I&apos;m interested in...</FormLabel>
        <Select
          // renderValue={(selected) => selected || 'Select an option'}
          labelId="interested-label"
          name="interested"
          value={formData.interested}
          onChange={handleSelectChange}
        >
          <MenuItem value="Support">Support</MenuItem>
          <MenuItem value="Sales Inquiry">Sales Inquiry</MenuItem>
          <MenuItem value="Demo Request">Demo Request</MenuItem>
          <MenuItem value="Partnership">Partnership</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Message</FormLabel>
        <TextField
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          multiline
          rows={4}
          fullWidth
          helperText={`${formData.message.length}/1000`}
        />
      </FormControl>

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
}
