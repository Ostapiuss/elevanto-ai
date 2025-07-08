import { useState } from 'react';
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';

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
      <Typography variant="h5" fontWeight={600}>
        Contact Form
      </Typography>

      <TextField
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        fullWidth
      />

      <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} fullWidth />

      <TextField label="Phone" name="phone" value={formData.phone} onChange={handleInputChange} fullWidth />

      <FormControl fullWidth>
        <InputLabel id="interested-label">Interested</InputLabel>
        <Select
          labelId="interested-label"
          name="interested"
          value={formData.interested}
          onChange={handleSelectChange}
          label="Interested"
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        multiline
        rows={4}
        fullWidth
        helperText={`${formData.message.length}/1000`}
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
}
