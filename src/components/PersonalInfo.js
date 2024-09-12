import React from 'react'
import {TextField, Box} from '@mui/material'

const PersonalInfo = ({formData, setFormData, errors}) => {
  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <Box>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        error={!!errors.name}
        helperText={errors.name}
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        error={!!errors.email}
        helperText={errors.email}
        margin="normal"
      />
      <TextField
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
        error={!!errors.phone}
        helperText={errors.phone}
        margin="normal"
      />
    </Box>
  )
}

export default PersonalInfo
